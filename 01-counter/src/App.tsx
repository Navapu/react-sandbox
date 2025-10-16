import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("count");
    return savedCount !== null ? Number(savedCount) : 0;
  });
  const [error, setError] = useState("");
  const [max, setMax] = useState("15");
  const [min, setMin] = useState("-5");

  const handleIncrement = () => {
    if (isNaN(Number(max))) return;
    if (count >= Number(max)) return;
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (isNaN(Number(min))) return;
    if (count <= Number(min)) return;
    setCount((prev) => prev - 1);
  };

  useEffect(() => {
    const savedCount = localStorage.getItem("count");
    const savedMax = localStorage.getItem("max");
    const savedMin = localStorage.getItem("min");
    if (savedCount !== null) {
      setCount(Number(savedCount));
    }
    if (savedMax !== null) {
      setMax(savedMax);
    }
    if (savedMin !== null) {
      setMin(savedMin);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("count", String(count));
  }, [count]);

  const handlemax = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    if (value === "") {
      setError("El valor máximo no puede estar vacío");
      setMax(value);
      return;
    }
    const parsed = Number(value);

    if (isNaN(parsed)) {
      setError("Por favor ingresa un número válido.");
      setMax(value);
      return;
    }

    if (Number(value) <= Number(min)) {
      setError("El valor máximo debe ser mayor que el mínimo.");
      return;
    }
    setError("");
    setMax(value);
    localStorage.setItem("max", String(value));
    if (Number(value) < count) {
      setCount(Number(value));
      return;
    }
  };

  const handlemin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    if (value === "") {
      setError("El valor mínimo no puede estar vacío");
      setMin(value);
      return;
    }
    const parsed = Number(value);

    if (isNaN(parsed)) {
      setError("Por favor ingresa un número válido.");
      setMin(value);
      return;
    }
    if (Number(value) >= Number(max)) {
      setError("El valor mínimo debe ser menor que el máximo.");
      return;
    }

    setError("");
    setMin(value);
    localStorage.setItem("min", String(value));

    if (Number(value) > count) {
      setCount(Number(value));
      return;
    }
  };

  return (
    <div>
      <h1 className="text-white">Counter</h1>
      <div className="flex gap-2 items-center m-3 justify-center">
        <button onClick={handleIncrement} className="bg-[#4F3824]">
          +1
        </button>
        <h2 className="text-[#DDB967] m-3">{count}</h2>
        <button onClick={handleDecrement}>-1</button>
      </div>
      <button onClick={() => setCount(0)}>Limpiar</button>

      <div className="flex flex-col items-center gap-4 mt-6">
        <label className="text-white">Valor mínimo</label>
        <input
          type="text"
          name="min"
          onChange={handlemin}
          value={min}
          className="bg-[#4F3824] text-[#DDB967] border border-[#DDB967] rounded px-3 py-1 w-32 text-center focus:outline-none focus:ring-2 focus:ring-[#DDB967]"
        />

        <label className="text-white">Valor máximo</label>
        <input
          type="text"
          name="max"
          onChange={handlemax}
          value={max}
          className="bg-[#4F3824] text-[#DDB967] border border-[#DDB967] rounded px-3 py-1 w-32 text-center focus:outline-none focus:ring-2 focus:ring-[#DDB967]"
        />
      </div>
      <p className="text-red-500 m-3">{error}</p>
    </div>
  );
}

export default App;
