import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Code2,
  GitBranch,
  Network,
  Mail,
  Menu,
  Moon,
  Send,
  Sparkles,
  Sun,
  Terminal,
  X,
} from "lucide-react";

const TITLE = "Khush Amrutiya | Computer Engineering Student";
const DESCRIPTION =
  "The personal portfolio of Khush Amrutiya — a computer engineering student learning, building, and shipping from Rajkot.";
const HERO_IMAGE =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-08-09%20at%201.49.39%20PM-UbKjiNZf4SXk3E5h7V1Fo1VHIIfR3L.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:image", content: HERO_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: HERO_IMAGE },
    ],
  }),
  component: Page,
});

const navItems: [string, string][] = [
  ["Home", "home"],
  ["About", "about"],
  ["Education", "education"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Contact", "contact"],
];

const projects = [
  {
    name: "Personal Developer Portfolio",
    tag: "HTML CSS JS",
    status: "LIVE_PREVIEW",
    description:
      "A responsive developer identity system with glass surfaces, terminal details, and a focused learning roadmap.",
    live: true,
  },
  {
    name: "Responsive Landing Page",
    tag: "ROADMAP // IN-PROGRESS",
    status: "BUILDING",
    description:
      "A conversion-focused interface exploring layout systems, accessible interactions, and mobile-first composition.",
  },
  {
    name: "JavaScript Web Application",
    tag: "ROADMAP // UPCOMING",
    status: "QUEUED",
    description:
      "An upcoming browser-based tool to turn JavaScript fundamentals into something useful and delightful.",
  },
];

function Page() {
  const [dark, setDark] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("light", !dark);
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="site-header">
        <button className="brand" onClick={() => scrollTo("home")} aria-label="Back to home">
          <span className="brand-mark">
            <span />
          </span>
          <span>
            KHUSH<span className="brand-muted">.AMRUTIYA</span>
          </span>
        </button>
        <nav className={mobileOpen ? "nav open" : "nav"} aria-label="Main navigation">
          {navItems.map(([label, id]) => (
            <button key={id} onClick={() => scrollTo(id)}>
              {label}
            </button>
          ))}
        </nav>
        <div className="header-actions">
          <span className="version">V1.0.0_STABLE</span>
          <button
            className="theme-toggle"
            onClick={() => setDark(!dark)}
            aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
          >
            {dark ? <Sun /> : <Moon />}
          </button>
          <button
            className="menu-button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <section id="home" className="hero shell">
        <div className="hero-copy reveal">
          <p className="hero-kicker">Hello, world. I&apos;m</p>
          <h1>
            Khush <span>Amrutiya.</span>
          </h1>
          <p className="hero-description">
            A first-year computer engineering student building a strong foundation in web
            technologies, logical thinking, and modern software engineering.
          </p>
          <div className="hero-actions">
            <button className="button primary" onClick={() => scrollTo("projects")}>
              View My Work <ArrowUpRight />
            </button>
            <button className="button secondary" onClick={() => scrollTo("contact")}>
              Get In Touch <Mail />
            </button>
          </div>
          <div className="hero-meta">
            <span>
              <span className="live-dot" /> AVAILABLE TO LEARN
            </span>
            <span>RAJKOT, GUJARAT</span>
          </div>
        </div>
        <div className="hero-visual reveal">
          <figure className="hero-photo-card">
            <img src={HERO_IMAGE} alt="Khush Amrutiya standing beside a white car outdoors" />
            <figcaption>
              <span className="live-dot" /> KHUSH_AMRUTIYA // PROFILE_IMAGE
            </figcaption>
          </figure>
          <div className="hero-terminal">
            <div className="terminal-top">
              <span>
                <i />
                <i />
                <i />
              </span>
              <span>khush@portfolio:~</span>
              <span>01:01</span>
            </div>
            <div className="terminal-body">
              <p>
                <span className="terminal-prompt">$</span> whoami
              </p>
              <p className="terminal-output">computer_engineering_student</p>
              <p>
                <span className="terminal-prompt">$</span> cat focus.txt
              </p>
              <p className="terminal-output">
                web development
                <br />
                programming fundamentals
                <br />
                building in public
              </p>
              <p>
                <span className="terminal-prompt">$</span> <span className="cursor" />
              </p>
            </div>
            <div className="terminal-footer">
              <span>
                <Code2 /> HTML CSS JS
              </span>
              <span>
                STATUS: <b>ONLINE</b>
              </span>
            </div>
          </div>
        </div>
        <button className="scroll-cue" onClick={() => scrollTo("about")} aria-label="Scroll to about">
          <ArrowDown />
        </button>
      </section>

      <section id="about" className="section shell">
        <div className="section-heading reveal">
          <span>// 01</span>
          <div>
            <p>PROFILE_README</p>
            <h2>
              About me<span>.</span>
            </h2>
          </div>
          <span className="heading-line" />
        </div>
        <div className="about-grid">
          <article className="glass-card about-card reveal">
            <div className="card-icon">
              <Terminal />
            </div>
            <p className="mono-label">$ cat /profile/about.md</p>
            <p className="large-copy">
              I&apos;m a curious learner turning ideas into interfaces and concepts into code.
            </p>
            <p className="muted-copy">
              Currently pursuing B.E. in Computer Engineering at V.V.P. Engineering College, Rajkot.
              I&apos;m focused on learning the fundamentals well — then using them to create things
              that are clear, useful, and built to grow.
            </p>
            <div className="location-row">
              <span>BASED_IN</span>
              <strong>RAJKOT, GUJARAT</strong>
            </div>
          </article>
        </div>
      </section>

      <section id="education" className="section shell">
        <div className="section-heading reveal">
          <span>// 02</span>
          <div>
            <p>ACADEMIC_TIMELINE</p>
            <h2>
              Academic journey<span>.</span>
            </h2>
          </div>
          <span className="heading-line" />
        </div>
        <article className="glass-card timeline-card reveal">
          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-node active">
                <Sparkles />
              </span>
              <div>
                <span className="timeline-date">2024 — 2028 / NOW</span>
                <h3>B.E. Computer Engineering</h3>
                <p>V.V.P. Engineering College, Rajkot. Pursuing B.E. in Computer Engineering.</p>
              </div>
            </div>
            <div className="timeline-item">
              <span className="timeline-node done">
                <Check />
              </span>
              <div>
                <span className="timeline-date">COMPLETED 2026</span>
                <h3>Higher Secondary Education</h3>
                <p>Science Stream — Dholakiya School, Rajkot.</p>
              </div>
            </div>
            <div className="timeline-item">
              <span className="timeline-node done">
                <Check />
              </span>
              <div>
                <span className="timeline-date">COMPLETED 2024</span>
                <h3>Secondary Education (10th Grade)</h3>
                <p>Dholakiya School, Rajkot.</p>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section id="skills" className="section shell">
        <div className="section-heading reveal">
          <span>// 03</span>

          <div>
            <p>STACK_MANIFEST</p>
            <h2>
              Technical stack<span>.</span>
            </h2>
          </div>
          <span className="heading-line" />
        </div>
        <div className="skills-grid">
          <SkillCard icon="01" title="LANGUAGES & MARKUP" items={["HTML5", "CSS3"]} />
          <SkillCard icon="02" title="DEVELOPER TOOLS" items={["VS Code", "Git", "GitHub"]} />
          <SkillCard
            icon="03"
            title="CURRENT ROADMAP"
            items={["JavaScript", "Data Structures", "Modern Web Frameworks"]}
            accent
          />
        </div>
      </section>

      <section id="projects" className="section shell">
        <div className="section-heading reveal">
          <span>// 04</span>
          <div>
            <p>WORKSPACE_LOG</p>
            <h2>
              Portfolio archive<span>.</span>
            </h2>
          </div>
          <span className="heading-line" />
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card glass-card reveal" key={project.name}>
              <div className="project-top">
                <span className={project.live ? "status live" : "status"}>
                  <span /> {project.status}
                </span>
                <span>0{index + 1}</span>
              </div>
              <div className="project-visual">
                <div className="project-grid" />
                <Terminal />
                <span className="project-command">
                  {project.live ? "portfolio.init()" : "project.pending()"}
                </span>
              </div>
              <p className="project-tag">{project.tag}</p>
              <h3>{project.name}</h3>
              <p className="muted-copy">{project.description}</p>
              <button className="text-link" onClick={() => project.live && scrollTo("contact")}>
                {project.live ? "EXPLORE PROJECT" : "COMING SOON"} <ArrowUpRight />
              </button>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section shell contact-section">
        <div className="section-heading reveal">
          <span>// 05</span>
          <div>
            <p>OPEN_CONNECTION</p>
            <h2>
              Get in touch<span>.</span>
            </h2>
          </div>
          <span className="heading-line" />
        </div>
        <div className="contact-grid">
          <div className="contact-copy reveal">
            <p className="large-copy">
              Have an idea, an opportunity, or just want to say hello?
            </p>
            <p className="muted-copy">
              I&apos;m always open to learning from new people and exploring interesting problems.
            </p>
            <div className="contact-links">
              <a href="mailto:khushamrutiya9@gmail.com">
                <Mail /> khushamrutiya9@gmail.com <ArrowUpRight />
              </a>
              <a
                href="https://www.linkedin.com/in/khush-amrutiya"
                target="_blank"
                rel="noreferrer"
              >
                <Network /> linkedin.com/in/khush-amrutiya <ArrowUpRight />
              </a>
            </div>
          </div>
          <form
            className="glass-card contact-form reveal"
            onSubmit={(event) => {
              event.preventDefault();
              setSent(true);
            }}
          >
            <label htmlFor="name">
              YOUR_NAME
              <input id="name" required placeholder="Jane Doe" />
            </label>
            <label htmlFor="email">
              YOUR_EMAIL
              <input id="email" type="email" required placeholder="jane@example.com" />
            </label>
            <label htmlFor="message">
              YOUR_MESSAGE
              <textarea id="message" required placeholder="Tell me what you're thinking..." rows={4} />
            </label>
            <button className="button primary" type="submit">
              {sent ? (
                <>
                  Message queued <Check />
                </>
              ) : (
                <>
                  Send message <Send />
                </>
              )}
            </button>
            {sent && <p className="success-note">Thanks — your message is ready to send.</p>}
          </form>
        </div>
      </section>

      <footer className="footer shell">
        <span>
          <span className="live-dot" /> KHUSH.AMRUTIYA
        </span>

        <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
          <GitBranch />
        </a>
      </footer>
    </main>
  );
}

function SkillCard({
  icon,
  title,
  items,
  accent = false,
}: {
  icon: string;
  title: string;
  items: string[];
  accent?: boolean;
}) {
  return (
    <article className={`skill-card glass-card reveal ${accent ? "accent-card" : ""}`}>
      <span className="skill-number">{icon}</span>
      <p className="mono-label">{title}</p>
      <div className="skill-list">
        {items.map((item) => (
          <span key={item}>
            <span className="list-dot" />
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
