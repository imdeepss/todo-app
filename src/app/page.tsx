import { AddTodo, TaskBoxList } from "./common/components";
import { MoonIcon, SunIcon } from "./common/icons";


export default function Home() {
  return (
    <main className="bg-dark-brown w-full min-h-screen p-20 flex justify-center items-center relative">
      <div className="absolute top-5 right-10">
        <button type="button" className="bg-pale-gold p-2 rounded-md">
          {/* <SunIcon/> */}
          <MoonIcon/>
        </button>
      </div>
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
