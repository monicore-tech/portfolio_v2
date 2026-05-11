import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Moses Oni — IT Specialist · Web Developer · Designer",
  description:
    "Portfolio of Moses Oluwadamilare Oni — Computer Science graduate based in Irving, TX. Specializing in IT support, web development, UI/UX design, and data analysis.",
  keywords: ["Moses Oni", "IT Specialist", "Web Developer", "UI/UX Designer", "Irving Texas", "Portfolio"],
  openGraph: {
    title: "Moses Oni — Portfolio",
    description: "IT Specialist · Web Developer · UI/UX Designer · Data Analyst",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="bg-[var(--bg)] text-[var(--fg)] antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
