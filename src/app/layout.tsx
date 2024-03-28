import type { Metadata } from "next";
import "./globals.css";
import { AOSInit } from "@/lib/Aos";

export const metadata: Metadata = {
  title: "flashfit.com",
  description: "Website landing page",
  manifest: "/manifest.json",
  icons: {
    apple: "/icon-512x512.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AOSInit />
        {children}
      </body>
    </html>
  );
}
