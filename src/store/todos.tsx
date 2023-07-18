'use client';

import {
  createContext,
  ReactNode,
  useState,
  useContext,
  useEffect,
} from 'react';
import { TodoContextType, TodoType } from '@/app/components/types';
import useTodoCart from '@/app/components/hooks/useLocalStorage';

export const TodosContext = createContext<TodoContextType | undefined>(
  undefined
);

export const TodosProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const { todoData, addTodoData, clearTodoData } = useTodoCart();

  useEffect(() => {
    setTodos(todoData);
  }, [todoData]);

  const handleAddTodo = (task: string) => {
    const newTodo: TodoType = {
      id: Math.random().toString(),
      task,
      complete: false,
      createdAt: new Date(),
    };

    setTodos((prevTodos) => [newTodo, ...prevTodos]);
    addTodoData([newTodo]);
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
    throw new Error('useTodos used outside of TodosProvider');
  }

  return todosContextValue;
}
