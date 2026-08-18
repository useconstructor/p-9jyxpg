const features = [
  {
    number: "01",
    icon: "⚡",
    title: "Fast",
    description:
      "From first sketch to production, we move with intent—without trading away the details that make an experience feel exceptional.",
    accent: "#22d3ee",
    glow: "group-hover:shadow-[0_24px_80px_-32px_rgba(34,211,238,0.5)]",
  },
  {
    number: "02",
    icon: "🛡️",
    title: "Reliable",
    description:
      "Built on resilient foundations, tested at every turn, and engineered to stay sharp when your audience and ambitions grow.",
    accent: "#6366f1",
    glow: "group-hover:shadow-[0_24px_80px_-32px_rgba(99,102,241,0.55)]",
  },
  {
    number: "03",
    icon: "🚀",
    title: "Powerful",
    description:
      "Purposeful technology and focused design give your team the leverage to launch bigger ideas and make a lasting impact.",
    accent: "#8b5cf6",
    glow: "group-hover:shadow-[0_24px_80px_-32px_rgba(139,92,246,0.55)]",
  },
] as const;

export default function Home() {
  return (
    <main className="relative isolate min-h-dvh overflow-hidden bg-[#0a0a0a] text-[#f8fafc]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_72%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-80 -z-10 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-[#6366f1]/12 blur-[150px]"
      />

      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <header className="animate-reveal flex h-20 items-center justify-between border-b border-white/10 sm:h-24">
          <a
            href="#home"
            className="group flex items-center gap-3 text-sm font-semibold tracking-[-0.02em]"
            aria-label="Constructor home"
          >
            <span className="size-2 bg-[#22d3ee] shadow-[0_0_18px_rgba(34,211,238,0.7)] transition-transform duration-300 group-hover:rotate-45" />
            CONSTRUCTOR
          </a>
          <a
            href="#features"
            className="group flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-[#94a3b8] transition-colors hover:text-white"
          >
            <span className="hidden sm:inline">Explore capabilities</span>
            <span className="h-px w-6 bg-white/20 transition-all group-hover:w-9 group-hover:bg-[#22d3ee]" />
            <span className="text-[#22d3ee]">Features</span>
          </a>
        </header>

        <section
          id="home"
          className="flex min-h-[calc(100dvh-6rem)] flex-col items-center justify-center py-20 text-center sm:py-24 lg:py-28"
        >
          <p className="animate-reveal mb-7 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#22d3ee] [animation-delay:100ms] sm:mb-9 sm:text-xs">
            Design · Build · Ship
          </p>

          <h1 className="animate-reveal max-w-6xl text-balance text-[clamp(3.5rem,10vw,9rem)] font-semibold leading-[0.86] tracking-[-0.075em] [animation-delay:180ms]">
            Hello from
            <span className="block bg-gradient-to-r from-[#22d3ee] via-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent">
              Constructor.
            </span>
          </h1>

          <p className="animate-reveal mt-8 max-w-xl text-pretty text-base leading-7 text-[#94a3b8] [animation-delay:280ms] sm:mt-10 sm:text-lg sm:leading-8">
            Built with Codex and Azure. Crafted for ambitious ideas that deserve
            a precise, beautifully simple digital home.
          </p>

          <div className="animate-reveal mt-10 [animation-delay:380ms] sm:mt-12">
            <a
              href="mailto:hello@constructor.dev"
              className="group inline-flex h-14 items-center gap-8 bg-[#f8fafc] px-7 text-sm font-semibold text-[#0a0a0a] transition-[background-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-[#22d3ee] hover:shadow-[0_16px_40px_rgba(34,211,238,0.22)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#22d3ee] sm:h-16 sm:px-8 sm:text-base"
            >
              Start a project
              <span aria-hidden="true" className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>
          </div>
        </section>

        <section id="features" className="scroll-mt-8 border-t border-white/10 py-20 sm:py-28 lg:py-36">
          <div className="mb-12 grid gap-6 sm:mb-16 lg:grid-cols-[1fr_1.3fr] lg:items-end">
            <div>
              <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#22d3ee]">
                Built different
              </p>
              <h2 className="max-w-xl text-balance text-4xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
                Momentum, without compromise.
              </h2>
            </div>
            <p className="max-w-xl text-pretty text-base leading-7 text-[#94a3b8] lg:justify-self-end lg:text-lg lg:leading-8">
              Every build brings speed, stability, and serious capability together—so your product feels as good behind the scenes as it does on screen.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3 lg:gap-6">
            {features.map((feature) => (
              <article
                key={feature.title}
                className={`group relative flex min-h-[22rem] flex-col overflow-hidden border border-white/10 bg-[linear-gradient(145deg,rgba(26,26,46,0.78),rgba(10,10,10,0.9))] p-6 backdrop-blur-xl transition-[transform,border-color,box-shadow] duration-500 hover:-translate-y-2 hover:border-white/25 sm:p-8 ${feature.glow}`}
              >
                <div
                  aria-hidden="true"
                  className="absolute -right-16 -top-16 size-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20"
                  style={{ backgroundColor: feature.accent }}
                />
                <div className="relative flex items-start justify-between">
                  <div
                    className="grid size-14 place-items-center border border-white/10 bg-white/[0.04] text-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-[transform,border-color] duration-500 group-hover:-rotate-3 group-hover:scale-110"
                    style={{ borderBottomColor: feature.accent }}
                    aria-hidden="true"
                  >
                    {feature.icon}
                  </div>
                  <span className="font-mono text-xs tracking-[0.2em] text-white/30">
                    / {feature.number}
                  </span>
                </div>

                <div className="relative mt-auto pt-16">
                  <div
                    aria-hidden="true"
                    className="mb-6 h-px w-10 transition-all duration-500 group-hover:w-20"
                    style={{ backgroundColor: feature.accent }}
                  />
                  <h3 className="text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-[#94a3b8] sm:text-base sm:leading-7">
                    {feature.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <footer className="flex h-24 items-center justify-between border-t border-white/10 text-[10px] font-medium uppercase tracking-[0.18em] text-[#64748b] sm:text-[11px]">
          <span>Digital experiences</span>
          <span className="hidden sm:inline">Built to make an impact</span>
          <span>© 2026</span>
        </footer>
      </div>
    </main>
  );
}
