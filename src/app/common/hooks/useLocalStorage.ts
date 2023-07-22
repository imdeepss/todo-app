import { useCallback } from 'react';
import useLocalStorageState from 'use-local-storage-state';
import { TodoType } from '../types';

const initialData: TodoType[] = [];

const useTodoCart = () => {
  const [todoData, setTodoData] =
    useLocalStorageState<TodoType[]>('taskData', {
      defaultValue: initialData,
    });
  const addTodoData = useCallback(
    (item: TodoType[]) => {
      setTodoData((prevData) => [...prevData, ...item]);
    },
    [setTodoData]
  );

  const clearTodoData = useCallback((item:TodoType[]) => {
    setTodoData(item);
  }, [setTodoData]);

  const updateTodoData = useCallback((item:TodoType[]) => {
    setTodoData(item);
  }, [setTodoData]);

  return {
    todoData,
    addTodoData,
    clearTodoData,
    updateTodoData
  };
};

export default useTodoCart;
