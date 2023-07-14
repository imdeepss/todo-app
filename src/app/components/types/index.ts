export type TaskListType = {
  task: string;
};

export type TodoType = {
  id?: string;
  task: string;
  complete: boolean;
  createdAt?: Date;
};

export type TodoContextType = {
  todos: TodoType[];
  handleAddTodo: (task: string) => void;
};
