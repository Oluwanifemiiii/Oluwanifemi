export default function Icon({ name, size = 18 }) {
  const props = {
    width: size, height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  switch (name) {
    case "sun":      return <svg {...props}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>;
    case "moon":     return <svg {...props}><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" /></svg>;
    case "arrow":    return <svg {...props}><path d="M7 17 17 7" /><path d="M9 7h8v8" /></svg>;
    case "mail":     return <svg {...props}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>;
    case "github":   return <svg {...props}><path d="M9 19c-4 1.5-4-2-6-2.5M15 22v-4a3 3 0 0 0-1-2.3c3-.3 6-1.5 6-6.5a5 5 0 0 0-1.4-3.5 4.6 4.6 0 0 0-.1-3.5s-1.1-.4-3.5 1.3a12 12 0 0 0-6 0C6.6 1.7 5.5 2.1 5.5 2.1A4.6 4.6 0 0 0 5.4 5.5 5 5 0 0 0 4 9c0 5 3 6.2 6 6.5a3 3 0 0 0-1 2.3V22" /></svg>;
    case "linkedin": return <svg {...props}><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 10v8M8 7v.01M12 18v-5a3 3 0 0 1 6 0v5" /></svg>;
    default:         return null;
  }
}