import { InfiniteTextMarquee } from "@/components/ui/infinite-text-marquee";

const marqueeText =
  "SITES PROFISSIONAIS ✦ APPS WEB ✦ UI/UX DESIGN ✦ ENTREGA RÁPIDA ✦ NEGÓCIOS LOCAIS ✦ RECIFE/PE ✦";

export default function Marquee() {
  return (
    <section aria-label="Faixa de serviços" className="marquee-shell">
      <InfiniteTextMarquee
        text={marqueeText}
        speed={20}
        showTooltip={false}
        fontSize="2rem"
        textColor="var(--text-primary)"
        hoverColor="var(--accent-hover)"
        className="px-4"
        textClassName="font-display py-5 uppercase leading-none tracking-[0.12em] md:py-6"
      />
    </section>
  );
}
