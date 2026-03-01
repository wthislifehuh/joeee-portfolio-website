import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joe Ee's Personal Website",
  description: "Joe Ee Ho's Personal PortfolioWebsite",
  icons: {
    icon: "/joeee_logo.png",
    shortcut: "/joeee_logo.png",
    apple: "/joeee_logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        {process.env.NODE_ENV === "development" && (
          <>
            <Script
              crossOrigin="anonymous"
              src="https://unpkg.com/react-grab/dist/index.global.js"
              strategy="afterInteractive"
            />
            <Script
              crossOrigin="anonymous"
              src="https://unpkg.com/same-runtime/dist/index.global.js"
              strategy="afterInteractive"
            />
          </>
        )}
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
