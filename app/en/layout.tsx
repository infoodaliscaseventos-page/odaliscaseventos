import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.odaliscaseventos.com"),

  title:
    "Arabic Entertainment, Live Music & Artistic Production for Events",

  description:
    "Arabic entertainment, live music, dancers and artistic production for private events, weddings, corporate events, hotels, restaurants and special celebrations.",

  alternates: {
    canonical: "/en",
    languages: {
      "es-AR": "/",
      en: "/en",
    },
  },

  openGraph: {
    title:
      "Arabic Entertainment, Live Music & Artistic Production | Odaliscas Eventos",

    description:
      "Arabic dancers, live musicians and artistic productions designed for weddings, private events, corporate events, hotels, restaurants and special celebrations.",

    url: "https://www.odaliscaseventos.com/en",

    siteName: "Odaliscas Eventos",

    locale: "en_US",

    alternateLocale: "es_AR",

    type: "website",

    images: [
      {
        url: "/images/hero/hero-web.jpg",
        width: 1200,
        height: 630,
        alt: "Odaliscas Eventos - Arabic entertainment, live music and artistic production",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Arabic Entertainment, Live Music & Artistic Production",

    description:
      "Arabic dancers, live music and artistic productions for events, weddings, hotels and special celebrations.",

    images: ["/images/hero/hero-web.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function EnglishLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}