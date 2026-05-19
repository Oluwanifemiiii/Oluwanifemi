import Mascot from "../components/Mascot";
import Icon from "../components/Icon";
import Thumb from "../components/Thumb";
import ContactSection from "../components/ContactSection";
import { PROJECTS } from "../data";

const SKILLS = [
  "React", "TypeScript", "JavaScript", "Java",
  "Node.js", "Express", "MySQL", "Supabase",
  "three.js", "Sharetribe", "UI / UX", "Figma",
  "Oracle Cloud", "Google Cloud",
];

const MARQUEE_ITEMS = [
  "React", "TypeScript", "Node.js", "Java",
  "MySQL", "Supabase", "UI/UX", "three.js",
  "Oracle Cloud", "Google Cloud",
];

function SectNum({ n, label }) {
  return (
    <div className="sect-num">
      <span className="sn-arrow"></span>
      <b>{n}</b><span>/</span><span>{label}</span>
    </div>
  );
}

function Hero({ onNavigate }) {
  return (
    <section id="top" className="hero" padding-bottom="0px">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <div className="hero-meta">
              <span className="mono-tag">
                <span className="pulse"></span>open to work · 2026
              </span>
              <span className="div"></span>
              <span>Lagos, NG · UTC+1</span>
            </div>

            <h1>
              Fullstack developer<br />
              building <span className="quirk">considered</span><br />
              <em className="serif">web products</em> —<br />
              quietly heading <em className="serif">cloud-ward</em>.
            </h1>

            <p className="hero-lede">
              I'm <b>Oluwanifemi Ipaye</b> — a fullstack developer (and aspiring cloud engineer)
              who writes React + Node, sweats the details, and ships things you can actually use.
            </p>

            <div className="hero-cta">
              <button className="btn" onClick={() => onNavigate("projects")}>
                See selected work <Icon name="arrow" size={16} />
              </button>
              <a className="btn ghost" href="#contact">Get in touch</a>
              <span className="mono-aside">or scroll ↓</span>
            </div>

            <div className="hero-stats">
              <div className="hero-stat"><b>4</b><span>live products</span></div>
              <div className="hero-stat"><b>2</b><span>cloud certs</span></div>
              <div className="hero-stat"><b>~24h</b><span>avg. reply</span></div>
            </div>
          </div>

          <div className="tilt-scene">
            <div className="mascot-stage tilt-target">
              <div className="frame"></div>
              <span className="corner c1"></span>
              <span className="corner c2"></span>
              <span className="corner c3"></span>
              <span className="corner c4"></span>
              <div className="frame-meta">
                
              </div>
              <div className="mascot"><Mascot /></div>
            </div>
          </div>
        </div>
      </div>

      <div className="marquee" aria-hidden="true">
        <div className="track">
          {[0, 1].map((i) =>
            MARQUEE_ITEMS.map((s, j) => (
              <span key={`${i}-${j}`} style={{ display: "inline-flex", alignItems: "center", gap: 36 }}>
                <span>{s}</span><span className="star">✱</span>
              </span>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about">
      <div className="wrap">
        <SectNum n="01" label="about" />
        <div className="section-head">
          <h2>
            Half engineer, half designer — and{" "}
            <em className="serif">fully obsessed</em> with the details people notice.
          </h2>
        </div>

        <div className="about-grid">
          <div className="tilt-scene">
            <div className="card3d about-card tilt-target">
              <p>
                I write React + TypeScript on the front, Node.js + MySQL / Supabase on the back,
                and I've recently been wandering into cloud-engineering territory — picking up Oracle
                Cloud and Google Cloud along the way.
              </p>
              <p>
                I've shipped marketplaces, hotel booking flows, an airline marketing site, and an
                event-planning portfolio for paying clients. The thread connecting them all: a UI that
                feels <em className="serif">considered</em> — micro-interactions, typography, and the
                small moments most folks rush past.
              </p>
              <p>
                Outside the IDE I sketch layouts, argue with friends about button radii, and read too
                much about distributed systems.
              </p>
              <div className="skills">
                {SKILLS.map((s, i) => (
                  <span key={s} className={`skill ${i === 0 ? "primary" : ""}`}>{s}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="about-side">
            <div className="tilt-scene">
              <div className="card3d kv-card tilt-target">
                <h4>quick facts</h4>
                {[
                  ["Based",   "Lagos, NG"],
                  ["Stack",   "React · Node · SQL"],
                  ["Studying","Cloud engineering"],
                  ["Open to", "Full-time · Freelance"],
                  ["Reply in","~24 hours"],
                ].map(([k, v]) => (
                  <div key={k} className="kv-row">
                    <span>{k}</span><span>{v}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="now-card">
              <h4>currently</h4>
              <p>
                Building <b>Rewa</b> — an Aso Ebi marketplace — and working through the
                Google Cloud Security certificate.
              </p>
              <div className="now-pills">
                <span className="skill">Rewa · v1.11</span>
                <span className="skill">GCP Sec · 97%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Certs() {
  const certs = [
    { title: "Oracle Cloud Infrastructure", issuer: "Oracle",          year: "2025", b: "b1", tags: ["Foundations", "OCI"], icon: "oci" },
    { title: "Google Cloud Security",        issuer: "Google · Coursera", year: "2026", b: "b2", tags: ["Security", "GCP"],  icon: "gcp" },
  ];

  return (
    <section id="certs">
      <div className="wrap">
        <SectNum n="02" label="certifications" />
        <div className="section-head">
          <h2>Papers worth <em className="serif">framing</em>.</h2>
          <p className="lede">Cloud engineering is the long game — these are the first two pages.</p>
        </div>

        <div className="certs-grid">
          {certs.map((c) => (
            <div key={c.title} className="tilt-scene">
              <div className={`card3d cert tilt-target ${c.b}`}>
                <div style={{ display: "flex", gap: 18, alignItems: "flex-start" }}>
                  <div className="badge">
                    {c.icon === "oci" ? (
                      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
                        <ellipse cx="12" cy="6" rx="8" ry="3" />
                        <path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6" />
                        <path d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
                        <path d="M12 3 4 7v6c0 4.5 3.5 7.8 8 8 4.5-.2 8-3.5 8-8V7l-8-4z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    )}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div className="meta">{c.issuer} · {c.year}</div>
                    <h3 style={{ marginTop: 6 }}>{c.title}</h3>
                  </div>
                </div>
                <div className="pills" style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {c.tags.map((t) => <span key={t} className="skill">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsPreview({ onNavigate }) {
  const preview = PROJECTS.slice(0, 3);

  return (
    <section id="projects">
      <div className="wrap">
        <SectNum n="03" label="selected work" />
        <div
          className="section-head"
          style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 18, maxWidth: "none" }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 8, maxWidth: 600 }}>
            <h2>Things I've <em className="serif">shipped</em> lately.</h2>
            <p className="lede">A small slice — see the full list for context, stack notes, and links.</p>
          </div>
          <button className="btn ghost" onClick={() => onNavigate("projects")}>
            All projects <Icon name="arrow" size={16} />
          </button>
        </div>

        <div className="proj-grid">
          {preview.map((p, i) => (
            <div key={p.id} className="tilt-scene">
              <div className="card3d proj tilt-target">
                <div className="thumb"><Thumb kind={p.thumb} /></div>
                <div className="proj-body">
                  <div className="head">
                    <h3>{p.title}</h3>
                    <span className="mono">N° {String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <p>{p.short}</p>
                  <div className="proj-tags">
                    {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                  </div>
                  <div className="row">
                    <span className="mono">{p.year}</span>
                    <a className="visit" href={p.url} target="_blank" rel="noopener noreferrer">
                      Visit live <Icon name="arrow" size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home({ onNavigate }) {
  return (
    <main>
      <Hero onNavigate={onNavigate} />
      <About />
      <Certs />
      <ProjectsPreview onNavigate={onNavigate} />
      <ContactSection />
    </main>
  );
}