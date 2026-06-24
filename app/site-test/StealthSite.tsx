"use client";

import { useEffect, useRef, useState } from "react";

const INK = "#1a1714";

const MANIFESTO: string[] = [
  "Customers want to be heard. They want you to build for what they really need, and to care enough to get it right. Somewhere, we lost the ability to do that.",
  "People tell the truth to each other, not in surveys or interviews. When they open up, you hear the real reason they buy, the phrase they'd tell a friend. That's the signal that makes a product land and a campaign connect.",
  "Customer obsession became an empty slogan. A promise no one had the tools to keep. We built what was missing: a way to understand them in real time, at scale.",
  "The world is racing to automate people out of everything. We want the opposite: to bring you closer to the humans you serve, not further away from them.",
  "We use AI to clear away the cost, the waiting, the friction, everything that made listening too hard to do consistently. This makes time for what matters most: the conversation, the emotion, the people you're building for.",
  "The market never stops talking. Now you can finally listen as it speaks, not read a report on what it used to believe.",
  "Humanize gives you qualitative depth at quantitative economics. Not the loudest voices, not scattered data points. Real human conversation, at a reach no one has had before.",
  "Behind everything we build, we will always keep one promise: use the speed and scale AI offers to its fullest, but protect the human element with everything we have. We will never trade one for the other.",
  "This is the end of guessing what people want. The conversations are already happening naturally. Now you finally get to be a part of them.",
];

export function StealthSite() {
  const [headerVisible, setHeaderVisible] = useState(false);
  // Each hover over the header logo turns it another quarter-turn.
  const [logoSpin, setLogoSpin] = useState(0);

  // Header fades in once the hero has been mostly scrolled past.
  useEffect(() => {
    const onScroll = () => {
      setHeaderVisible(window.scrollY > window.innerHeight * 0.5);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="stealth-root" style={{ position: "relative" }}>
      {/* Sticky header — hidden until the hero is scrolled past */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          backgroundColor: "rgba(250, 247, 242, 0.85)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          boxShadow: "rgba(26, 23, 20, 0.08) 0px 1px 0px 0px",
          pointerEvents: headerVisible ? "auto" : "none",
          opacity: headerVisible ? 1 : 0,
          transform: headerVisible ? "translateY(0)" : "translateY(-80px)",
          transition: "opacity 0.4s ease, transform 0.4s ease",
        }}
      >
        <div className="stealth-header-inner flex h-16 max-w-6xl items-center justify-between">
          <a href="#" className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Humanize"
              src="/site-test/logo-horizontal.svg"
              style={{ height: 40, width: "auto" }}
            />
          </a>
          <div className="flex items-center gap-5">
            <a
              href="#contact"
              style={{ fontSize: 14, color: "rgba(26, 23, 20, 0.65)" }}
              className="hidden transition-colors hover:text-[#1a1714] sm:inline"
            >
              Log in
            </a>
            <a
              href="#contact"
              style={{
                fontSize: 14,
                backgroundColor: INK,
                color: "#fff",
                padding: "8px 16px",
                borderRadius: 9999,
              }}
              className="transition-colors hover:opacity-90"
            >
              Request a demo
            </a>
          </div>
        </div>
      </header>

      {/* Hero — full-viewport cream fold, headline sitting a touch above center */}
      <div
        className="flex flex-col items-center justify-center px-6 text-center"
        style={{
          width: "100%",
          minHeight: "78vh",
          paddingBottom: "4vh",
        }}
      >
        {/* Soft cream halo lifts the text off the busy watercolor backdrop. */}
        <div
          className="flex flex-col items-center"
          style={{
            padding: "40px 56px",
            background:
              "radial-gradient(60% 58% at 50% 50%, rgba(250, 247, 242, 0.72) 0%, rgba(250, 247, 242, 0.42) 52%, rgba(250, 247, 242, 0) 78%)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Humanize"
            src="/site-test/logo.svg"
            className="mb-5"
          onMouseEnter={() => setLogoSpin((s) => s + 90)}
          style={{
            width: 64,
            height: 64,
            opacity: 0.6,
            cursor: "pointer",
            transform: `rotate(${logoSpin}deg)`,
            transformOrigin: "center",
            transition: "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        />
        <h1
          style={{
            color: INK,
            fontWeight: 400,
            letterSpacing: "-0.025em",
            lineHeight: 1.15,
            fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
            textWrap: "balance",
            textShadow:
              "rgba(250, 247, 242, 0.9) 0px 1px 14px, rgba(250, 247, 242, 0.7) 0px 2px 28px",
          }}
        >
          AI doesn&apos;t buy your products.{" "}
          <strong style={{ fontWeight: 600 }}>People do.</strong>
        </h1>
        <p
          className="mt-4"
          style={{
            color: "rgba(26, 23, 20, 0.62)",
            fontWeight: 400,
            fontSize: "clamp(1rem, 1.8vw, 1.25rem)",
            textShadow:
              "rgba(250, 247, 242, 0.95) 0px 1px 10px, rgba(250, 247, 242, 0.8) 0px 2px 20px",
          }}
        >
          So we built the only way to actually listen to them.
        </p>
        </div>
      </div>

      {/* Manifesto — centered card on the cream backdrop */}
      <div>
        <section style={{ padding: "0 24px 96px" }}>
            <div
              className="stealth-card"
              style={{
                maxWidth: "48rem",
                borderRadius: 24,
                background: "rgba(255, 255, 255, 0.62)",
                backdropFilter: "blur(40px) saturate(1.8)",
                WebkitBackdropFilter: "blur(40px) saturate(1.8)",
                border: "1px solid rgba(255, 255, 255, 0.7)",
                boxShadow:
                  "rgba(30, 28, 24, 0.13) 0px 8px 40px, rgba(30, 28, 24, 0.06) 0px 1px 2px",
              }}
            >
              <Reveal className="mb-10 flex justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Humanize"
                  src="/site-test/logo.svg"
                  style={{ width: 40, height: 40, opacity: 0.3 }}
                />
              </Reveal>

              <div className="flex flex-col" style={{ gap: 28 }}>
                <Reveal>
                  <div className="mb-2 flex items-center gap-4">
                    <p
                      style={{
                        fontSize: 13,
                        fontWeight: 400,
                        letterSpacing: "0.15em",
                        color: "rgba(26, 23, 20, 0.45)",
                        textTransform: "uppercase",
                        whiteSpace: "nowrap",
                      }}
                    >
                      What we believe
                    </p>
                    <span
                      style={{
                        flex: 1,
                        height: 1,
                        background: "rgba(26, 23, 20, 0.12)",
                      }}
                    />
                  </div>
                </Reveal>

                {MANIFESTO.map((para, i) => (
                  <Reveal key={i}>
                    <p
                      style={{
                        color: "rgba(26, 23, 20, 0.85)",
                        lineHeight: 1.8,
                        fontSize: 17,
                      }}
                    >
                      {para}
                    </p>
                  </Reveal>
                ))}

                <Reveal>
                  <p
                    style={{
                      color: "rgba(26, 23, 20, 0.5)",
                      lineHeight: 1.85,
                      fontSize: 15,
                      fontStyle: "italic",
                    }}
                  >
                    We&apos;re limiting access to only a few brands. If you&apos;ve
                    been invited to this page, we would love to partner and have
                    you as a part of the Humanize journey from the very start.
                  </p>
                </Reveal>

                <Reveal>
                  <p
                    className="mt-3"
                    style={{
                      color: "rgba(26, 23, 20, 0.75)",
                      fontFamily: "var(--font-signature), cursive",
                      fontSize: 28,
                      lineHeight: 1.2,
                    }}
                  >
                    The Humanize Team
                  </p>
                </Reveal>
              </div>
            </div>
          </section>

          {/* Footer — full-width bar */}
          <footer
            style={{
              borderTop: "1px solid rgba(255, 255, 255, 0.7)",
              padding: "20px 32px 28px",
              background: "rgba(255, 255, 255, 0.55)",
              backdropFilter: "blur(24px) saturate(1.6)",
              WebkitBackdropFilter: "blur(24px) saturate(1.6)",
            }}
          >
            <div
              className="flex flex-col items-center justify-between gap-3 sm:flex-row"
              style={{
                width: "100%",
                fontFamily:
                  "var(--font-plex-mono), ui-monospace, SFMono-Regular, Menlo, monospace",
                letterSpacing: "0.04em",
                textShadow: "rgba(250, 247, 242, 0.7) 0px 1px 6px",
              }}
            >
              <span style={{ fontSize: 13, color: "rgba(26, 23, 20, 0.72)" }}>
                © 2026 Humanize
              </span>
              <span style={{ fontSize: 12, color: "rgba(26, 23, 20, 0.62)" }}>
                SOC 2 Type II in progress
              </span>
              <nav
                className="flex gap-7"
                style={{ fontSize: 13, color: "rgba(26, 23, 20, 0.72)" }}
              >
                <a href="#" className="transition-colors hover:text-[#1a1714]">
                  Privacy
                </a>
                <a href="#" className="transition-colors hover:text-[#1a1714]">
                  Terms
                </a>
                <a href="#" className="transition-colors hover:text-[#1a1714]">
                  Security
                </a>
              </nav>
            </div>
          </footer>
      </div>
    </div>
  );
}

/** Wraps children in a scroll-reveal that fires once when scrolled into view. */
function Reveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`stealth-reveal${visible ? " is-visible" : ""}${
        className ? ` ${className}` : ""
      }`}
    >
      {children}
    </div>
  );
}
