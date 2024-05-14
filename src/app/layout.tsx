import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/footer/Footer";

interface CustomMetadata extends Metadata {
  image?: string;
}

export const metadata: CustomMetadata = {
  title: "KYRIZKYP - Front-End Web Developer",
  description:
    "Introducing me Rizky Putra, a Front-End Web Developer, specialist and precision in creating websites or what is usually called landing pages.",
  image: "/logo/iam.png",
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
        <meta property="og:image" content={metadata.image} />
      </head>
      <body>
        <Navbar />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
