import type { Metadata } from "next";
import localFont from "@next/font/local";
import "./globals.css";

const shabnam = localFont({
  src: "../../public/fonts/Shabnam.woff2",
});

export const metadata: Metadata = {
  title: "مدیریت بودجه 💹",
  description: "ساخته شده توسط سجاد برای هدی ❤️",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className={shabnam.className}>
        <div className="h-screen w-full flex flex-col">
          <header className="flex items-center justify-center p-4 bg-white border-b-2">
            <h1 className="font-semibold text-2xl text-center">مدیریت بودجه</h1>
          </header>
          <main className="flex-1 overflow-y-auto p-4 bg-gray-100">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
