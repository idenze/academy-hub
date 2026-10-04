import { createFileRoute } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight, BookOpenText, LibraryBig, Languages, ShoppingBag } from "lucide-react";
import { AcademyShell } from "@/components/academy-shell";
import { PageIntro } from "@/components/academy-ui";

export const Route = createFileRoute("/resources")({
  head: () => ({ meta: [
    { title: "Resources — Ozikoro Academy" },
    { name: "description", content: "Academic tools, the Ozikoro archive and shop." },
    { property: "og:title", content: "Resources — Ozikoro Academy" },
    { property: "og:description", content: "Dictionary, script, archive and shop resources." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: ResourcesPage,
});

function ResourcesPage() {
  const resources: { icon: LucideIcon; title: string; description: string; url: string }[] = [
    { icon: Languages, title: "Ozituma Dictionary", description: "Search Igbo words, meanings, usage and related entries.", url: "https://ozituma.com" },
    { icon: BookOpenText, title: "Ńdébé Script", description: "Study the independent reference for the Ńdébé writing system.", url: "https://ndebe.org" },
    { icon: ShoppingBag, title: "Ozikoro Shop", description: "Shop books, learning materials and cultural products from Ozikoro.", url: "https://shop.ozikoro.com" },
    { icon: LibraryBig, title: "Ozikoro Archive", description: "Explore histories, documents, photographs and cultural research.", url: "https://ozikoro.com" },
  ];

  return <AcademyShell>
    <PageIntro eyebrow="Specialist resources" title="The right tool for deeper study." description="Academy connects you to Ozikoro’s independent reference projects without duplicating them." />
    <section className="section-pad"><div className="site-wrap grid gap-5 md:grid-cols-2">
      {resources.map(({ icon: Icon, title, description, url }) => <a href={url} className="resource-card" key={title}>
        <Icon /><div><h2>{title}</h2><p>{description}</p><span>Open resource <ArrowUpRight /></span></div>
      </a>)}
    </div></section>
  </AcademyShell>;
}
