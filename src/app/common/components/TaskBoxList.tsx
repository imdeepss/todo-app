'use client';

import { useTodos } from '@/store/todos';
import SingleTaskList from './SingleTaskList';

const TaskBoxList = () => {
  const { todos } = useTodos();

  return (
    <section className="my-10 flex flex-col gap-2 w-[400px] max-h-[500px] overflow-auto scrollBar">
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
