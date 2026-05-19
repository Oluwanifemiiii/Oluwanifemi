import Icon from "./Icon";

const CONTACT_ROWS = [
  { key: "email",    label: "email · best for projects",  value: "ipayewill@gmail.com",               href: "mailto:ipayewill@gmail.com",                                  icon: "mail" },
  { key: "github",   label: "github · code",              value: "github.com/Oluwanifemiiii",          href: "https://github.com/Oluwanifemiiii",                           icon: "github" },
  { key: "linkedin", label: "linkedin · everything else", value: "linkedin.com/in/oluwanifemi-ipaye",  href: "https://www.linkedin.com/in/oluwanifemi-ipaye-981396281/",    icon: "linkedin" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <div className="card3d contact-card">
          <div>
            <div className="sect-num" style={{ marginBottom: 14 }}>
              <span className="sn-arrow"></span>
              <b>05</b><span>/</span><span>contact</span>
            </div>
            <h2>
              Got an idea?<br />
              Let's <em className="serif">build it.</em>
            </h2>
            <p>
              Open to fullstack roles, freelance builds, and cloud-engineering collabs.
              I usually reply within a day — sometimes less if it's interesting.
            </p>
          </div>

          <div className="contact-list">
            {CONTACT_ROWS.map((r) => (
              <a
                key={r.key}
                className="contact-row"
                href={r.href}
                target={r.href.startsWith("http") ? "_blank" : undefined}
                rel={r.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <span style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <span className="ico"><Icon name={r.icon} size={16} /></span>
                  <span style={{ display: "flex", flexDirection: "column" }}>
                    <span className="label">{r.label}</span>
                    <span className="value">{r.value}</span>
                  </span>
                </span>
                <span className="arrow-ico"><Icon name="arrow" size={16} /></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}