import type { Metadata } from "next";
import localFont from "@next/font/local";
import "./globals.css";

const shabnam = localFont({
  src: "../../public/fonts/shabnam.woff2",
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
        <div className="h-screen w-full flex flex-col bg-gradient-to-r from-green-200 to-teal-300">
          <header className="flex items-center justify-center p-4 bg-gradient-to-r from-teal-300 to-green-200">
            <h1 className="font-semibold text-2xl text-center">مدیریت بودجه</h1>
          </header>
          {children}
        </div>
        <p className="text-center text-gray-500 text-xs">
          &copy; All rights reserved.
        </p>
      </body>
    </html>
  );
}
