// "use client";

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "./Nav";
import { UserProvider } from "./context";
import { AudioProvider } from "./AudioContext";
import NowPlaying from "./NowPlaying";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SoundWaves App",
  description: "Generated by create next app",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <UserProvider>
        <AudioProvider>
          <body className="mb-32 pb-4 bg-sky-50 text-neutral-900">
            <div className="container mx-auto">
              <Nav />
              {children} <NowPlaying />
            </div>
          </body>
        </AudioProvider>
      </UserProvider>
    </html>
  );
}
