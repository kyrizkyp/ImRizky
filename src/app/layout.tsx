import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/footer/Footer";

interface CustomMetadata extends Metadata {
  image: string;
  title: string;
  description: string;
}

export const metadata: CustomMetadata = {
  title: "KYRIZKYP - Creativity Everything",
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
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <meta
          property="og:url"
          content="https://kyrizkyp.vercel.app/logo/iam.png"
        />
        <meta property="og:type" content="website" />
      </head>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
