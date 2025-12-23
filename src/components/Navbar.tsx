interface CTAProps {
  href: string;
  label?: string;
}

export default function CTA({ href, label = "Agendar diagnóstico" }: CTAProps) {
  return (
    <a
      href={href}
      className="
        group relative inline-flex items-center justify-center
        px-6 py-3
        border border-white/30
        text-sm font-medium text-white
        transition-all duration-300
        hover:border-white
        hover:bg-white hover:text-black
      "
    >
      <span className="relative z-10">{label}</span>

      {/* underline animation */}
      <span
        className="
          absolute bottom-0 left-0 h-[1px] w-0
          bg-black
          transition-all duration-300
          group-hover:w-full
        "
      />
    </a>
  );
}
