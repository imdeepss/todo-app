"use client"

import { createContext, ReactNode, useState, useContext } from "react";
import { TodoContextType, TodoType } from "@/app/components/types";

export const TodosContext = createContext<TodoContextType | undefined>(undefined);

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

    const completedTask = (id: string) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, complete: !todo.complete } : todo
            )
        );
    };

    const deleteTask = (id: string) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    return (
        <TodosContext.Provider
            value={{ todos, handleAddTodo, completedTask, deleteTask }}
        >
            {children}
        </TodosContext.Provider>
    );
};

export function useTodos() {
    const todosContextValue = useContext(TodosContext);

    if (!todosContextValue) {
        throw new Error("useTodos used outside of TodosProvider");
    }

    return todosContextValue;
}
