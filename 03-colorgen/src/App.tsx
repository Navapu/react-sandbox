import { useState, useEffect } from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { GiCancel } from "react-icons/gi";

function App() {
  const [color, setColor] = useState("#111211");
  const [savedColors, setSavedColors] = useState<
    { id: string; color: string }[]
  >(() => {
    const saved = localStorage.getItem("colors");
    return saved ? JSON.parse(saved) : [];
  });

  const generateNumber = () => {
    let number = Math.floor(Math.random() * 256).toString(16);
    if (number.length === 1) {
      number = "0" + number;
      return number;
    }
    return number;
  };

  useEffect(() => {
    localStorage.setItem("colors", JSON.stringify(savedColors));
  }, [savedColors]);

  const toggleColor = () => {
    const R = generateNumber();
    const G = generateNumber();
    const B = generateNumber();

    setColor("#" + R + G + B);
  };

  const copyColor = async (col: string) => {
    await navigator.clipboard.writeText(col);
    toast.success("Copiado al portapapeles !!");
  };

  const saveColor = () => {
    copyColor(color);
    setSavedColors((prev) => [...prev, { id: crypto.randomUUID(), color }]);
  };

  const deleteColor = (id: string) => {
    setSavedColors((prev) => prev.filter((col) => col.id !== id));
  };

  return (
    <div className="w-full">
      <div className="w-full max-w-full">
        <h1 className="mb-4">Random color generator</h1>

        <button onClick={toggleColor}>Generate</button>
        <ToastContainer />
        <div
          className={`bg-[${color}] w-full h-80 mt-4 rounded-md cursor-pointer`}
          onClick={saveColor}
        ></div>
        <div className="flex flex-wrap mt-10 gap-2 w-full">
          {savedColors.map((col) => (
            <div
              key={col.id}
              className={`bg-[${col.color}] w-20 h-20 rounded-md cursor-pointer flex items-start justify-end pr-2 pt-2`}
              onClick={() => copyColor(col.color)}
            >
              <GiCancel
                className={`bg-[${col.color}] hover:text-red-500 transition-colors duration-300`}
                onClick={(e) => {
                  e.stopPropagation();
                  deleteColor(col.id);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
