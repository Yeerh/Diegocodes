import AnimatedGradientBackground from "@/components/ui/animated-gradient-background";
import Reveal from "@/components/ui/Reveal";
import ScrollLink from "@/components/ui/ScrollLink";
import StarDecor from "@/components/ui/StarDecor";

type HeroProps = {
  whatsappUrl: string;
};

const proofAvatars = ["DG", "RM", "NV"];

export default function Hero({ whatsappUrl }: HeroProps) {
  return (
    <section
      id="topo"
      className="section-space relative overflow-hidden pt-32 md:pt-36"
    >
      <AnimatedGradientBackground
        startingGap={118}
        Breathing
        animationSpeed={0.035}
        breathingRange={6}
        topOffset={8}
        gradientColors={[
          "rgba(10,10,10,1)",
          "rgba(17,17,17,0.98)",
          "rgba(45,27,105,0.88)",
          "rgba(123,47,190,0.78)",
          "rgba(155,77,202,0.48)",
          "rgba(123,47,190,0.16)",
          "rgba(10,10,10,0)",
        ]}
        gradientStops={[22, 42, 58, 70, 82, 92, 100]}
        containerClassName="pointer-events-none opacity-95"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.28)_0%,rgba(10,10,10,0.12)_32%,rgba(10,10,10,0.78)_100%)]"
      />
      <div
        aria-hidden="true"
        className="ghost-grid absolute inset-0 opacity-[0.08]"
      />

      <div className="container-shell relative z-10">
        <div className="relative max-w-5xl">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 top-8 h-72 w-72 rounded-full bg-[var(--accent-primary)]/12 blur-3xl"
          />

          <StarDecor
            className="hero-float absolute -left-2 top-10 hidden lg:block"
            color="#FFFFFF"
            size={18}
          />
          <StarDecor
            className="hero-float-delay absolute right-10 top-4 hidden lg:block"
            color="#7B2FBE"
            size={20}
          />
          <span className="absolute right-8 top-24 hidden font-display text-4xl text-white/10 lg:block">
            {`{ }`}
          </span>

          <Reveal className="max-w-4xl">
            <span className="section-kicker">Desenvolvedor Web · Recife/PE</span>
            <h1 className="display-title mt-6">
              <span className="block">Seu negócio</span>
              <span className="mt-2 block">
                <span className="ink-highlight hero-highlight">
                  <span className="relative z-10">merece um site</span>
                </span>
              </span>
              <span className="mt-2 block">que vende</span>
            </h1>
          </Reveal>

          <Reveal className="mt-8 max-w-3xl" delay={0.08}>
            <p className="eyebrow-copy">
              Crio sites e apps para negócios locais que aparecem no Google,
              transmitem confiança e transformam visitas em clientes reais.
            </p>
          </Reveal>

          <Reveal
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
            delay={0.14}
          >
            <div className="flex -space-x-3">
              {proofAvatars.map((avatar, index) => (
                <div
                  key={avatar}
                  className={`flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border-subtle)] font-accent text-xs font-semibold uppercase ${
                    index === 1
                      ? "bg-[var(--accent-primary)]"
                      : "bg-[var(--bg-surface)]"
                  }`}
                >
                  {avatar}
                </div>
              ))}
            </div>
            <p className="font-accent text-sm font-medium uppercase tracking-[0.18em] text-[var(--text-secondary)]">
              20+ projetos entregues · 100% de satisfação
            </p>
          </Reveal>

          <Reveal
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            delay={0.2}
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Abrir conversa no WhatsApp para pedir orçamento"
              className="button-primary group"
            >
              <span>Quero meu site</span>
              <span className="flex h-7 w-12 items-center rounded-full bg-white/14 p-1">
                <span className="h-5 w-5 rounded-full bg-white transition-transform duration-300 group-hover:translate-x-5" />
              </span>
            </a>

            <ScrollLink
              href="#projetos"
              ariaLabel="Ir para a seção de projetos"
              className="button-secondary"
            >
              Ver projetos
            </ScrollLink>
          </Reveal>

          <Reveal className="mt-5" delay={0.26}>
            <p className="font-accent text-sm font-medium uppercase tracking-[0.18em] text-white/50">
              Resposta em até 24h · acompanhamento direto pelo WhatsApp
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
