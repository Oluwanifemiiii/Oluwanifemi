import Icon from "../components/Icon";
import Thumb from "../components/Thumb";
import ContactSection from "../components/ContactSection";
import { PROJECTS } from "../data";

export default function Projects() {
  return (
    <main>
      <section className="page-hero" id="top">
        <div className="wrap">
          <div className="sect-num">
            <span className="sn-arrow"></span>
            <b>projects</b><span>/</span><span>{PROJECTS.length} live builds</span>
          </div>
          <h1>
            Selected work,<br />
            <em className="serif">shipped & live.</em>
          </h1>
          <p>
            A handful of fullstack builds I've shipped recently. Each one taught me something
            different — marketplaces, payments, three.js cabins, hotel reservation flows,
            transactional email plumbing. Click through to poke at the live versions.
          </p>
        </div>
      </section>

      <div className="wrap">
        <div className="bigproj-list">
          {PROJECTS.map((p, i) => (
            <div key={p.id} className="tilt-scene">
              <div className="card3d bigproj tilt-target">
                <div className="bigproj-thumb">
                  <Thumb kind={p.thumb} />
                </div>
                <div className="bigproj-body">
                  <div className="meta">
                    <span className="num">N° {String(i + 1).padStart(2, "0")}</span>
                    <span>·</span>
                    <span>{p.role}</span>
                    <span>·</span>
                    <span>{p.year}</span>
                  </div>
                  <h2>{p.title}</h2>
                  <p>{p.long}</p>
                  <div className="proj-tags" style={{ marginTop: 6 }}>
                    {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                  </div>
                  <div className="row">
                    <a className="btn alt" href={p.url} target="_blank" rel="noopener noreferrer">
                      Visit live <Icon name="arrow" size={16} />
                    </a>
                    <a
                      className="btn ghost"
                      href={`mailto:ipayewill@gmail.com?subject=Question about ${encodeURIComponent(p.title)}`}
                    >
                      Ask about this
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ContactSection />
    </main>
  );
}