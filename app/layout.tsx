import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "noodledragon.studio";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? "https";
  const baseUrl = new URL(`${protocol}://${host}`);

  return {
    metadataBase: baseUrl,
    title: "Noodle Dragon Studio | Mobile Games Made in New Zealand",
    description:
      "Noodle Dragon Studio is an independent New Zealand game studio creating colourful, characterful mobile games.",
    icons: {
      icon: "/brand/logo-square.png",
      shortcut: "/brand/logo-square.png",
      apple: "/brand/logo-square.png",
    },
    openGraph: {
      title: "Noodle Dragon Studio",
      description: "Little games. Big personality. Made in Aotearoa New Zealand.",
      type: "website",
      images: [
        {
          url: "/og.png",
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
      images: ["/og.png"],
    },
  };
}

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
