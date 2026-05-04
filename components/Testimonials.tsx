import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SpotlightPanel from "@/components/ui/SpotlightPanel";

const featuredTestimonial = {
  quote:
    "Nunca pensei que teria um site tão profissional. Diego entregou antes do prazo e superou tudo o que pedi. Hoje meus clientes encontram o salão no Google e chegam muito mais preparados para agendar.",
  name: "Ana Paula",
  company: "BeautyFlow",
  segment: "Salão de beleza",
  avatarSrc: "/testimonials/contact-1.jpg",
  avatarAlt: "Foto de perfil genérica da cliente Ana Paula",
};

const trustHighlights = [
  {
    value: "20+",
    label: "projetos entregues",
  },
  {
    value: "100%",
    label: "satisfação no atendimento",
  },
  {
    value: "15 dias",
    label: "prazo médio de entrega",
  },
] as const;

const testimonialCards = [
  {
    quote:
      "Minha clínica agora aparece no Google. Os agendamentos aumentaram muito.",
    name: "Dr. Carlos",
    company: "Clínica Saúde+",
    segment: "Clínica",
    avatarSrc: "/testimonials/contact-2.jpg",
    avatarAlt: "Foto de perfil genérica do cliente Dr. Carlos",
  },
  {
    quote:
      "Processo transparente, sem surpresa no preço. Recomendo muito.",
    name: "Marcos",
    company: "Barbearia Estilo",
    segment: "Barbearia",
    avatarSrc: "/testimonials/contact-4.jpg",
    avatarAlt: "Foto de perfil genérica do cliente Marcos",
  },
  {
    quote:
      "Atendimento rápido e um site que já virou minha principal vitrine online.",
    name: "Larissa",
    company: "Bistrô da Rua",
    segment: "Restaurante",
    avatarSrc: "/testimonials/contact-5.jpg",
    avatarAlt: "Foto de perfil genérica da cliente Larissa",
  },
] as const;

export default function Testimonials() {
  return (
    <section className="section-space bg-[linear-gradient(180deg,rgba(26,26,26,0.12)_0%,rgba(10,10,10,0)_22%,rgba(26,26,26,0.3)_100%)]">
      <div className="container-shell">
        <Reveal className="max-w-5xl">
          <span className="section-kicker">Depoimentos</span>
          <h2 className="section-title mt-5">
            O que dizem quem já <span className="ink-highlight">trabalhou</span>{" "}
            comigo
          </h2>
          <p className="eyebrow-copy mt-5 max-w-2xl text-base md:text-lg">
            Quem chega pelo Instagram precisa sentir confiança rápido. Esses
            relatos mostram como um site bem feito ajuda a vender, organizar o
            atendimento e passar mais credibilidade.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,1.45fr)_minmax(320px,0.9fr)]">
          <Reveal className="lg:min-h-[620px]">
            <SpotlightPanel
              className="surface-card h-full rounded-[28px] bg-[linear-gradient(180deg,rgba(123,47,190,0.16)_0%,rgba(17,17,17,0.98)_26%,rgba(17,17,17,1)_100%)]"
              glowClassName="h-72 w-72"
            >
              <article className="relative flex h-full flex-col overflow-hidden p-8 md:p-10">
                {/* TODO: Trocar os depoimentos placeholder por relatos reais dos clientes. */}
                <div
                  aria-hidden="true"
                  className="absolute -right-16 top-12 h-40 w-40 rounded-full bg-[rgba(123,47,190,0.16)] blur-3xl"
                />
                <div
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-px w-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent)]"
                />

                <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                  <div>
                    <span className="inline-flex items-center rounded-full border border-[var(--accent-primary)]/30 bg-[var(--accent-primary)]/10 px-4 py-2 text-[10px] font-accent font-semibold uppercase tracking-[0.28em] text-[var(--accent-hover)]">
                      Caso em destaque
                    </span>

                    <div className="mt-5 flex items-center gap-4">
                      <div className="relative h-20 w-20 overflow-hidden rounded-[26px] border border-white/10 bg-[rgba(123,47,190,0.14)]">
                        <Image
                          src={featuredTestimonial.avatarSrc}
                          alt={featuredTestimonial.avatarAlt}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </div>

                      <div>
                        <div className="flex items-center gap-3">
                          <StarRow />
                          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-accent font-semibold uppercase tracking-[0.24em] text-white/70">
                            feedback real
                          </span>
                        </div>
                        <p className="mt-4 font-accent text-2xl font-semibold text-white">
                          {featuredTestimonial.name}
                        </p>
                        <p className="mt-2 text-sm uppercase tracking-[0.22em] text-[var(--text-secondary)]">
                          {featuredTestimonial.company} ·{" "}
                          {featuredTestimonial.segment}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="self-start rounded-[22px] border border-white/10 bg-white/[0.03] px-5 py-4 backdrop-blur">
                    <p className="font-display text-[54px] leading-none text-[var(--accent-primary)]">
                      “
                    </p>
                    <p className="mt-2 max-w-[160px] text-sm leading-6 text-[var(--text-secondary)]">
                      Experiência clara, entrega rápida e resultado percebido no
                      dia a dia.
                    </p>
                  </div>
                </div>

                <p className="mt-10 max-w-4xl font-accent text-[24px] font-medium leading-[1.55] text-white md:text-[30px]">
                  {featuredTestimonial.quote}
                </p>

                <div className="mt-10 grid gap-3 sm:grid-cols-3">
                  {trustHighlights.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-[22px] border border-white/10 bg-white/[0.03] px-5 py-5"
                    >
                      <p className="font-display text-[38px] leading-none text-white">
                        {item.value}
                      </p>
                      <p className="mt-3 text-[11px] font-accent font-semibold uppercase tracking-[0.22em] text-[var(--text-secondary)]">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            </SpotlightPanel>
          </Reveal>

          <div className="grid gap-6">
            <Reveal>
              <SpotlightPanel className="surface-card rounded-[24px] bg-[rgba(17,17,17,0.92)]">
                <article className="relative overflow-hidden p-7">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(123,47,190,0.8),transparent)]"
                  />

                  <p className="font-accent text-[10px] font-semibold uppercase tracking-[0.3em] text-white/55">
                    Confiança que aparece
                  </p>
                  <h3 className="mt-4 font-accent text-[30px] font-semibold leading-tight text-white">
                    Design forte, comunicação clara e contato direto no
                    WhatsApp.
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
                    Uma boa landing precisa parecer profissional antes mesmo do
                    primeiro clique no botão de contato.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-accent font-semibold uppercase tracking-[0.24em] text-white/75">
                      sem enrolação
                    </span>
                    <span className="rounded-full border border-[var(--accent-primary)]/35 bg-[var(--accent-primary)]/10 px-4 py-2 text-[10px] font-accent font-semibold uppercase tracking-[0.24em] text-[var(--accent-hover)]">
                      foco em conversão
                    </span>
                  </div>
                </article>
              </SpotlightPanel>
            </Reveal>

            {testimonialCards.map((testimonial, index) => (
              <Reveal
                key={`${testimonial.name}-${testimonial.company}`}
                delay={index * 0.08}
              >
                <SpotlightPanel className="surface-card h-full rounded-[24px] bg-[rgba(17,17,17,0.94)]">
                  <article className="flex h-full flex-col p-6">
                    <div className="flex items-start justify-between gap-4">
                      <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-accent font-semibold uppercase tracking-[0.24em] text-white/75">
                        {testimonial.segment}
                      </span>
                      <StarRow compact />
                    </div>

                    <p className="mt-5 font-accent text-xl font-medium leading-8 text-white">
                      “{testimonial.quote}”
                    </p>

                    <div className="mt-auto pt-6">
                      <div className="h-px w-full bg-white/8" />

                      <div className="mt-5 flex items-center gap-4">
                        <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/10 bg-[var(--accent-primary)]/14">
                          <Image
                            src={testimonial.avatarSrc}
                            alt={testimonial.avatarAlt}
                            fill
                            sizes="48px"
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-accent text-base font-semibold text-white">
                            {testimonial.name}
                          </p>
                          <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-[var(--text-secondary)]">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                </SpotlightPanel>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StarRow({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`flex items-center ${compact ? "gap-1" : "gap-1.5"}`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          aria-hidden="true"
          viewBox="0 0 24 24"
          className={compact ? "h-3.5 w-3.5" : "h-4 w-4"}
          fill="currentColor"
        >
          <path
            d="M12 2.9L14.65 8.28L20.58 9.14L16.29 13.33L17.3 19.24L12 16.45L6.7 19.24L7.71 13.33L3.42 9.14L9.35 8.28L12 2.9Z"
            className="text-[var(--accent-primary)]"
          />
        </svg>
      ))}
    </div>
  );
}
