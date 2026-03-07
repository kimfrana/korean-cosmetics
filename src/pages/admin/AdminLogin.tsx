import { useState } from "react";
import type { FormEvent } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { loginAdmin, isAdminAuthenticated } from "../../lib/adminAuth";

export default function AdminLogin() {
  const navigate = useNavigate();
  const location = useLocation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  if (isAdminAuthenticated()) {
    return <Navigate to="/admin/products" replace />;
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setIsLoading(true);

    const success = await loginAdmin(username.trim(), password);
    setIsLoading(false);

    if (!success) {
      setError("Usuário ou senha inválidos.");
      return;
    }

    const from = (location.state as { from?: string } | null)?.from;
    navigate(from || "/admin/products", { replace: true });
  };

  return (
    <div className="min-h-screen bg-gradient-soft-vertical flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm p-6 sm:p-8">
        <h1 className="text-2xl sm:text-3xl font-display text-charcoal mb-2">Painel Admin</h1>
        <p className="text-slate mb-6">Entre para gerenciar os produtos do site.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-charcoal mb-1">Usuário</label>
            <input
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              className="w-full border border-mint/40 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-aqua"
              placeholder="admin"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-charcoal mb-1">Senha</label>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full border border-mint/40 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-aqua"
              placeholder="••••••"
              required
            />
          </div>

          {error && <p className="text-sm text-rose">{error}</p>}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-ocean text-white py-2.5 rounded-full font-medium hover:bg-aqua hover:text-charcoal transition"
          >
            {isLoading ? "Entrando..." : "Entrar"}
          </button>
        </form>
      </div>
    </div>
  );
}
