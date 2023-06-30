import TodoItem from "./TodoItem";
import { Droppable, Draggable } from "@hello-pangea/dnd";

const TodoList = ({ todos, removeTodo, updateTodo }) => {
  return (
    <Droppable droppableId="todos">
      {(droppableProvider) => (
        <div
          ref={droppableProvider.innerRef}
          {...droppableProvider.droppableProps}
          className=" mt-8 overflow-hidden rounded-t-md bg-white"
        >
          {todos.map((todo, index) => (
            <Draggable key={todo.id} index={index} draggableId={`${todo.id}`}>
              {(draggableProvider) => (
                <TodoItem
                  todo={todo}
                  removeTodo={removeTodo}
                  updateTodo={updateTodo}
                  ref={draggableProvider.innerRef}
                  {...draggableProvider.dragHandleProps}
                  {...draggableProvider.draggableProps}
                />
              )}
            </Draggable>
          ))}

          {droppableProvider.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default TodoList;
