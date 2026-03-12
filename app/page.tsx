import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";

const serviceSchedule = [
  { day: "Sunday", time: "9:00 AM", title: "Worship", icon: "🕊️", color: "from-church-blue to-church-blue-dark" },
  { day: "Wednesday", time: "6:30 PM", title: "Bible Study", icon: "📖", color: "from-deep-blue to-blue-900" },
  { day: "Monday", time: "7:00 PM", title: "Prayer Meeting", icon: "🙏", color: "from-emerald-800 to-emerald-900" },
  { day: "Thursday", time: "3:00 PM", title: "Youth Group", icon: "🎵", color: "from-purple-900 to-purple-950" },
];

const values = [
  {
    icon: "✝️",
    title: "The Word",
    desc: "Scripture is our sole foundation. We order every aspect of our lives by the light of God's Word.",
  },
  {
    icon: "❤️",
    title: "Love",
    desc: "Showing love to one another and to all people is at the heart of our mission.",
  },
  {
    icon: "🌍",
    title: "Service",
    desc: "Serving our community and carrying the Gospel to all people is our unwavering commitment.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient">
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(30,108,184,0.35)_0%,transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(13,27,62,0.5)_0%,transparent_60%)]" />
          {/* Cross watermark */}
          <div className="absolute inset-0 hidden md:flex items-center justify-center pointer-events-none select-none">
            <span className="text-[40vw] font-serif text-white/[0.02] leading-none animate-float">✝</span>
          </div>
          {/* Grain texture */}
          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }}
          />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-24 pb-16">
          <p className="font-accent text-gold/80 text-sm md:text-base tracking-[5px] uppercase mb-4 animate-fade-in">
            እንኳን ደህና መጣችሁ
          </p>

          <h1 className="font-display text-5xl md:text-7xl font-black text-white leading-tight mb-3">
            Christ Saints&apos;{" "}
            <span className="text-shimmer">Church</span>
          </h1>

          <p className="font-body text-white/60 text-xl md:text-2xl mb-8">
            ክርስቶስ ቅዱሳን ቤተክርስቲያን
          </p>

          {/* Bible verse */}
          <div className="inline-block border-l-2 border-gold text-left pl-6 mb-10 max-w-xl">
            <p className="font-accent italic text-gold/75 text-lg leading-relaxed">
              &ldquo;እግዚአብሔር ፍቅር ነው፤ የሚኖርበት ሰው ሁሉ በፍቅር ይኖራል፣
              እግዚአብሔርም በእርሱ ይኖራል።&rdquo;
            </p>
            <span className="font-accent text-gold/40 text-sm mt-1 block">— ፩ ዮሐ 4:16</span>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/about"
              className="bg-church-blue hover:bg-church-blue-light text-white font-body px-8 py-3.5 transition-all duration-300 hover:shadow-xl hover:shadow-church-blue/40 hover:-translate-y-1">
              About Us
            </Link>
            <Link href="/contact"
              className="border border-gold text-gold hover:bg-gold hover:text-church-dark font-body px-8 py-3.5 transition-all duration-300">
              Contact
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="font-accent text-gold/40 text-xs tracking-widest">SCROLL</span>
          <div className="w-px h-8 bg-gradient-to-b from-gold/40 to-transparent" />
        </div>
      </section>

      {/* ─── SERVICE TIMES ───────────────────────────────────── */}
      <section className="bg-[#0D1B3E] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {serviceSchedule.map((s) => (
              <div key={s.day}
                className={`bg-gradient-to-br ${s.color} p-6 border border-white/5 hover:-translate-y-1 transition-transform`}>
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-body text-white text-base font-semibold mb-1">{s.title}</h3>
                <p className="font-accent text-gold text-lg italic">{s.day}</p>
                <p className="font-body text-white/60 text-sm">{s.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VALUES ──────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-white">
        <SectionHeader
          label="Our Core Values"
          title="What Defines Us"
          subtitle="Our church stands on three foundational pillars"
        />
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v) => (
            <div key={v.title}
              className="bg-white p-8 border-b-4 border-church-blue shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center">
              <div className="text-5xl mb-4">{v.icon}</div>
              <h3 className="font-display text-2xl text-church-dark mb-3">{v.title}</h3>
              <p className="font-body text-[#6a5a50] leading-relaxed text-sm">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── PASTOR SPOTLIGHT ────────────────────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          {/* Photo */}
          <div className="flex-shrink-0 relative">
            <div className="absolute -inset-4 border border-gold/30" />
            <div className="relative w-64 h-80 overflow-hidden shadow-2xl">
              <Image
                src="/images/pastor.jpg"
                alt="Pastor Beza Merne"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-church-blue text-white px-4 py-2">
              <span className="font-accent text-xs tracking-widest uppercase">Lead Pastor</span>
            </div>
          </div>
          {/* Text */}
          <div>
            <span className="font-accent uppercase tracking-[4px] text-xs text-church-blue block mb-2">
              Our Pastor
            </span>
            <h2 className="font-display text-4xl text-church-dark font-bold mb-2">
              Pastor Beza Merne
            </h2>
            <p className="font-accent italic text-gold text-lg mb-6">ፓስተር ቤዛ ሜርኔ</p>
            <div className="w-12 h-0.5 bg-gradient-to-r from-church-blue to-gold mb-6" />
            <p className="font-body text-[#5a4a40] leading-relaxed mb-4 text-sm">
              Pastor Beza Merne is the Lead Pastor of Christ Saints&apos; Church. His heart is set on delivering God&apos;s Word to people, strengthening fellowship, and growing the church community.
            </p>
            <p className="font-body text-[#5a4a40] leading-relaxed mb-6 text-sm">
              Love and humility are the hallmarks of his life. He prays for every individual and has devoted himself to seeing all people come to Christ.
            </p>
            <blockquote className="border-l-4 border-gold pl-4 mb-6">
              <p className="font-accent italic text-gold text-base">
                &ldquo;For to me, to live is Christ and to die is gain.&rdquo;
              </p>
              <cite className="font-body text-gold/50 text-xs">— Philippians 1:21</cite>
            </blockquote>
            <Link href="/pastor"
              className="inline-flex items-center gap-2 text-church-blue font-body text-sm hover:text-church-blue-light transition-colors group">
              Read more about the Pastor
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ──────────────────────────────────────── */}
      <section className="relative py-20 px-6 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #071428 0%, #155A9E 50%, #1E6CB8 100%)" }}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,168,76,0.1)_0%,transparent_70%)] pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl text-white font-bold mb-4">
            Growing{" "}
            <span className="text-shimmer">Together in Christ</span>
          </h2>
          <p className="font-body text-white/65 text-base leading-relaxed mb-8">
            Our church welcomes everyone. Prayer and praise are open to all — come and be part of the family.
          </p>
          <Link href="/contact"
            className="inline-block bg-gold hover:bg-gold-light text-church-dark font-body font-semibold px-10 py-4 transition-all duration-300 hover:shadow-2xl hover:shadow-gold/30 hover:-translate-y-1">
            Join Us Today →
          </Link>
        </div>
      </section>
    </>
  );
}
