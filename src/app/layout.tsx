import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Soteria Dialogue — Being With",
  description: "Soteria Dialogue explores a human-centred approach to presence, dialogue, autonomy and continuity. Discover the concept and its interactive prototype.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${geistSans.variable} antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
