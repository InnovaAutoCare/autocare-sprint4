import type { Metadata } from "next";
import { Inter, Roboto} from "next/font/google";

import  { Header }from "@/components/header/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ weight: "400", subsets: ["latin"] });
const robotoMedium = Roboto({ weight: "500", subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Autocare",
  description: "Uma nova maneira de diagnosticar",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.className} ${roboto.className} ${robotoMedium.className} antialiased`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
