"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Sermon {
  _id: string;
  title: string;
  titleAm: string;
  preacher: string;
  date: string;
  scripture: string;
  description: string;
  descriptionAm: string;
  youtubeUrl?: string;
}

const empty = {
  title: "",
  titleAm: "",
  preacher: "ፓስተር ቤዛ ሜርኔ",
  date: "",
  scripture: "",
  description: "",
  descriptionAm: "",
  youtubeUrl: "",
};

export default function AdminSermonsPage() {
  const router = useRouter();
  const [sermons, setSermons] = useState<Sermon[]>([]);
  const [form, setForm] = useState(empty);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; msg: string } | null>(null);

  async function fetchSermons() {
    const res = await fetch("/api/sermons");
    const data = await res.json();
    setSermons(data.sermons ?? []);
  }

  useEffect(() => { fetchSermons(); }, []);

  function startEdit(s: Sermon) {
    setEditingId(s._id);
    setForm({
      title: s.title,
      titleAm: s.titleAm,
      preacher: s.preacher,
      date: s.date ? s.date.slice(0, 10) : "",
      scripture: s.scripture,
      description: s.description,
      descriptionAm: s.descriptionAm,
      youtubeUrl: s.youtubeUrl ?? "",
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function cancelEdit() {
    setEditingId(null);
    setForm(empty);
    setStatus(null);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const payload = { ...form, date: new Date(form.date).toISOString() };
      const res = editingId
        ? await fetch(`/api/sermons/${editingId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          })
        : await fetch("/api/sermons", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });

      if (!res.ok) throw new Error("Request failed");
      setStatus({ type: "success", msg: editingId ? "Sermon updated!" : "Sermon added!" });
      cancelEdit();
      fetchSermons();
    } catch {
      setStatus({ type: "error", msg: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this sermon?")) return;
    await fetch(`/api/sermons/${id}`, { method: "DELETE" });
    fetchSermons();
  }

  const field = (
    label: string,
    key: keyof typeof empty,
    opts?: { type?: string; required?: boolean; textarea?: boolean }
  ) => (
    <div>
      <label className="block text-xs font-semibold text-church-dark mb-1 uppercase tracking-wide">
        {label} {opts?.required && <span className="text-red-500">*</span>}
      </label>
      {opts?.textarea ? (
        <textarea
          rows={3}
          value={form[key]}
          onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
          required={opts?.required}
          className="w-full border border-gray-200 px-3 py-2 text-sm font-body text-church-dark focus:outline-none focus:border-church-blue resize-none"
        />
      ) : (
        <input
          type={opts?.type ?? "text"}
          value={form[key]}
          onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
          required={opts?.required}
          className="w-full border border-gray-200 px-3 py-2 text-sm font-body text-church-dark focus:outline-none focus:border-church-blue"
        />
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-cream py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex items-start justify-between">
          <div>
            <p className="font-accent text-church-blue uppercase tracking-[4px] text-xs mb-1">Admin</p>
            <h1 className="font-display text-4xl text-church-dark font-bold">Sermon Manager</h1>
          </div>
          <button
            onClick={handleLogout}
            className="text-xs font-body px-4 py-2 border border-gray-300 text-gray-500 hover:bg-gray-50 transition-colors mt-2"
          >
            Sign Out
          </button>
        </div>

        {/* Form */}
        <div className="bg-white p-8 shadow-sm mb-10 border-t-4 border-church-blue">
          <h2 className="font-display text-xl text-church-dark font-bold mb-6">
            {editingId ? "Edit Sermon" : "Add New Sermon"}
          </h2>

          {status && (
            <div className={`mb-4 px-4 py-3 text-sm font-body ${status.type === "success" ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-700 border border-red-200"}`}>
              {status.msg}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {field("Title (English)", "title", { required: true })}
              {field("Title (Amharic)", "titleAm", { required: true })}
              {field("Preacher", "preacher", { required: true })}
              {field("Date", "date", { type: "date", required: true })}
              {field("Scripture Reference", "scripture", { required: true })}
              {field("YouTube URL", "youtubeUrl", { type: "url" })}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {field("Description (English)", "description", { required: true, textarea: true })}
              {field("Description (Amharic)", "descriptionAm", { required: true, textarea: true })}
            </div>
            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                disabled={loading}
                className="bg-church-blue text-white font-body text-sm px-6 py-2.5 hover:bg-church-blue-light transition-colors disabled:opacity-50"
              >
                {loading ? "Saving..." : editingId ? "Update Sermon" : "Add Sermon"}
              </button>
              {editingId && (
                <button
                  type="button"
                  onClick={cancelEdit}
                  className="border border-gray-300 text-gray-600 font-body text-sm px-6 py-2.5 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Sermon List */}
        <div>
          <h2 className="font-display text-xl text-church-dark font-bold mb-4">
            Existing Sermons ({sermons.length})
          </h2>
          {sermons.length === 0 ? (
            <p className="font-body text-[#9a8a80] text-sm">No sermons in the database yet.</p>
          ) : (
            <div className="space-y-3">
              {sermons.map((s) => (
                <div key={s._id} className="bg-white p-5 shadow-sm flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="font-body text-church-dark font-semibold text-sm truncate">{s.titleAm}</p>
                    <p className="font-body text-[#9a8a80] text-xs">{s.title} · {s.scripture} · {new Date(s.date).toLocaleDateString()}</p>
                    {s.youtubeUrl && (
                      <p className="font-body text-church-blue text-xs mt-1 truncate">{s.youtubeUrl}</p>
                    )}
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    <button
                      onClick={() => startEdit(s)}
                      className="text-xs font-body px-3 py-1.5 border border-church-blue text-church-blue hover:bg-church-blue hover:text-white transition-colors"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(s._id)}
                      className="text-xs font-body px-3 py-1.5 border border-red-300 text-red-500 hover:bg-red-500 hover:text-white transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
