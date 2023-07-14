import { CorrectIcon, DeleteIcon } from "../icons"
import { TaskListType, TodoType } from "../types"

const SingleTaskList = ({ task, complete }: TodoType) => {
    return (
        <div className="px-4 py-2 rounded-md bg-pale-gold flex justify-between gap-4 items-center w-full">
            <p className="text-lg font-bold text-coffee-brown">{task}</p>
            <div className="flex gap-2">
                <button type="button" className="rounded-full bg-coffee-brown p-2">
                    <CorrectIcon />
                </button>
                {
                    complete && (
                        <button type="button" className="rounded-full bg-coffee-brown p-2">
                            <DeleteIcon />
                        </button>
                    )
                }
            </div>
        </div>
    )
}

export default SingleTaskList