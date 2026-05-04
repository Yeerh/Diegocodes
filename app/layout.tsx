import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Inter, Space_Grotesk } from "next/font/google";
import "../styles/globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_PORTFOLIO_URL ?? "https://diegosilvaport.vercel.app";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Diego Codes | Sites que transformam visitas em clientes",
  description:
    "Landing pages, sites institucionais e apps web para negócios locais de Recife que querem aparecer no Google e vender mais.",
  applicationName: "diegocodes",
  authors: [{ name: "Diego", url: siteUrl }],
  keywords: [
    "desenvolvedor web Recife",
    "freelancer Recife",
    "site para clínica",
    "site para barbearia",
    "landing page restaurante",
    "Next.js Recife",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Diego Codes | Sites que transformam visitas em clientes",
    description:
      "Criação de sites e apps para negócios locais que precisam aparecer no Google e converter visitas em contatos no WhatsApp.",
    url: siteUrl,
    siteName: "diegocodes",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "diegocodes - sites que vendem para negócios locais",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diego Codes | Sites que transformam visitas em clientes",
    description:
      "Sites e apps web para negócios locais que precisam vender mais com presença digital forte.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0A0A",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`dark ${bebasNeue.variable} ${spaceGrotesk.variable} ${inter.variable} font-sans`}
    >
      <body className="bg-[var(--bg-primary)] font-sans text-white antialiased">
        {children}
      </body>
    </html>
  );
}
