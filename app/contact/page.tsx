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
      setResponseMsg("Name, email, and message are required.");
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
        setResponseMsg(data.message || "Your message has been received!");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
        setResponseMsg(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setResponseMsg("A network error occurred. Please try again.");
    }
  };

  return (
    <>
      <section className="relative py-40 px-6 bg-hero-gradient text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,26,26,0.3)_0%,transparent_70%)] pointer-events-none" />
        <div className="relative z-10">
          <p className="font-accent text-gold/75 uppercase tracking-[5px] text-sm mb-4">Contact</p>
          <h1 className="font-display text-5xl md:text-6xl text-white font-black">
            <span className="text-shimmer">Contact Us</span>
          </h1>
          <p className="font-body text-white/50 text-base mt-3">Come as you are — the doors are always open</p>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <span className="font-accent text-church-blue uppercase tracking-[4px] text-xs block mb-3">Find Us</span>
            <h2 className="font-display text-4xl text-church-dark font-bold mb-3">Location & Info</h2>
            <div className="w-12 h-0.5 bg-gradient-to-r from-church-blue to-gold mb-8" />

            <div className="space-y-6">
              {[
                { icon: "📍", label: "Location", val: "Alexandria, Virginia" },
                { icon: "📞", label: "Phone", val: "+1 (XXX) XXX-XXXX" },
                { icon: "✉️", label: "Email", val: "info@christsaintschurch.org" },
                { icon: "🕐", label: "Office Hours", val: "Mon – Fri · 9 AM – 5 PM" },
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
              <h3 className="font-display text-church-dark text-lg font-bold mb-4">Service Times</h3>
              <div className="space-y-3">
                {[
                  { day: "Sunday", time: "9:00 AM", label: "Main Worship" },
                  { day: "Wednesday", time: "6:30 PM", label: "Bible Study" },
                  { day: "Monday", time: "7:00 PM", label: "Prayer Meeting" },
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
            <h2 className="font-display text-4xl text-church-dark font-bold mb-3">Send a Message</h2>
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
                { name: "name", label: "Full Name *", type: "text", placeholder: "John Doe" },
                { name: "email", label: "Email *", type: "email", placeholder: "email@example.com" },
                { name: "phone", label: "Phone", type: "tel", placeholder: "+1 (555) 000-0000" },
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
                  Message *
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="How can we help you?..."
                  className="w-full border border-[#e0d5cc] bg-cream px-4 py-3 font-body text-church-dark text-sm focus:outline-none focus:border-church-blue transition-colors resize-none"
                />
              </div>
              <button
                onClick={handleSubmit}
                disabled={status === "loading"}
                className="w-full bg-church-blue hover:bg-church-blue-light disabled:opacity-60 text-white font-body py-4 transition-all duration-300 hover:shadow-lg hover:shadow-church-blue/30 hover:-translate-y-0.5 disabled:cursor-not-allowed text-sm tracking-wide"
              >
                {status === "loading" ? "Sending..." : "Send Message →"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
