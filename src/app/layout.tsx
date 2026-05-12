import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MyQueryClientProvider from "@/providers/my-query-client";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "第三屆沐榕回娘家 | 2026年8月22日",
  description: "第三屆沐榕回娘家活動，2026年8月22日，典空間活動會場。歡迎歷屆學長姐學弟妹齊聚，情誼永續。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MyQueryClientProvider>{children}</MyQueryClientProvider>
      </body>
    </html>
  );
}
