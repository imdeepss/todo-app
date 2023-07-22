import { AddTodo, TaskBoxList, ToggleButton } from "./common/components";


export default function Home() {
  return (
    <main className="dark:bg-dark-brown bg-pale-gold w-full min-h-screen p-20 flex justify-center items-center relative">
      <ToggleButton/>
      <div className="">
        <h1 className="text-5xl font-mono font-normal dark:text-pale-gold text-dark-brown mb-5 text-center">
          Just do it.|
        </h1>
        <AddTodo />
        <TaskBoxList />
      </div>
    </main>
  );
}
