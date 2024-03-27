import type { Metadata } from "next";
import "./globals.css";
import { AOSInit } from "@/lib/Aos";
import AppFooter from "@/components/layout/footer/Footer";

export const metadata: Metadata = {
  title: "flashfit.com",
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
        <AppFooter />
        </body>
    </html>
  );
}


