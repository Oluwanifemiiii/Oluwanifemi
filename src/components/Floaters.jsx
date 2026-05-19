import { useEffect, useRef } from "react";

const FLOATER_CONFIG = [
  { x: 6,  y: 12, s: 110, kind: "cube",   d: 38 },
  { x: 88, y: 18, s: 80,  kind: "ring",   d: 44 },
  { x: 92, y: 64, s: 130, kind: "sphere", d: 50 },
  { x: 4,  y: 72, s: 90,  kind: "cube",   d: 42 },
  { x: 78, y: 92, s: 70,  kind: "ring",   d: 36 },
];

export function Floaters() {
  return (
    <div className="floaters" aria-hidden="true">
      {FLOATER_CONFIG.map((it, i) => (
        <div
          key={i}
          className="floater"
          style={{
            left: `${it.x}%`,
            top: `${it.y}%`,
            width: it.s,
            height: it.s,
            "--dur": `${it.d}s`,
            "--s": `${it.s / 2}px`,
            animationDelay: `${i * -5}s`,
          }}
        >
          {it.kind === "cube" && (
            <div className="cube" style={{ width: "100%", height: "100%" }}>
              <div className="face f1" /><div className="face f2" />
              <div className="face f3" /><div className="face f4" />
              <div className="face f5" /><div className="face f6" />
            </div>
          )}
          {it.kind === "sphere" && <div className="sphere" />}
          {it.kind === "ring"   && <div className="ring" />}
        </div>
      ))}
    </div>
  );
}

export function CursorBlob() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0, tx = 0, ty = 0, x = 0, y = 0;

    const onMove = (e) => {
      tx = e.clientX;
      ty = e.clientY;
      el.classList.add("visible");
      const interactive = e.target.closest?.("a, button, .card3d, .skill, .contact-row");
      el.classList.toggle("hovered", !!interactive);
    };
    const onLeave = () => el.classList.remove("visible");

    const tick = () => {
      x += (tx - x) * 0.22;
      y += (ty - y) * 0.22;
      el.style.left = x + "px";
      el.style.top  = y + "px";
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={ref} className="cursor-blob" />;
}

export function useMouseTilt() {
  useEffect(() => {
    const scenes = Array.from(document.querySelectorAll(".tilt-scene"));

    const cleanups = scenes.map((scene) => {
      const target = scene.querySelector(".tilt-target") || scene.firstElementChild;
      if (!target) return () => {};

      const onMove = (e) => {
        const r = scene.getBoundingClientRect();
        const px = (e.clientX - r.left)  / r.width  - 0.5;
        const py = (e.clientY - r.top)   / r.height - 0.5;
        target.style.transform = `rotateY(${px * 8}deg) rotateX(${-py * 8}deg) translateZ(0)`;
      };
      const onLeave = () => { target.style.transform = ""; };

      scene.addEventListener("mousemove", onMove);
      scene.addEventListener("mouseleave", onLeave);
      return () => {
        scene.removeEventListener("mousemove", onMove);
        scene.removeEventListener("mouseleave", onLeave);
      };
    });

    return () => cleanups.forEach((fn) => fn());
  });
}