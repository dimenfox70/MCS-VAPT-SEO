import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { ServicesHighlight } from "@/components/landing/ServicesHighlight";
import { SeoAuditPanel } from "@/components/landing/SeoAuditPanel";
import { WhyChooseUs } from "@/components/landing/WhyChooseUs";
import { StatsBar } from "@/components/landing/StatsBar";
import { Trust } from "@/components/landing/Trust";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";
import { FloatingCTA } from "@/components/landing/FloatingCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MCS — VAPT & Free SEO Audit | Meit Cyber Solution" },
      { name: "description", content: "Professional VAPT and smart SEO audit solutions for modern businesses. Get a free instant SEO audit and book a security consultation with MCS." },
      { property: "og:title", content: "MCS — VAPT & Free SEO Audit | Meit Cyber Solution" },
      { property: "og:description", content: "Secure your digital presence before attackers find the weakness. Free SEO audit & enterprise VAPT services." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Meit Cyber Solution",
    url: "/",
    description: "VAPT and SEO audit services for modern businesses.",
    sameAs: [],
  };
  return (
    <div className="min-h-screen bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <Navbar />
      <main>
        <Hero />
        <ServicesHighlight />
        <SeoAuditPanel />
        <WhyChooseUs />
        <StatsBar />
        <Trust />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
      <Toaster richColors position="top-center" />
    </div>
  );
}
