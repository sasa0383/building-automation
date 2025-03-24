// This file is the main layout of the application. It wraps the entire application with the necessary providers and context.


import { DataProvider } from "@/context";
import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

import { Inter } from "next/font/google";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "TwinStruct-digital twin building",
  description: "TwinStruct-digital twin building",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

const toastContainerOptions = {
  position: "top-right" as const,
  autoClose: 5000,
  hideProgressBar: false,
  newestOnTop: false,
  closeOnClick: true,
  rtl: false,
  pauseOnFocusLoss: true,
  draggable: true,
  pauseOnHover: true,
  theme: "light",
  transition: Slide,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <NextUIProvider>
          <NextThemesProvider defaultTheme="dark" attribute="class">
            <DataProvider>
              <ToastContainer {...toastContainerOptions} />
              {children}
            </DataProvider>
          </NextThemesProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
