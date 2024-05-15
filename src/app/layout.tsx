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
      <body className="relative">
        <Navbar />
        <div>{children}</div>
        <div className="absolute -rotate-90 bottom-10 lg:bottom-5 -right-16 md:-right-20 xl:-right-24 2xl:-right-0">
          <Footer />
        </div>
      </body>
    </html>
  );
}
