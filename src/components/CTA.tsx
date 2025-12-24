interface CTAProps {
  href: string;
  label?: string;
}

export default function CTA({ href, label = "Agendar diagnóstico" }: CTAProps) {
  return (
    <a
      href={href}
      className="
        relative inline-flex items-center justify-center
        px-6 py-3
        border border-white/30
        text-sm font-medium text-white
        transition-all duration-300
        hover:border-white
        hover:bg-white hover:text-black
        pointer-events-auto
        z-20
      "
    >
      <span className="relative z-10">{label}</span>
    </a>
  );
}
