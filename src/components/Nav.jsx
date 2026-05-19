import { useState } from "react";
import Icon from "./Icon";

export default function Nav({ page, onNavigate }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  const go = (p, hash) => {
    if (p !== page) {
      onNavigate(p);
    }
    close();
    if (hash) {
      setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }
  };

  return (
    <nav className="nav">
      <div className="wrap" style={{ position: "relative" }}>
        <a
          className="nav-logo"
          onClick={() => go("home")}
          style={{ cursor: "pointer" }}
        >
          <span className="mark">
            <img src="/favicon.svg" alt="logo" width="14" height="14" />
          </span>
          <span>Oluwanifemi Ipaye</span>
          <span className="suffix">/+2348021351536</span>
        </a>

        <div className={`nav-links ${open ? "open" : ""}`}>
          <a
            onClick={() => go("home", "#about")}
            className={page === "home" ? "" : ""}
          >
            About
          </a>
          <a onClick={() => go("home", "#certs")}>Certifications</a>
          <a
            onClick={() => go("projects")}
            className={page === "projects" ? "active" : ""}
          >
            Projects
          </a>
          <a onClick={() => go("home", "#contact")}>Contact</a>
        </div>

        <div className="nav-actions">
          <button
            className="nav-burger"
            aria-label="Menu"
            onClick={() => setOpen(!open)}
          >
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
