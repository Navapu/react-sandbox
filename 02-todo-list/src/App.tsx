import { useState, useEffect } from "react";
import "./App.css";
import { MdOutlineCancel } from "react-icons/md";

interface Task {
  tarea: string;
  estado: "pendiente" | "completado";
}

type Filter = "todas" | "pendientes" | "completadas";

function App() {
  const [inputTask, setInputTask] = useState("");
  const [error, setError] = useState("");
  const [filter, setFilter] = useState<Filter>("todas");
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  // 💾 Guardar en localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // ➕ Añadir tarea
  const addTask = () => {
    if (inputTask.trim() === "") {
      return setError("Error: introduzca una tarea");
    }
    const newTask: Task = { tarea: inputTask.trim(), estado: "pendiente" };
    setTasks((prev) => [...prev, newTask]);
    setInputTask("");
    setError("");
  };

  // ❌ Eliminar tarea individual
  const deleteTask = (index: number) => {
    setTasks((prev) => prev.filter((_, i) => i !== index));
  };

  // 🔄 Cambiar estado (pendiente ↔ completado)
  const toggleStatus = (index: number) => {
    setTasks((prev) =>
      prev.map((task, i) =>
        i === index
          ? { ...task, estado: task.estado === "pendiente" ? "completado" : "pendiente" }
          : task
      )
    );
  };

  // 🧹 Eliminar todas las completadas
  const deleteCompleted = () => {
    setTasks((prev) => prev.filter((task) => task.estado !== "completado"));
  };

  // 🔍 Filtro de tareas
  const filteredTasks = tasks.filter((task) => {
    if (filter === "pendientes") return task.estado === "pendiente";
    if (filter === "completadas") return task.estado === "completado";
    return true; // "todas"
  });

  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      {error && <p className="text-red-500">{error}</p>}

      <div className="flex flex-col gap-4 p-4 justify-center">
        {/* Input + Añadir */}
        <div className="flex gap-4 p-4 justify-center">
          <input
            type="text"
            className="border rounded-md pr-4 pl-4"
            placeholder="Tarea..."
            onChange={(e) => setInputTask(e.target.value)}
            value={inputTask}
          />
          <button className="text-gray-900" onClick={addTask}>
            Añadir tarea
          </button>
        </div>

        {/* Filtros */}
        <div className="flex gap-3 justify-center">
          <button
            onClick={() => setFilter("todas")}
            className={`px-3 py-1 rounded ${
              filter === "todas" ? "bg-green-400 text-white" : "bg-gray-200"
            }`}
          >
            Todas
          </button>
          <button
            onClick={() => setFilter("pendientes")}
            className={`px-3 py-1 rounded ${
              filter === "pendientes" ? "bg-green-400 text-white" : "bg-gray-200"
            }`}
          >
            Pendientes
          </button>
          <button
            onClick={() => setFilter("completadas")}
            className={`px-3 py-1 rounded ${
              filter === "completadas" ? "bg-green-400 text-white" : "bg-gray-200"
            }`}
          >
            Completadas
          </button>
        </div>

        {/* Lista de tareas */}
        <div className="flex flex-col gap-4 p-4 bg-yellow-200 rounded-md">
          <div className="flex justify-between items-center gap-4">
            <h1 className="font-bold text-lg">Tareas ({filteredTasks.length})</h1>
            <button
              onClick={deleteCompleted}
              className="text-sm bg-red-500 hover:bg-red-400 text-white px-3 py-1 rounded"
            >
              Eliminar completadas
            </button>
          </div>
          <hr />

          {filteredTasks.length === 0 ? (
            <p className="text-gray-500">No hay tareas en esta vista</p>
          ) : (
            filteredTasks.map((task, index) => (
              <div
                key={index}
                className={`flex gap-4 items-center border rounded-md p-2 transition-colors ${
                  task.estado === "completado"
                    ? "bg-green-100 line-through"
                    : "bg-yellow-100"
                }`}
              >
                <p
                  onClick={() => toggleStatus(index)}
                  className="cursor-pointer mr-auto"
                >
                  {task.tarea}
                </p>
                <MdOutlineCancel
                  size={20}
                  onClick={() => deleteTask(index)}
                  className="cursor-pointer text-red-500 hover:text-red-400"
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
