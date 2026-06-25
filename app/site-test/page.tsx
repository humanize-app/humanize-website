import type { Metadata } from "next";
import { Nothing_You_Could_Do } from "next/font/google";
import { StealthSite } from "./StealthSite";
import "./site-test.css";

// Cursive face used only for the "The Humanize Team" signature.
const signature = Nothing_You_Could_Do({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-signature",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Humanize",
  description: "AI doesn't buy your products. People do.",
  alternates: { canonical: "/site-test" },
  robots: { index: false, follow: false },
};

export default function SiteTestPage() {
  return (
    <div className={signature.variable}>
      <StealthSite />
    </div>
  );
}
