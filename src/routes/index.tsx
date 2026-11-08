import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type DragEvent } from "react";
import gsap from "gsap";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elaina as a Developer" },
      { name: "description", content: "Elaina the Ashen Witch" },
      { property: "og:title", content: "Elaina as a Developer" },
      { property: "og:description", content: "Elaina istri nya iyasz" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const colors = ["bg-g-blue", "bg-g-red", "bg-g-yellow"];

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b bg-background/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#home" className="flex items-center gap-2 font-mono text-sm font-semibold">
          <span className="flex gap-1">
            {colors.map((c) => (
              <span key={c} className={`size-2.5 rounded-full ${c}`} />
            ))}
          </span>
          elaina.dev
        </a>
        <div className="flex gap-6 font-mono text-sm text-muted-foreground">
          <a href="#home" className="hover:text-foreground">~/home</a>
          <a href="#about" className="hover:text-foreground">~/about</a>
        </div>
      </nav>
    </header>
  );
}

function Orbit() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <div className="spin-slow absolute size-[340px] rounded-full border border-dashed border-g-blue/40 sm:size-[520px]">
        <span className="absolute -top-2.5 left-1/2 size-5 -translate-x-1/2 rounded-full bg-g-blue" />
        <span className="absolute -bottom-2 left-1/2 size-4 -translate-x-1/2 rounded-full bg-g-yellow" />
      </div>
      <div className="spin-slower absolute size-[460px] rounded-full border border-g-green/40 sm:size-[720px]">
        <span className="absolute top-1/2 -left-3 size-6 -translate-y-1/2 rounded-full bg-g-red" />
        <span className="absolute top-1/2 -right-2 size-4 -translate-y-1/2 rounded-md bg-g-green" />
      </div>
      <div className="spin-slow absolute size-[580px] rounded-full border border-border sm:size-[920px]">
        <span className="absolute -top-2 left-1/2 size-4 rotate-45 bg-g-yellow" />
      </div>
    </div>
  );
}

function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-char", { yPercent: 110, opacity: 0, stagger: 0.05, duration: 0.9, ease: "power4.out" });
      gsap.from(".hero-fade", { y: 20, opacity: 0, stagger: 0.12, delay: 0.6, duration: 0.8, ease: "power3.out" });
    }, ref);
    return () => ctx.revert();
  }, []);

  const name = "イレイナ".split("");
  const charColor = ["text-g-red", "text-g-blue", "text-g-yellow", "text-g-green"];

  return (
    <section ref={ref} id="home" className="dot-grid relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-16">
      <Orbit />
      <div className="relative text-center">
        <p className="hero-fade mb-6 inline-flex items-center gap-2 rounded-full border bg-card px-4 py-1.5 font-mono text-xs text-muted-foreground">
          そう、私です <span className="text-g-blue">イレイナ</span>
        </p>
        <h1 className="font-display text-7xl font-bold leading-none tracking-tighter sm:text-9xl md:text-[11rem]">
          {name.map((ch, i) => (
            <span key={i} className="inline-block overflow-hidden align-bottom">
              <span className={`hero-char inline-block ${charColor[i]}`}>{ch}</span>
            </span>
          ))}
        </h1>
        <p className="hero-fade mt-6 font-mono text-base text-foreground sm:text-lg">
          <span className="text-g-green">const</span> role = <span className="text-g-red">"Ashen Witch & Developer"</span>
          <span className="blink ml-1 inline-block h-5 w-2 translate-y-1 bg-ink" />
        </p>
        <div className="hero-fade mt-10 flex flex-wrap items-center justify-center gap-3.5">
          <a
            href="#about"
            className="group relative inline-flex items-center gap-2.5 rounded-full bg-ink px-6 py-3 font-mono text-sm font-medium text-paper shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ink/20 active:translate-y-0"
          >
            <span className="size-2 rounded-full bg-g-green transition-transform duration-300 group-hover:scale-125" />
            <span>View profile</span>
            <ArrowDown className="size-3.5 text-paper/60 transition-transform duration-300 group-hover:translate-y-0.5 group-hover:text-paper" />
          </a>
          <a
            href="https://iyasz.dev"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-full border border-border bg-card/90 px-6 py-3 font-mono text-sm font-medium text-foreground backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-g-blue/50 hover:bg-card hover:shadow-md hover:shadow-g-blue/10 active:translate-y-0"
          >
            <Sparkles className="size-3.5 text-g-yellow transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
            <span>Say hello</span>
            <ArrowUpRight className="size-3.5 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-g-blue" />
          </a>
        </div>
      </div>
    </section>
  );
}

function PhotoSlot() {
  const [src, setSrc] = useState<string>(`${import.meta.env.BASE_URL}images/profil_pic.jpeg`);
  const [over, setOver] = useState(false);

  const onDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith("image/")) setSrc(URL.createObjectURL(file));
  };

  return (
    <div className="relative">
      <div className="absolute -top-3 -left-3 size-full rounded-3xl bg-g-yellow" />
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setOver(true);
        }}
        onDragLeave={() => setOver(false)}
        onDrop={onDrop}
        className={`relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-3xl border-2 bg-card transition-colors ${over ? "border-g-blue bg-g-blue/5" : "border-ink/20"}`}
      >
        <img src={src} alt="Elaina" className="size-full object-cover object-top" />
      </div>
    </div>
  );
}

function About() {
  const stats = [
    { k: "origin", v: "Robetta", c: "bg-g-blue" },
    { k: "class", v: "Ashen Witch", c: "bg-g-red" },
    { k: "mentor", v: "Fran", c: "bg-g-yellow" },
    { k: "husband", v: "Iyasz", c: "bg-g-green" },
  ];
  const stack = ["Magic.js", "Fireball Script", "Lovable", "Ash.go"];

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28">
      <p className="font-mono text-sm text-g-blue">01. about()</p>
      <div className="mt-6 grid items-center gap-16 md:grid-cols-[1fr_1.2fr]">
        <PhotoSlot />
        <div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            A witch who writes code between journeys.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            I'm Elaina, a traveling witch from the land of Robetta. I collect stories from every
            country I visit and turn them into clean, thoughtful interfaces. Broom in one hand,
            keyboard in the other.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {stats.map((s) => (
              <div key={s.k} className="rounded-xl border bg-card p-4">
                <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                  <span className={`size-2 rounded-full ${s.c}`} />
                  {s.k}
                </div>
                <div className="mt-1 font-semibold">{s.v}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {stack.map((t) => (
              <span key={t} className="rounded-full border bg-secondary px-3 py-1 font-mono text-xs">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="flex h-1">
        {colors.map((c) => (
          <span key={c} className={`flex-1 ${c}`} />
        ))}
      </div>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 font-mono text-sm sm:flex-row">
        <span className="text-muted-foreground">© {new Date().getFullYear()} Elaina - The witch's journey</span>
        <a href="https://iyasz.dev" className="group inline-flex items-center gap-2 font-semibold">
          <span className="size-2 rounded-full bg-g-red transition-transform group-hover:scale-150" />
          Husband of Elaina
        </a>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Footer />
    </main>
  );
}
