import { Link } from "react-router-dom";
import { useState } from "react";
import OgilvyMenu from "./OgilvyMenu";
import "./Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="ogilvy-header">
        {/* MENU */}
        <button
          className="menu-button"
          aria-label="Menu"
          onClick={() => setOpen(true)}
        >
          <span />
          <span />
        </button>

        {/* LOGO */}
        <Link to="/" className="logo-wrapper">
          <img
            src="/branding/iandi-logo-white.png"
            alt="IANDI Lab"
            className="logo"
          />
        </Link>
      </header>

      <OgilvyMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
