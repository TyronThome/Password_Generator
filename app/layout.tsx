import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const jetBrainSans = localFont({
  src: "./fonts/JetBrainsMono-VariableFont_wght.ttf",
  variable: "--font-jet-sans",
  weight: "100 900",
});
const jetBrainsMono = localFont({
  src: "./fonts/JetBrainsMono-Italic-VariableFont_wght.ttf",
  variable: "--font-jet-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Password Generator",
  description: "Generate a password",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetBrainSans.variable} ${jetBrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
