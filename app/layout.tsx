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
  metadataBase: new URL("https://www.odaliscaseventos.com"),

  title: {
    default:
      "Odaliscas Eventos | Shows Árabes, Música en Vivo y Producción Artística",
    template: "%s | Odaliscas Eventos",
  },

  description:
    "Shows árabes, bailarinas, música árabe en vivo y producción artística para eventos privados, casamientos, hoteles, restaurantes y eventos corporativos.",

  keywords: [
    "odaliscas eventos",
    "shows árabes",
    "bailarinas árabes para eventos",
    "danza del vientre para eventos",
    "música árabe en vivo",
    "músicos árabes",
    "orquestas árabes",
    "producción artística",
    "entretenimiento para eventos",
    "shows para casamientos",
    "eventos corporativos",
    "Buenos Aires",
    "Argentina",
  ],

  alternates: {
    canonical: "/",
    languages: {
      "es-AR": "/",
      en: "/en",
    },
  },

  openGraph: {
    type: "website",
    locale: "es_AR",
    alternateLocale: "en_US",
    url: "https://www.odaliscaseventos.com",
    siteName: "Odaliscas Eventos",
    title:
      "Odaliscas Eventos | Shows Árabes, Música en Vivo y Producción Artística",
    description:
      "Experiencias y producciones artísticas para eventos con bailarinas, músicos y música árabe en vivo.",
    images: [
      {
        url: "/images/hero/hero-web.jpg",
        width: 1200,
        height: 630,
        alt: "Odaliscas Eventos - Shows árabes y producción artística para eventos",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Odaliscas Eventos | Shows Árabes y Producción Artística",
    description:
      "Bailarinas, música árabe en vivo y propuestas artísticas para eventos y celebraciones especiales.",
    images: ["/images/hero/hero-web.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  authors: [
    {
      name: "Odaliscas Eventos",
    },
  ],

  creator: "Odaliscas Eventos",
  publisher: "Odaliscas Eventos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}