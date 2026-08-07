import type { Metadata } from "next";
import "./globals.css";

const basePath = import.meta.env.VITE_BASE_PATH ?? "";
const siteUrl = import.meta.env.VITE_SITE_URL ?? "https://noodledragon.studio";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Noodle Dragon Studio | Mobile Games Made in New Zealand",
  description:
    "Noodle Dragon Studio is an independent New Zealand game studio creating colourful, characterful mobile games.",
  icons: {
    icon: `${basePath}/brand/logo-square.png`,
    shortcut: `${basePath}/brand/logo-square.png`,
    apple: `${basePath}/brand/logo-square.png`,
  },
  openGraph: {
    title: "Noodle Dragon Studio",
    description: "Little games. Big personality. Made in Aotearoa New Zealand.",
    type: "website",
    images: [
      {
        url: "og.png",
        width: 1536,
        height: 1024,
        alt: "Noodle Dragon Studio — little games, big personality",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Noodle Dragon Studio",
    description: "Little games. Big personality. Made in Aotearoa New Zealand.",
    images: ["og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
