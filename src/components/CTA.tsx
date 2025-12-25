interface CTAProps {
  href: string;
  label?: string;
  className?: string;
}

export default function CTA({
  href,
  label = "Agendar diagnóstico",
  className = "",
}: CTAProps) {
  return (
    <a
      href={href}
      className={[
        // critical: ensure it's above overlays and receives clicks
        "relative z-50 pointer-events-auto",
        "group inline-flex items-center justify-center",
        "px-6 py-3",
        "border border-white/30",
        "text-sm font-medium text-white",
        "transition-all duration-300",
        "hover:border-white hover:bg-white hover:text-black",
        // improves mobile tap
        "select-none",
        className,
      ].join(" ")}
    >
      <span className="relative z-10">{label}</span>

      {/* underline animation (must NOT block clicks) */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-[1px] w-0 bg-black transition-all duration-300 group-hover:w-full"
      />
    </a>
  );
}
