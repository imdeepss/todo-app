"use client"

import { TodoContextType, TodoType } from "@/app/components/types";
import { createContext, ReactNode, useState, useContext } from "react";


export const todosContext = createContext<TodoContextType | null>(null);

export const TodosProvider = ({ children }: { children: ReactNode }) => {
    const [todos, setTodos] = useState<TodoType[]>([]);

    const handleAddTodo = (task: string) => {
        const newTodo: TodoType = {
            id: Math.random().toString(),
            task,
            complete: false,
            createdAt: new Date(),
        };

        setTodos((prevTodos) => [newTodo, ...prevTodos]);
    };

    return (
        <todosContext.Provider value={{ todos, handleAddTodo }}>
            {children}
        </todosContext.Provider>
    );
};

export function useTodos() {
    const todosContextValue = useContext(todosContext);

    if (!todosContextValue) {
        throw new Error("useTodos used outside of TodosProvider");
    }

    return todosContextValue;
}
