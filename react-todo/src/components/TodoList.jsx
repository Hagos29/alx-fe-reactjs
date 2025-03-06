import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a Todo App", completed: false },
  ]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setNewTodo("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Todo List</h2>
      <div className="flex mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="border p-2 flex-grow rounded-l"
          placeholder="Add a new task"
        />
        <button onClick={addTodo} className="bg-blue-500 text-white p-2 rounded-r">
          Add
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center justify-between p-2 border-b">
            <span
              onClick={() => toggleTodo(todo.id)}
              className={
                "cursor-pointer " + (todo.completed ? "line-through text-gray-500" : "")
              }
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)} className="text-red-500">
              ✖
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
