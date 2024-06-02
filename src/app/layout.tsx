import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/utils/provider";

import React, { ReactNode } from "react";

import NavBar from "@/components/navbar/Nav";
import { Footer } from "@/components/footer/Footer";
import { HomePage } from "@/components/home";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abrir Mei™",
  description: "Abertura de CNPJ MEI online ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <html lang="pt-BR">
        <body className={inter.className}>
          <header>
            <NavBar />
          </header>

          <Providers>{children}</Providers>
        </body>

        <footer>
          <Footer />
        </footer>
      </html>
    </>
  );
}
