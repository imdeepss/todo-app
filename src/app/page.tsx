export default function Home() {
  return (
    <main className="bg-dark-brown w-full min-h-screen p-20 flex justify-center items-center">
      <section className="text-center">
        <h1 className="text-5xl font-mono font-normal text-pale-gold mb-5 text-center">
          Just do it.|
        </h1>
        <form>
          <label className="flex justify-center items-center">
            <input
              className="w-full px-2 py-2 md:px-4 md:py-3 text-lg font-semibold text-coffee-brown bg-gray-100 rounded-l-full outline-none"
              type="text"
              placeholder="Add your task..."
            />
            <button
              type="button"
              className="px-5 py-3 text-lg font-bold text-coffee-brown bg-pale-gold rounded-r-full outline-none"
            >
              Add
            </button>
          </label>
        </form>
        {/* Adding Date and time */}
        {/* list of task */}
      </section>
    </main>
  );
}
