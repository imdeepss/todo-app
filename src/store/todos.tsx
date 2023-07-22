'use client';

import {
  createContext,
  ReactNode,
  useState,
  useContext,
  useEffect,
} from 'react';
import { TodoContextType, TodoType } from '@/app/common/types';
import useTodoCart from '@/app/common/hooks/useLocalStorage';

export const TodosContext = createContext<TodoContextType | undefined>(
  undefined
);

export const TodosProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const { todoData, addTodoData, clearTodoData ,updateTodoData} = useTodoCart();

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
    setTodos((prevTodos) => {
      const newTodo = prevTodos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      )
      updateTodoData(newTodo)
      return newTodo
    }
    );
  };

  const deleteTask = (id: string) => {
    setTodos((prevTodos) => {
      const newTodo:TodoType[] = prevTodos.filter((todo) => todo.id !== id)
      clearTodoData(newTodo)
      return newTodo
    });
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
