import type { Metadata } from "next";
import { Geist, Geist_Mono, Nunito_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Providers from "./providers";


const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["300", "600", "800"]
});

export const metadata: Metadata = {
  title: "REST Countries API",
  description: "with color theme switcher",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <html className="dark" lang="en">
        <body
          className={`${nunitoSans.variable} antialiased bg-(--light_mode_background) dark:bg-(--dark_mode_background) text-(--light_mode_text) dark:text-(--dark_mode_text)`}
        >
          <Providers>
            <NavBar/>
            <div suppressHydrationWarning className="bg-(--light_mode_background) dark:bg-(--dark_mode_background) text-(--light_mode_text) dark:text-(--dark_mode_text)">
              {children}
            </div>
            
          </Providers>
        </body>
      </html>
    
  );
}
