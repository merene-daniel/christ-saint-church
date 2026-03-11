interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}

export default function SectionHeader({ label, title, subtitle, light }: SectionHeaderProps) {
  return (
    <div className="text-center mb-16">
      <span className={`font-accent uppercase tracking-[4px] text-xs block mb-3 ${light ? "text-gold" : "text-crimson"}`}>
        {label}
      </span>
      <h2 className={`font-display text-4xl md:text-5xl font-bold leading-tight ${light ? "text-white" : "text-church-dark"}`}>
        {title}
      </h2>
      <div className="w-16 h-0.5 bg-gradient-to-r from-crimson to-gold mx-auto my-5" />
      {subtitle && (
        <p className={`font-body max-w-xl mx-auto leading-relaxed text-base ${light ? "text-white/60" : "text-warm-600"}`}
           style={{ color: light ? undefined : "#6a5a50" }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
