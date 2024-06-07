import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/utils/provider";

import React, { ReactNode } from "react";

import NavBar from "@/components/navbar/Nav";
import { Footer } from "@/components/footer/Footer";
import { HomePage } from "@/components/home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <html lang="pt-BR" className={inter.className}>
        <body className="bg-white text-base ">
          <Providers>
            <NavBar /> 
            {children}
            <ToastContainer />
            <Footer />
            </Providers>
        </body>
      </html>
    </>
  );
}
