import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Problem = dynamic(() => import("@/components/Problem"), {
  loading: () => <SectionFallback className="h-[340px]" />,
});

const Projects = dynamic(() => import("@/components/Projects"), {
  loading: () => <SectionFallback className="h-[520px]" />,
});

const HowItWorks = dynamic(() => import("@/components/HowItWorks"), {
  loading: () => <SectionFallback className="h-[440px]" />,
});

const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  loading: () => <SectionFallback className="h-[420px]" />,
});

const CTAFinal = dynamic(() => import("@/components/CTAFinal"), {
  loading: () => <SectionFallback className="h-[320px]" />,
});

const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <SectionFallback className="h-[120px]" />,
});

const defaultWhatsAppNumber = "5581992388506";
const invalidWhatsAppNumbers = new Set(["5581999999999"]);
const prefilledMessage = encodeURIComponent(
  "Oi, Diego! Vim pelo Instagram e quero um site para o meu negócio."
);

function SectionFallback({ className }: { className?: string }) {
  return (
    <section className="section-space">
      <div className="container-shell">
        <div className={`surface-card animate-pulse ${className ?? "h-64"}`} />
      </div>
    </section>
  );
}

function getWhatsAppNumber(rawValue?: string) {
  const normalizedWhatsAppNumber = rawValue?.replace(/\D/g, "") ?? "";

  return normalizedWhatsAppNumber.length >= 12 &&
    !invalidWhatsAppNumbers.has(normalizedWhatsAppNumber)
    ? normalizedWhatsAppNumber
    : defaultWhatsAppNumber;
}

export default function Home() {
  const whatsappNumber = getWhatsAppNumber(
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${prefilledMessage}`;

  return (
    <main className="relative overflow-x-clip bg-[var(--bg-primary)]">
      <Navbar whatsappUrl={whatsappUrl} />
      <Hero whatsappUrl={whatsappUrl} />
      <Marquee />
      <Problem />
      <Projects />
      <HowItWorks />
      <Testimonials />
      <CTAFinal whatsappUrl={whatsappUrl} />
      <Footer />
      <WhatsAppFloat whatsappUrl={whatsappUrl} />
    </main>
  );
}
