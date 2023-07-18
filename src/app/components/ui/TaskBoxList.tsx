'use client';

import { useTodos } from '@/store/todos';
import SingleTaskList from './SingleTaskList';
import useTodoCart from '../hooks/useLocalStorage';

const TaskBoxList = () => {
  const { todos } = useTodos();

  return (
    <section className="py-10 flex flex-col gap-2 w-[400px]">
      {todos &&
        todos.map((_) => (
          <SingleTaskList
            task={_.task}
            key={_.id}
            id={_.id}
            complete={_.complete}
          />
        ))}
    </section>
  );
};

export default TaskBoxList;
