export default function Home() {
  return (
    <main className="relative isolate flex min-h-dvh overflow-hidden bg-[#0a0a0a] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#10b981]/10 blur-[140px]"
      />

      <div className="mx-auto flex w-full max-w-[1440px] flex-col px-5 sm:px-8 lg:px-12">
        <header className="animate-reveal flex h-20 items-center justify-between border-b border-white/10 sm:h-24">
          <a
            href="#home"
            className="group flex items-center gap-3 text-sm font-semibold tracking-[-0.02em]"
            aria-label="Constructor home"
          >
            <span className="size-2 bg-[#10b981] shadow-[0_0_18px_rgba(16,185,129,0.7)] transition-transform duration-300 group-hover:rotate-45" />
            CONSTRUCTOR
          </a>
          <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-[#6b7280]">
            <span className="hidden sm:inline">Independent studio</span>
            <span className="h-px w-6 bg-white/20" />
            <span className="text-[#10b981]">Available</span>
          </div>
        </header>

        <section
          id="home"
          className="flex flex-1 flex-col items-center justify-center py-20 text-center sm:py-24 lg:py-28"
        >
          <div className="animate-reveal [animation-delay:100ms]">
            <p className="mb-7 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#10b981] sm:mb-9 sm:text-xs">
              Design · Build · Ship
            </p>
          </div>

          <h1 className="animate-reveal max-w-6xl text-balance text-[clamp(3.5rem,10vw,9rem)] font-semibold leading-[0.86] tracking-[-0.075em] [animation-delay:180ms]">
            Hello from
            <span className="block text-[#10b981]">Constructor.</span>
          </h1>

          <p className="animate-reveal mt-8 max-w-xl text-pretty text-base leading-7 text-[#9ca3af] [animation-delay:280ms] sm:mt-10 sm:text-lg sm:leading-8">
            Built with Codex and Azure. Crafted for ambitious ideas that deserve
            a precise, beautifully simple digital home.
          </p>

          <div className="animate-reveal mt-10 [animation-delay:380ms] sm:mt-12">
            <a
              href="mailto:hello@constructor.dev"
              className="group inline-flex h-14 items-center gap-8 bg-[#10b981] px-7 text-sm font-semibold text-[#0a0a0a] transition-[background-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-[#059669] hover:shadow-[0_16px_40px_rgba(16,185,129,0.22)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#10b981] sm:h-16 sm:px-8 sm:text-base"
            >
              Start a project
              <span
                aria-hidden="true"
                className="text-xl transition-transform duration-300 group-hover:translate-x-1"
              >
                ↗
              </span>
            </a>
          </div>
        </section>

        <footer className="animate-reveal flex h-20 items-center justify-between border-t border-white/10 text-[10px] font-medium uppercase tracking-[0.18em] text-[#6b7280] [animation-delay:480ms] sm:text-[11px]">
          <span>Digital experiences</span>
          <span className="hidden sm:inline">Built to make an impact</span>
          <span>© 2026</span>
        </footer>
      </div>
    </main>
  );
}
