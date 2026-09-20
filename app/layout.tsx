import type { Metadata } from "next";
import "./globals.css";

const basePath = import.meta.env.VITE_BASE_PATH ?? "";
const siteUrl = import.meta.env.VITE_SITE_URL ?? "https://noodledragon.studio";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Noodle Dragon Studio | macOS Apps, Mobile Apps & Games",
  description:
    "An independent New Zealand design and development studio making thoughtful macOS apps, mobile apps and mobile games. Serious craft. Playful spirit.",
  icons: {
    icon: `${basePath}/brand/logo-square.png`,
    shortcut: `${basePath}/brand/logo-square.png`,
    apple: `${basePath}/brand/logo-square.png`,
  },
  openGraph: {
    title: "Noodle Dragon Studio",
    description:
      "Thoughtful macOS apps, mobile apps and mobile games. Serious craft. Playful spirit. Made in Aotearoa New Zealand.",
    type: "website",
    images: [
      {
        url: "og.png",
        width: 1536,
        height: 1024,
        alt: "Noodle Dragon Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Noodle Dragon Studio",
    description:
      "Thoughtful macOS apps, mobile apps and mobile games. Serious craft. Playful spirit.",
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
