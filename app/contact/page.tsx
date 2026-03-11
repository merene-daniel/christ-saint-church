"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      setResponseMsg("ስም፣ ኢሜይል እና መልዕክት ያስፈልጋሉ።");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setResponseMsg(data.message || "መልዕክትዎ ደርሷል!");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
        setResponseMsg(data.error || "ችግር ተፈጥሯል።");
      }
    } catch {
      setStatus("error");
      setResponseMsg("ኔትወርክ ችግር ተፈጥሯል።");
    }
  };

  return (
    <>
      <section className="relative py-40 px-6 bg-hero-gradient text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,26,26,0.3)_0%,transparent_70%)] pointer-events-none" />
        <div className="relative z-10">
          <p className="font-accent text-gold/75 uppercase tracking-[5px] text-sm mb-4">Contact</p>
          <h1 className="font-display text-5xl md:text-6xl text-white font-black">
            <span className="text-shimmer">አድራሻ</span>
          </h1>
          <p className="font-body text-white/50 text-base mt-3">ወደ ቤቱ ኑ — ሁሌ ክፍት ናት</p>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <span className="font-accent text-church-blue uppercase tracking-[4px] text-xs block mb-3">Find Us</span>
            <h2 className="font-display text-4xl text-church-dark font-bold mb-3">ቦታ ዝርዝር</h2>
            <div className="w-12 h-0.5 bg-gradient-to-r from-church-blue to-gold mb-8" />

            <div className="space-y-6">
              {[
                { icon: "📍", label: "ቦታ", val: "አዲስ አበባ፣ ኢትዮጵያ" },
                { icon: "📞", label: "ስልክ", val: "+251 9XX XXX XXX" },
                { icon: "✉️", label: "ኢሜይል", val: "info@christsaintschurch.org" },
                { icon: "🕐", label: "የቢሮ ሰዓት", val: "ሰኞ – ዓርብ · ጠዋት 9 – ምሽት 5" },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 items-start">
                  <div className="w-11 h-11 bg-church-blue/10 flex items-center justify-center text-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <span className="font-accent uppercase tracking-widest text-church-blue text-xs block mb-0.5">
                      {item.label}
                    </span>
                    <span className="font-body text-church-dark text-sm">{item.val}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Service times */}
            <div className="mt-10 p-6 bg-cream border-l-4 border-gold">
              <h3 className="font-display text-church-dark text-lg font-bold mb-4">የአምልኮ ሰዓቶች</h3>
              <div className="space-y-3">
                {[
                  { day: "እሁድ", time: "ጠዋት 9:00", label: "ዋና አምልኮ" },
                  { day: "ረቡዕ", time: "ምሽት 6:30", label: "ቃሉ ጥናት" },
                  { day: "ሰኞ", time: "ምሽት 7:00", label: "ጸሎት ስብሰባ" },
                ].map((s) => (
                  <div key={s.day} className="flex justify-between items-center py-2 border-b border-gold/15 last:border-0">
                    <div>
                      <span className="font-body text-church-dark text-sm font-semibold">{s.label}</span>
                      <span className="font-body text-[#8a7a70] text-xs block">{s.day}</span>
                    </div>
                    <span className="font-accent italic text-church-blue">{s.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <span className="font-accent text-church-blue uppercase tracking-[4px] text-xs block mb-3">Send Message</span>
            <h2 className="font-display text-4xl text-church-dark font-bold mb-3">መልዕክት ላኩ</h2>
            <div className="w-12 h-0.5 bg-gradient-to-r from-church-blue to-gold mb-8" />

            {status === "success" && (
              <div className="mb-6 bg-emerald-50 border border-emerald-200 p-4 text-emerald-800 font-body text-sm">
                ✓ {responseMsg}
              </div>
            )}
            {status === "error" && (
              <div className="mb-6 bg-red-50 border border-red-200 p-4 text-red-800 font-body text-sm">
                ✗ {responseMsg}
              </div>
            )}

            <div className="space-y-4">
              {[
                { name: "name", label: "ሙሉ ስምዎ *", type: "text", placeholder: "ፍቅረ ወርቅ ሀ." },
                { name: "email", label: "ኢሜይል *", type: "email", placeholder: "email@example.com" },
                { name: "phone", label: "ስልክ", type: "tel", placeholder: "+251 9..." },
              ].map((f) => (
                <div key={f.name}>
                  <label className="font-accent text-xs tracking-widest uppercase text-[#8a7a70] block mb-1.5">
                    {f.label}
                  </label>
                  <input
                    type={f.type}
                    name={f.name}
                    value={form[f.name as keyof typeof form]}
                    onChange={handleChange}
                    placeholder={f.placeholder}
                    className="w-full border border-[#e0d5cc] bg-cream px-4 py-3 font-body text-church-dark text-sm focus:outline-none focus:border-church-blue transition-colors"
                  />
                </div>
              ))}
              <div>
                <label className="font-accent text-xs tracking-widest uppercase text-[#8a7a70] block mb-1.5">
                  መልዕክትዎ *
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="ምን ልናውቅ ትፈልጋለህ?..."
                  className="w-full border border-[#e0d5cc] bg-cream px-4 py-3 font-body text-church-dark text-sm focus:outline-none focus:border-church-blue transition-colors resize-none"
                />
              </div>
              <button
                onClick={handleSubmit}
                disabled={status === "loading"}
                className="w-full bg-church-blue hover:bg-church-blue-light disabled:opacity-60 text-white font-body py-4 transition-all duration-300 hover:shadow-lg hover:shadow-church-blue/30 hover:-translate-y-0.5 disabled:cursor-not-allowed text-sm tracking-wide"
              >
                {status === "loading" ? "እየተላከ ነው..." : "ላክ →"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
