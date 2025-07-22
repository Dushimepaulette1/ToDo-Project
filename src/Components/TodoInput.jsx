import { useState } from "react";

export default function TodoInput({ addTodo }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 mb-6">
      <input
        type="text"
        placeholder="What are we doing today.... 🐣"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 px-5 py-3 rounded-xl text-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
      />
      <button
        type="submit"
        className="bg-purple-500 text-white text-lg px-5 py-3 rounded-xl hover:bg-purple-600 transition"
      >
        ➕ Add
      </button>
    </form>
  );
}
