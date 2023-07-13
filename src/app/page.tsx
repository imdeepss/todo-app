import { AddTodo, TaskBoxList } from "./components/ui";

export default function Home() {
  return (
    <main className="bg-dark-brown w-full min-h-screen p-20 flex justify-center items-center">
      <div className="">
        <h1 className="text-5xl font-mono font-normal text-pale-gold mb-5 text-center">
          Just do it.|
        </h1>
        <AddTodo />
        <TaskBoxList />
      </div>
    </main>
  );
}
