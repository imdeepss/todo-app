import { useTodos } from "@/store/todos";
import { CorrectIcon, DeleteIcon } from "../icons";
import { TodoType } from "../types";

const SingleTaskList = ({ id, task, complete }: TodoType) => {
    const { completedTask, deleteTask } = useTodos();

    return (
        <div className="px-4 py-2 rounded-md dark:bg-pale-gold bg-coffee-brown text-coffee-brown flex justify-between gap-4 items-center w-full">
            <p className={`text-lg font-bold dark:text-coffee-brown text-pale-gold ${complete ? "line-through" : ""}`}>
                {task}
            </p>
            <div className="flex gap-2">
                <button
                    type="button"
                    className="rounded-full dark:bg-coffee-brown bg-pale-gold p-2"
                    onClick={() => {
                        if (id) {
                            completedTask(id);
                        }
                    }}
                >
                    <CorrectIcon />
                </button>
                {complete && (
                    <button
                        type="button"
                        className="rounded-full dark:bg-coffee-brown bg-pale-gold p-2"
                        onClick={() => {
                            if (id) {
                                deleteTask(id);
                            }
                        }}
                    >
                        <DeleteIcon />
                    </button>
                )}
            </div>
        </div>
    );
};

export default SingleTaskList;
