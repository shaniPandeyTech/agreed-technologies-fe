import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/global.scss";
import Header from "@/src/components/Header";

export const metadata: Metadata = {
  title: "Agreed Technologies",
  description:
    "Allow us to take total control of your digital marketing and give you more business. More traffic. More engagement. More action. Less marketing spend.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
