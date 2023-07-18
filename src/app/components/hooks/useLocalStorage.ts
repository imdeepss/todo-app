import { useCallback } from 'react';
import useLocalStorageState from 'use-local-storage-state';
import { TodoType } from '../types';

const initialData: TodoType[] = [];

const useTodoCart = () => {
  const [todoData, setTodoData, { removeItem: clearTodoData }] =
    useLocalStorageState<TodoType[]>('taskData', {
      defaultValue: initialData,
    });
  const addTodoData = useCallback(
    (item: TodoType[]) => {
      setTodoData((prevData) => [...prevData, ...item]);
    },
    [setTodoData]
  );

  return {
    todoData,
    addTodoData,
    clearTodoData,
  };
};

export default useTodoCart;
