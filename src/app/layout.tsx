import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navigation/Navbar";

export const metadata: Metadata = {
  title: "KYRIZKYP",
  description:
    "Introducing me Rizky Putra, a Front-End Web Developer, specialist and precision in creating websites or what is usually called landing pages.",
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
