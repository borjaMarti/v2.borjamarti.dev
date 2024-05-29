import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Borja Martí - Full-Stack Developer",
  description: "Borja Martí's portfolio and contact info",
  keywords: [
    "Web Developer",
    "Full-Stack Developer",
    "Front-End Developer",
    "Back-End Developer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={manrope.className}>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}
