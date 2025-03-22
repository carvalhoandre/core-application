import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio André Leite Carvalho",
};

const fonte = Montserrat ({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${fonte.className}`}
      >
        {children}
      </body>
    </html>
  );
}
