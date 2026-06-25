"use client";

import { useEffect, useRef, useState } from "react";

const INK = "#1a1714";

const MANIFESTO: string[] = [
  "Customers want to be heard. They want you to build for what they really need, and to care enough to get it right. Somewhere, we lost the ability to do that.",
  "People tell the truth to each other. Not in surveys, not in interviews. When they're talking to someone like them, you hear the real reason they buy, the exact phrase they'd tell a friend.",
  "That's the signal every brand says it wants and almost none can actually get. “Customer obsession” turned into a slogan because no one had the tools to keep the promise.",
  "The world is racing to automate people out of everything. We're doing the opposite. We use it to strip out the cost, the scheduling, the waiting, everything that makes real conversation too slow to do often. What's left is the part that matters: people talking, and you listening.",
  "The market never stops talking. Now you can hear it as it speaks, instead of reading a report on what it used to believe. Real conversations, at the price you'd expect to pay for a survey.",
  "The conversations are already happening. We just let you in the room.",
];

export function StealthSite() {
  // Each hover over the hero logo turns it another quarter-turn.
  const [logoSpin, setLogoSpin] = useState(0);
  // Nav slides up out of view on scroll down, returns on scroll up.
  const [navHidden, setNavHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (y > lastY && y > 80) {
        setNavHidden(true);
      } else if (y < lastY) {
        setNavHidden(false);
      }
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="stealth-root" style={{ position: "relative" }}>
      {/* Sticky header — slides up out of view on scroll down, returns on scroll up */}
      <header
        style={{
          position: "sticky",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          backgroundColor: "rgba(250, 247, 242, 0.85)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          boxShadow: "rgba(26, 23, 20, 0.08) 0px 1px 0px 0px",
          transform: navHidden ? "translateY(-100%)" : "translateY(0)",
          transition: "transform 0.35s ease",
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
          minHeight: "56vh",
        }}
      >
        {/* Soft cream halo lifts the logo lockup off the busy watercolor backdrop. */}
        <div
          className="stealth-hero-lockup flex items-center justify-center"
          style={{
            position: "relative",
            zIndex: 10,
            padding: "40px 56px",
            background:
              "radial-gradient(62% 70% at 50% 50%, rgba(250, 247, 242, 0.72) 0%, rgba(250, 247, 242, 0.42) 52%, rgba(250, 247, 242, 0) 80%)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            aria-hidden="true"
            src="/site-test/logo.svg"
            onMouseEnter={() => setLogoSpin((s) => s + 90)}
            style={{
              width: 60,
              height: 60,
              cursor: "pointer",
              transform: `rotate(${logoSpin}deg)`,
              transformOrigin: "center",
              transition: "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Humanize"
            src="/site-test/wordmark.svg"
            style={{
              height: 38,
              width: "auto",
            }}
          />
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
                    We&apos;re limiting access to only a few brands. If
                    you&apos;ve been invited, we would love to have you as a part
                    of the Humanize journey.
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
