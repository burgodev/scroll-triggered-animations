import "./globals.css";
import { Body } from "./components/Body";
import { Header } from "./components/Header";
import { Footer } from "./components";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Body>
        <Header />
        <main className="flex min-h-screen flex-col items-center justify-between p-2 sm:p-6 md:p-8 lg:p-10 xl:p-12 pb-[320px]">
          {children}
        </main>
        <Footer />
      </Body>
    </html>
  );
}
