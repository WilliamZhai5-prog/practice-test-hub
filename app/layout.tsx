import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Practice Room | Grade 12 Practice Tests",
  description: "Practice tests for Functions, Chemistry and Data Management 4U. Physics and Biology coming soon.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

