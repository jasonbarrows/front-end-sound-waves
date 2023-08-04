
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./Header";
import Nav from "./Nav"
import { UserProvider } from "./context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-sky-50 text-neutral-900">
        <Nav />
        <div className="container mx-auto">
          <UserProvider>{children}</UserProvider>
        </div>
      </body>
    </html>
  );
}
