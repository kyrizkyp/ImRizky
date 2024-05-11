import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navigation/Navbar";

export const metadata: Metadata = {
  title: "KYRIZKYP",
  description: "Specialist in web front-end, or landing pages.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo/iam.png" sizes="any" />
      </head>
      <body>
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  );
}
