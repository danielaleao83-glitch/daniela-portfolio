import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {

  title:
    "Daniela Leão | Desenvolvedora Full Stack",

  description:
    "Portfólio profissional de Daniela Leão. Desenvolvedora Full Stack especializada em Next.js, React, TypeScript, Laravel, PHP, Inteligência Artificial e sistemas web.",


  keywords: [
    "Daniela Leão",
    "Desenvolvedora Full Stack",
    "Next.js",
    "React",
    "TypeScript",
    "Laravel",
    "PHP",
    "Inteligência Artificial",
    "Prontuário Eletrônico",
    "eSUS APS",
  ],


  authors: [
    {
      name: "Daniela Leão",
    },
  ],


  creator:
    "Daniela Leão",


  openGraph: {

    title:
      "Daniela Leão | Desenvolvedora Full Stack",

    description:
      "Portfólio profissional com projetos em desenvolvimento web, sistemas e inteligência artificial.",

    type:
      "website",

    locale:
      "pt_BR",

  },


  twitter: {

    card:
      "summary_large_image",

    title:
      "Daniela Leão | Desenvolvedora Full Stack",

    description:
      "Desenvolvimento web, sistemas inteligentes e soluções digitais.",

  },


};



export default function RootLayout({

  children,

}: Readonly<{

  children: React.ReactNode;

}>) {


  return (

    <html lang="pt-BR">


      <body

        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          antialiased
        `}

      >

        {children}


      </body>


    </html>

  );

}