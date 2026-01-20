// src/diagnose/StepShell.tsx
type Props = {
  badge: string;
  title: string;
  desc: string;
  children: React.ReactNode;
};

export default function StepShell({ badge, title, desc, children }: Props) {
  return (
    <main className="min-h-screen bg-black text-white flex items-center">
      <div className="max-w-3xl mx-auto px-6 space-y-10">
        <p className="text-xs tracking-widest text-white/50">{badge}</p>
        <h1 className="text-4xl font-light">{title}</h1>
        <p className="text-white/60">{desc}</p>
        <div className="space-y-6">{children}</div>
      </div>
    </main>
  );
}
