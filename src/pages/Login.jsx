import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/userContext";
import { getUsers, createUser } from "../service/users.js";

const FIXED_PASSWORD = "123456";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useUser();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    if (password !== FIXED_PASSWORD) {
      setError('Contraseña incorrecta. Usa "123456"');
      setIsLoading(false);
      return;
    }

    try {

      // REGISTRO
      if (!isLogin) {
        const newUser = await createUser(nombre);
        login(newUser);
        navigate("/");
        return;
      }

      // LOGIN
      const users = await getUsers();
      const user = users.find((u) => u.nombre === nombre);

      if (user) {
        login(user);
        navigate("/");
      } else {
        setError("Usuario no encontrado");
      }

    } catch (err) {
      setError("Error al procesar la solicitud");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 p-6">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-md shadow-2xl rounded-2xl p-8">

        <div className="text-center mb-6">
          <div className="text-4xl mb-2">🌊</div>
          <h1 className="text-2xl font-semibold text-purple-700">
            {isLogin ? "Bienvenido a Alme" : "Crear cuenta en Alme"}
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            placeholder="Nombre completo"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />

          <input
            type="password"
            placeholder="Contraseña (123456)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />

          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-xl transition"
          >
            {isLoading
              ? "Procesando..."
              : isLogin
              ? "Iniciar sesión"
              : "Crear cuenta"}
          </button>

        </form>

        <div className="mt-6 text-center text-sm">
          {isLogin ? (
            <p>
              ¿No tenés cuenta?{" "}
              <button
                onClick={() => setIsLogin(false)}
                type="button"
                className="text-purple-600 font-medium hover:underline"
              >
                Registrate
              </button>
            </p>
          ) : (
            <p>
              ¿Ya tenés cuenta?{" "}
              <button
                onClick={() => setIsLogin(true)}
                type="button"
                className="text-purple-600 font-medium hover:underline"
              >
                Iniciá sesión
              </button>
            </p>
          )}
        </div>

      </div>
    </div>
  );
}