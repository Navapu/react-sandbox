import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [isMinus, setIsMinus] = useState(true);
  const [isMayus, setIsMayus] = useState(false);
  const [isNum, setIsNum] = useState(false);
  const [isSymbols, setIsSymbols] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const minus = "abcdefghijklmnopqrstuvwxyz";
  const mayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const num = "0123456789";
  const symbols = "!@#$%^&*()_+-=[]{};:,.<>?";

  const countActive = () =>
    [isMinus, isMayus, isNum, isSymbols].filter(Boolean).length;

  const generatePassword = () => {
    let format = "";
    if (isMinus) format += minus;
    if (isMayus) format += mayus;
    if (isNum) format += num;
    if (isSymbols) format += symbols;

    if (!format) {
      setPassword("Selecciona al menos una opción");
      return;
    }

    let newPassword = "";
    for (let i = 0; i < 15; i++) {
      const randomIndex = Math.floor(Math.random() * format.length);
      newPassword += format[randomIndex];
    }
    setPassword(newPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  useEffect(() => {
    generatePassword();
  }, [isMinus, isMayus, isNum, isSymbols]);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4 w-full">
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6">
          🔐 Generador de Contraseñas
        </h1>

        {/* Opciones */}
        <form className="grid grid-cols-2 gap-3 mb-6">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={isMinus}
              disabled={isMinus && countActive() === 1}
              onChange={(e) => setIsMinus(e.target.checked)}
              className="accent-blue-500 w-4 h-4"
            />
            <span>Minúsculas</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={isMayus}
              disabled={isMayus && countActive() === 1}
              onChange={(e) => setIsMayus(e.target.checked)}
              className="accent-blue-500 w-4 h-4"
            />
            <span>Mayúsculas</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={isNum}
              disabled={isNum && countActive() === 1}
              onChange={(e) => setIsNum(e.target.checked)}
              className="accent-blue-500 w-4 h-4"
            />
            <span>Números</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={isSymbols}
              disabled={isSymbols && countActive() === 1}
              onChange={(e) => setIsSymbols(e.target.checked)}
              className="accent-blue-500 w-4 h-4"
            />
            <span>Símbolos</span>
          </label>
        </form>

        {/* Contraseña + botones */}
        <div className="flex items-center bg-gray-700 rounded-lg overflow-hidden">
          <p className="flex-1 text-center p-3 font-mono tracking-widest select-all">
            {password}
          </p>

          <div className="flex space-x-1 pr-2">
            <button
              onClick={generatePassword}
              className="bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded text-sm font-semibold transition"
              title="Regenerar contraseña"
            >
              🔁
            </button>

            <button
              onClick={copyToClipboard}
              className={`${
                copied ? "bg-green-500" : "bg-gray-500 hover:bg-gray-600"
              } px-3 py-2 rounded text-sm font-semibold transition`}
              title="Copiar al portapapeles"
            >
              {copied ? "✅" : "📋"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
