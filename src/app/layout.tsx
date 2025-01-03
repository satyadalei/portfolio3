import type { Metadata } from "next";
import "./globals.css";
import { Inder, Calistoga, Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";

const inter = Inder({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400"],
});
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description:
    "Developed by Satyanarayan Dalei with the help of Frontend Tribe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-gray-900 text-white antialiased font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
