const TodoComputed = ({ computedItemsLeft, clearCompleted }) => {
  return (
    <section className="flex justify-between rounded-b-md bg-white px-4 py-4 transition-all duration-1000 dark:bg-gray-800">
      <span className=" text-gray-400"> {computedItemsLeft} items lefts</span>
      <button onClick={() => clearCompleted()} className=" text-gray-400">
        Clear completed
      </button>
    </section>
  );
};

export default TodoComputed;
