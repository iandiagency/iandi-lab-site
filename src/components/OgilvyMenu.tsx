import "./OgilvyMenu.css";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function OgilvyMenu({ open, onClose }: Props) {
  if (!open) return null;

  return (
    <div className="ogilvy-menu">
      {/* FECHAR */}
      <button
        className="ogilvy-menu-close"
        aria-label="Fechar menu"
        onClick={onClose}
      >
        <span />
        <span />
      </button>

      {/* CONTEÚDO */}
      <nav className="ogilvy-menu-content">
        <a href="/">Home</a>
        <a href="/diagnose">Diagnóstico</a>
        <a href="/next-step">Sessão Estratégica</a>
      </nav>
    </div>
  );
}
