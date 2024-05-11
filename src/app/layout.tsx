import Head from "next/head";
import "./globals.css";
import Navbar from "./components/navigation/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>KYRIZKYP - Front-End Web Developer</title>
        <meta
          name="description"
          content="Introducing me Rizky Putra, a Front-End Web Developer, specialist and precision in creating websites or what is usually called landing pages."
        />
        <link rel="icon" href="/logo/iam.png" sizes="any" />
      </Head>
      <body>
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  );
}
