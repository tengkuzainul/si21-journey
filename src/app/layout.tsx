import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ConfettiEffect from "@/components/confetti-effect";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "SI-21 Journey",
  description: "Documenting the Journey of Information System Students 21",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${poppins.variable} antialiased overflow-y-auto
  [&::-webkit-scrollbar]:w-0`}
      >
        <ConfettiEffect triggerOnMount={true} delay={800} duration={3000} />
        {children}
      </body>
    </html>
  );
}
