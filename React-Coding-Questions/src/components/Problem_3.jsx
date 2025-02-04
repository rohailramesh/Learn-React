import { useState } from "react";

const Problem_3 = () => {
  const [tasks, setTasks] = useState([]); // List of tasks
  const [input, setInput] = useState(""); // User input for new task
  const [editingTaskId, setEditingTaskId] = useState(null); // Tracks which task is being edited
  const [editingText, setEditingText] = useState(""); // Stores edited text

  // Add task
  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
      setInput(""); // Clear input after adding
    }
  };

  // Remove task
  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle task completion
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Enable editing mode
  const editTask = (id, text) => {
    setEditingTaskId(id);
    setEditingText(text);
  };

  // Save updated task
  const saveTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: editingText } : task
      )
    );
    setEditingTaskId(null); // Exit editing mode
    setEditingText(""); // Clear editing input
  };

  return (
    <div>
      <h3>
        Problem: 3. Create a to-do list component where users can add, remove,
        and mark items as complete.
      </h3>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a task..."
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(task.id)}
            />

            {editingTaskId === task.id ? (
              <>
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                />
                <button onClick={() => saveTask(task.id)}>Save</button>
              </>
            ) : (
              <>
                {task.text}
                <button onClick={() => editTask(task.id, task.text)}>
                  ✏️ Edit
                </button>
              </>
            )}

            <button onClick={() => removeTask(task.id)}>❌ Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Problem_3;
