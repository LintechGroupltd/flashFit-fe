import type { Metadata } from "next";
import "./globals.css";
import { AOSInit } from "@/lib/Aos";

export const metadata: Metadata = {
  title: "Website",
  description: "Website landing page",
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


