import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
    "odaliscas",
    "odaliscas para eventos",
    "odaliscas Buenos Aires",
    "odaliscas Argentina",
    "odaliscas show",
    "odaliscas shows",
    "odalisca",
    "odalisca para eventos",
    "odalisca show",
    "show de odaliscas",
    "shows de odaliscas",
    "shows árabes",
    "show árabe para eventos",
    "show árabe Buenos Aires",
    "bailarinas árabes",
    "bailarinas árabes para eventos",
    "bailarina árabe para eventos",
    "danza árabe para eventos",
    "danza del vientre para eventos",
    "bailarina de danza del vientre",
    "música árabe en vivo",
    "música árabe para eventos",
    "músicos árabes",
    "músicos árabes para eventos",
    "orquestas árabes",
    "orquesta árabe para eventos",
    "percusión árabe",
    "recepción árabe",
    "recepción artística",
    "producción artística",
    "producción artística para eventos",
    "entretenimiento para eventos",
    "shows para casamientos",
    "show árabe para casamientos",
    "eventos corporativos",
    "shows para hoteles",
    "shows para restaurantes",
    "Buenos Aires",
    "CABA",
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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Odaliscas Eventos",
  url: "https://www.odaliscaseventos.com",
  logo: "https://www.odaliscaseventos.com/logo.png",
  image:
    "https://www.odaliscaseventos.com/images/hero/hero-web.jpg",
  description:
    "Producción de experiencias y shows árabes premium, música árabe en vivo y propuestas artísticas para eventos privados, hoteles, restaurantes y eventos corporativos.",
  email: "info.odaliscaseventos@gmail.com",
  telephone: "+54 11 6272 1696",
  sameAs: [
    "https://www.instagram.com/odaliscas.eventos/",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Buenos Aires",
    addressRegion: "Ciudad Autónoma de Buenos Aires",
    addressCountry: "AR",
  },
  areaServed: [
    {
      "@type": "Country",
      name: "Argentina",
    },
    {
      "@type": "Place",
      name: "Worldwide",
    },
  ],
  knowsAbout: [
    "Shows árabes",
    "Danza árabe",
    "Danza del vientre",
    "Música árabe en vivo",
    "Percusión árabe",
    "Producción artística",
    "Entretenimiento para eventos",
    "Experiencias para hoteles y restaurantes",
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Shows Árabes y Producción Artística para Eventos",
  provider: {
    "@type": "Organization",
    name: "Odaliscas Eventos",
    url: "https://www.odaliscaseventos.com",
  },
  description:
    "Shows de danza árabe, bailarinas, músicos, orquestas árabes en vivo y producciones artísticas personalizadas para eventos privados, casamientos, hoteles, restaurantes y eventos corporativos.",
  areaServed: {
    "@type": "Place",
    name: "Argentina y proyectos internacionales",
  },
  serviceType: [
    "Shows árabes",
    "Danza del vientre para eventos",
    "Música árabe en vivo",
    "Recepciones artísticas",
    "Producción artística para eventos",
    "Experiencias para hoteles y restaurantes",
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema),
          }}
        />

        {children}
        <Analytics />
      </body>
    </html>
  );
}