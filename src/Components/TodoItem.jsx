export default function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <li
      className={`flex justify-between items-center p-4 rounded-xl border text-lg ${
        todo.completed
          ? "bg-green-100 border-green-400"
          : "bg-yellow-50 border-yellow-300"
      }`}
    >
      <div
        onClick={() => toggleComplete(todo.id)}
        className={`flex-1 cursor-pointer ${
          todo.completed ? "line-through text-gray-500" : "text-gray-800"
        }`}
      >
        {todo.completed ? "✅ " : "🟡 "}
        {todo.text}
      </div>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-red-500 hover:text-red-700 text-xl"
      >
        🗑️
      </button>
    </li>
  );
}
