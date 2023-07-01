import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GPT whatfa",
  description: "免费ChatGPT,free gpt",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh" data-theme="light">
      <head></head>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
