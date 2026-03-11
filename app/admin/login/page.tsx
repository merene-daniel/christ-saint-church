"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      router.push("/admin/sermons");
    } else {
      setError("Incorrect password.");
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-hero-gradient flex items-center justify-center px-6">
      <div className="bg-white w-full max-w-sm p-8 shadow-xl border-t-4 border-church-blue">
        <p className="font-accent text-church-blue uppercase tracking-[4px] text-xs mb-2">Admin</p>
        <h1 className="font-display text-2xl text-church-dark font-bold mb-6">Sign In</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-church-dark mb-1 uppercase tracking-wide">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoFocus
              className="w-full border border-gray-200 px-3 py-2 text-sm font-body text-church-dark focus:outline-none focus:border-church-blue"
            />
          </div>
          {error && (
            <p className="text-red-600 text-xs font-body">{error}</p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-church-blue text-white font-body text-sm py-2.5 hover:bg-church-blue-light transition-colors disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
