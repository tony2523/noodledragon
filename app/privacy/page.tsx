import type { Metadata } from "next";
import { SiteApp } from "../page";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Privacy | Noodle Dragon Studio",
  description:
    "How Noodle Dragon Studio handles personal information across our website, apps and games.",
};

export default function PrivacyPage() {
  return <SiteApp initialPrivacy />;
}
