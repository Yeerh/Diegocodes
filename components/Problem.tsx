import Reveal from "@/components/ui/Reveal";
import SpotlightPanel from "@/components/ui/SpotlightPanel";

const painPoints = [
  {
    title: "Invisível no Google",
    description:
      "Seu concorrente aparece. Você não. Todo dia, clientes pesquisam e encontram outra empresa no seu lugar.",
    badge: "Busca local",
    action: "Aparecer primeiro",
    icon: <GoogleIcon />,
  },
  {
    title: "Instagram tem limite",
    description:
      "Rede social não substitui site. Sem um endereço próprio, seu negócio depende de uma plataforma que você não controla.",
    badge: "Perfil social",
    action: "Ter presença própria",
    icon: <InstagramIcon />,
  },
  {
    title: "Sem confiança, sem venda",
    description:
      "Antes de comprar, o cliente pesquisa. Um site profissional transmite credibilidade e acelera a decisão.",
    badge: "Credibilidade",
    action: "Vender com confiança",
    icon: <ShieldCheckIcon />,
  },
] as const;

export default function Problem() {
  return (
    <section className="section-space">
      <div className="container-shell">
        <Reveal className="max-w-4xl">
          <span className="section-kicker">O problema</span>
          <h2 className="section-title mt-5">
            Seu negócio existe. Mas o cliente não te acha.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {painPoints.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <SpotlightPanel className="surface-card h-full rounded-[24px] bg-[rgba(17,17,17,0.92)]">
                <article className="relative flex min-h-[320px] flex-col overflow-hidden p-8">
                  <div
                    className={`absolute inset-x-0 top-0 h-1 ${
                      index === 1
                        ? "bg-[linear-gradient(90deg,#7B2FBE,#9B4DCA)]"
                        : "bg-[linear-gradient(90deg,rgba(123,47,190,0.8),transparent)]"
                    }`}
                  />

                  <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-[rgba(123,47,190,0.14)] text-[var(--accent-primary)]">
                      {item.icon}
                    </div>
                    <span className="font-accent text-[10px] uppercase tracking-[0.3em] text-white/35">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="mt-8 flex-1">
                    <h3 className="font-accent text-[30px] font-semibold leading-tight text-white">
                      {item.title}
                    </h3>
                    <p className="mt-5 text-base leading-8 text-[var(--text-secondary)]">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-white/8 pt-5">
                    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-accent font-semibold uppercase tracking-[0.24em] text-white/75">
                      {item.badge}
                    </span>
                    <span className="inline-flex items-center rounded-full border border-[var(--accent-primary)]/40 bg-[var(--accent-primary)]/10 px-4 py-2 text-[10px] font-accent font-semibold uppercase tracking-[0.24em] text-[var(--accent-primary)]">
                      {item.action}
                    </span>
                  </div>
                </article>
              </SpotlightPanel>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function GoogleIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-7 w-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <circle cx="11" cy="11" r="6.5" />
      <path d="M20 20L16.3 16.3" strokeLinecap="round" />
      <path d="M8.8 11H13.2" strokeLinecap="round" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-7 w-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="4" y="4" width="16" height="16" rx="5" />
      <circle cx="12" cy="12" r="3.4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ShieldCheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-7 w-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path
        d="M12 3L18 5.5V10.4C18 14.5 15.4 18.2 12 19.8C8.6 18.2 6 14.5 6 10.4V5.5L12 3Z"
        strokeLinejoin="round"
      />
      <path
        d="M9.4 11.8L11.1 13.5L14.8 9.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
