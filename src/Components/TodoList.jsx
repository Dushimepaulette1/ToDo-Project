import TodoItem from "./TodoItem";

export default function TodoList({ todos, toggleComplete, deleteTodo }) {
  if (todos.length === 0) {
    return <p className="text-center text-gray-500">No tasks yet... 😴</p>;
  }

  return (
    <ul className="space-y-3">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}
