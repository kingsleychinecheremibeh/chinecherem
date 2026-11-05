import { Reveal } from "@/components/Reveal";
import { CopyEmail } from "@/components/CopyEmail";
import { NowPlaying } from "@/components/NowPlaying";
import { FlowDiagram } from "@/components/FlowDiagram";
import { site, about, projects, stack, principles, services, education } from "@/lib/site";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-10 font-mono text-xs uppercase tracking-[0.2em] text-muted">{children}</h2>
  );
}

export default function Home() {
  return (
    <>
      <header className="mx-auto flex max-w-3xl items-center justify-between px-6 py-6">
        <span className="font-mono text-sm">{site.name.toLowerCase()}.dev</span>
        <nav className="flex items-center gap-6 font-mono text-xs text-muted">
          <a href="#work" className="transition-colors hover:text-foreground">work</a>
          <a href="#stack" className="transition-colors hover:text-foreground">stack</a>
          <a href="#contact" className="transition-colors hover:text-foreground">contact</a>
        </nav>
      </header>

      <main id="main" className="mx-auto max-w-3xl px-6 pb-24">
        {/* Hero */}
        <section className="pb-24 pt-20 sm:pt-28">
          <Reveal>
            <h1 className="font-serif text-6xl leading-[1.02] tracking-tight sm:text-8xl">
              {site.name}.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted sm:text-xl">{site.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm">
              <a href={site.links.github} target="_blank" rel="noreferrer" className="underline decoration-line underline-offset-4 hover:decoration-accent">GitHub</a>
              <a href={site.links.linkedin} target="_blank" rel="noreferrer" className="underline decoration-line underline-offset-4 hover:decoration-accent">LinkedIn</a>
              <a href={site.links.whatsapp} target="_blank" rel="noreferrer" className="underline decoration-line underline-offset-4 hover:decoration-accent">WhatsApp</a>
              <a href={`mailto:${site.email}`} className="underline decoration-line underline-offset-4 hover:decoration-accent">Email</a>
            </div>
          </Reveal>
          <Reveal delay={150} className="mt-10">
            <NowPlaying />
          </Reveal>
        </section>

        {/* About */}
        <section className="border-t border-line py-20">
          <SectionLabel>About</SectionLabel>
          <Reveal className="space-y-5 text-lg leading-relaxed">
            {about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>
        </section>

        {/* Work */}
        <section id="work" className="border-t border-line py-20">
          <SectionLabel>Selected work</SectionLabel>
          <div className="space-y-16">
            {projects.map((p) => (
              <Reveal key={p.title}>
                <article>
                  <p className="mb-2 font-mono text-xs text-accent">{p.kind}</p>
                  <h3 className="font-serif text-3xl sm:text-4xl">
                    {p.href ? (
                      <a href={p.href} target="_blank" rel="noreferrer" className="hover:text-accent">
                        {p.title} ↗
                      </a>
                    ) : (
                      p.title
                    )}
                  </h3>
                  <p className="mt-3 max-w-2xl text-muted">{p.summary}</p>
                  <ul className="mt-5 space-y-1.5 text-sm">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex gap-3">
                        <span className="text-muted">—</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                  {p.stack.length > 0 && (
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <li key={s} className="rounded border border-line px-2 py-0.5 font-mono text-xs text-muted">
                          {s}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Stack */}
        <section id="stack" className="border-t border-line py-20">
          <SectionLabel>Stack &amp; capabilities</SectionLabel>
          <Reveal className="mb-14">
            <FlowDiagram />
          </Reveal>
          <div className="grid gap-10 sm:grid-cols-2">
            {stack.map((g) => (
              <Reveal key={g.group}>
                <h3 className="mb-3 font-mono text-xs text-accent">{g.group}</h3>
                <ul className="space-y-1.5 text-sm">
                  {g.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Principles */}
        <section className="border-t border-line py-20">
          <SectionLabel>How I build</SectionLabel>
          <div className="grid gap-10 sm:grid-cols-2">
            {principles.map((p) => (
              <Reveal key={p.title}>
                <h3 className="font-serif text-2xl">{p.title}</h3>
                <p className="mt-2 text-sm text-muted">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="border-t border-line py-20">
          <SectionLabel>Education</SectionLabel>
          <Reveal>
            <h3 className="font-serif text-2xl">{education.school}</h3>
            <p className="mt-1 text-sm text-muted">{education.course}</p>
            <ul className="mt-4 space-y-1 text-sm">
              {education.certs.map((c) => (
                <li key={c} className="flex gap-3">
                  <span className="text-muted">—</span>
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        {/* Work with me + contact */}
        <section id="contact" className="border-t border-line py-20">
          <SectionLabel>Work with me</SectionLabel>
          <Reveal>
            <ul className="mb-12 space-y-2 text-lg">
              {services.map((s) => (
                <li key={s} className="flex gap-3">
                  <span className="text-accent">→</span>
                  {s}
                </li>
              ))}
            </ul>
            <CopyEmail email={site.email} />
            <p className="mt-6 font-mono text-sm">
              <a href={site.links.cv} className="underline decoration-line underline-offset-4 hover:decoration-accent">
                Download CV
              </a>
            </p>
          </Reveal>
        </section>
      </main>

      <footer className="mx-auto max-w-3xl border-t border-line px-6 py-8 font-mono text-xs text-muted">
        © {site.fullName}
      </footer>
    </>
  );
}
