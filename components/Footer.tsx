import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-church-dark border-t border-gold/15">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-14 h-14 rounded-full border-2 border-gold overflow-hidden">
                <Image src="/images/logo.png" alt="Logo" fill className="object-contain" />
              </div>
              <div>
                <p className="font-display text-gold text-base font-bold">Christ Saints&apos; Church</p>
                <p className="font-body text-white/40 text-xs">ክርስቶስ ቅዱሳን ቤተክርስቲያን</p>
              </div>
            </div>
            <p className="font-body text-white/50 text-sm leading-relaxed mt-4">
              ፍቅር፣ ተስፋ፣ ሕይወት — በኢየሱስ ክርስቶስ ስም አብሮ እናገለግላለን።
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-accent text-gold text-lg mb-5 tracking-widest uppercase text-sm">
              ፈጣን አገናኞች
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "ስለ ቤተክርስቲያናችን" },
                { href: "/pastor", label: "ፓስተር ቤዛ ሜርኔ" },
                { href: "/sermons", label: "ስብከቶች" },
                { href: "/events", label: "ቀጣይ ዝግጅቶች" },
                { href: "/contact", label: "አድራሻና ካርታ" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-white/50 hover:text-gold transition-colors text-sm"
                  >
                    → {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h4 className="font-accent text-gold tracking-widest uppercase text-sm mb-5">
              የአምልኮ ሰዓቶች
            </h4>
            <div className="space-y-3">
              {[
                { day: "እሁድ", time: "ጠዋት 9:00", label: "ዋና አምልኮ" },
                { day: "ረቡዕ", time: "ምሽት 6:30", label: "የቃሉ ጥናት" },
                { day: "ሰኞ", time: "ምሽት 7:00", label: "የጸሎት ስብሰባ" },
              ].map((s) => (
                <div key={s.day} className="flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                  <div>
                    <span className="font-body text-white/70 text-sm">{s.day} — {s.time}</span>
                    <span className="font-body text-white/35 text-xs block">{s.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gold/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-white/30 text-xs">
            © {new Date().getFullYear()} Christ Saints&apos; Church. ሁሉም መብቶች የተጠበቁ ናቸው።
          </p>
          <p className="font-accent italic text-gold/40 text-sm">
            &ldquo;ኢየሱስ ክርስቶስ ትናንትና ዛሬ ለዘለዓለምም አንድ ነው&rdquo; — ዕብ 13:8
          </p>
        </div>
      </div>
    </footer>
  );
}
