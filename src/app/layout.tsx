import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Blog",
  description: "Simple blog website create by nextjs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={` flex flex-col min-h-screen bg-gray-100 ${inter.className}`}
      >
        <Header />
        <div className="container mx-auto grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
