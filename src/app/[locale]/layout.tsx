
import {ReactNode} from "react";

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Navbar from "@/components/Navbar";
import Categories from "@/components/Categories";
import Footer from "@/components/Footer";
import "@/app/globals.css";
export default async function LocaleLayout({
  children,
  locale
}: {
  children: ReactNode;
  locale: string;
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
        
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />
            <main className="flex-grow">
                <div className="container mx-auto">
                    <Categories />
                    {children}
                </div>

            </main>

            <Footer />
        </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

