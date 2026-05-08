import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SpotlightPanel from "@/components/ui/SpotlightPanel";

const projects = [
  {
    name: "Cleyton Vieira",
    href: "https://cleytonvieira.vercel.app",
    category: "Personal trainer",
    description:
      "Landing page fitness focada em captar alunos, organizar anamnese e apresentar acompanhamento personalizado com clareza.",
    result:
      "Capta novos alunos com uma jornada direta de interesse, anamnese e contato",
    layoutClass: "lg:col-span-2",
    imageSrc: "/projects/cleyton-vieira-cover.png",
    imageAlt:
      "Prévia do projeto Cleyton Vieira com landing page fitness e personagem ilustrado.",
    imageClassName: "object-center",
  },
  {
    name: "Holanda Personal",
    href: "https://holandapersonal.vercel.app",
    category: "Personal trainer · Coach fitness",
    description:
      "Landing page premium para personal trainer com posicionamento forte, prova social e CTA direto para transformar visitas em conversas no WhatsApp.",
    result:
      "Oferta clara para vender consultoria, método e acompanhamento com mais autoridade",
    layoutClass: "",
    imageSrc: "/projects/holanda-personal-cover.png",
    imageAlt:
      "Prévia do projeto Holanda Personal com identidade preta e laranja.",
    imageClassName: "object-center",
  },
  {
    name: "RastroMoville",
    href: "https://rastromoville.vercel.app",
    category: "Gestão de frota",
    description:
      "Site de gestão de frota de caminhões com rastreamento em tempo real, análise de rotas e relatórios de desempenho.",
    result:
      "Painel completo para acompanhar frota, rotas e desempenho em tempo real",
    layoutClass: "lg:col-span-2",
    imageSrc: "/projects/rastromoville-cover.png",
    imageAlt:
      "Prévia do projeto RastroMoville com visão aérea de caminhões e containers.",
    imageClassName: "object-center",
  },
  {
    name: "NeuroPS",
    href: "https://neurops-tattooo.vercel.app",
    category: "Agenda e portfólio",
    description:
      "Plataforma de agendamento para tatuador com portfólio de trabalhos, gerenciamento de horários e comunicação com clientes.",
    result:
      "Portfólio forte com agenda organizada e contato direto com cada cliente",
    layoutClass: "",
    imageSrc: "/projects/neurops-cover.png",
    imageAlt:
      "Prévia do projeto NeuroPS Tattoo com layout escuro e destaque laranja.",
    imageClassName: "object-center",
  },
  {
    name: "Pernambuco Em Foco",
    href: "https://pernambucoemfoco.vercel.app",
    category: "Portal de conteúdo",
    description:
      "Site de blog de viagens para turistas de Pernambuco com conteúdo sobre destinos, dicas e experiências turísticas.",
    result:
      "Conteúdo estratégico para atrair turistas e destacar experiências locais",
    layoutClass: "",
    imageSrc: "/projects/pernambuco-em-foco-cover.png",
    imageAlt:
      "Prévia do projeto Pernambuco Em Foco com praia e identidade visual do portal.",
    imageClassName: "object-center",
  },
] as const;

export default function Projects() {
  return (
    <section
      id="projetos"
      className="section-space scroll-mt-28 bg-[rgba(17,17,17,0.35)]"
    >
      <div className="container-shell">
        <Reveal className="max-w-4xl">
          <span className="section-kicker">Projetos</span>
          <h2 className="section-title mt-5">
            Projetos que <span className="ink-highlight">entregam</span>{" "}
            resultado
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal
              key={project.name}
              delay={index * 0.08}
              className={project.layoutClass}
            >
              <SpotlightPanel className="surface-card group h-full rounded-[26px]">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Abrir projeto ${project.name} em nova aba`}
                  className="flex h-full flex-col overflow-hidden p-4 md:p-5"
                >
                  <div className="relative overflow-hidden rounded-[22px] border border-white/8 bg-black">
                    <div className="relative min-h-[250px] overflow-hidden">
                      <Image
                        src={project.imageSrc}
                        alt={project.imageAlt}
                        fill
                        sizes={
                          project.layoutClass
                            ? "(min-width: 1024px) 66vw, 100vw"
                            : "(min-width: 1024px) 33vw, 100vw"
                        }
                        className={`object-cover transition duration-700 group-hover:scale-[1.05] group-hover:-translate-y-1 ${project.imageClassName}`}
                      />

                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.16)_0%,rgba(10,10,10,0.22)_38%,rgba(10,10,10,0.84)_100%)]" />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(123,47,190,0.24),transparent_42%)] opacity-0 transition duration-500 group-hover:opacity-100" />

                      <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5">
                        <span className="rounded-full border border-white/12 bg-black/28 px-3 py-1 text-[10px] font-accent font-semibold uppercase tracking-[0.26em] text-white/80 backdrop-blur">
                          Projeto {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.14)] bg-black/28 px-3 py-2 text-[10px] font-accent font-semibold uppercase tracking-[0.22em] text-white/82 backdrop-blur">
                          <span className="h-2 w-2 rounded-full bg-[var(--success)]" />
                          Ao vivo
                        </span>
                      </div>

                      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                        <p className="font-display text-[44px] uppercase leading-none tracking-[0.04em] text-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.45)] md:text-[52px]">
                          {project.name}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col justify-between px-1 pb-2 pt-5">
                    <div>
                      <div className="flex items-center justify-between gap-4">
                        <p className="font-accent text-xs font-semibold uppercase tracking-[0.24em] text-[var(--text-secondary)]">
                          {project.category}
                        </p>
                        <p className="font-accent text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">
                          {project.href.replace("https://", "")}
                        </p>
                      </div>
                      <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
                        {project.description}
                      </p>
                      <h3 className="mt-5 font-accent text-2xl font-semibold leading-snug text-white">
                        {project.result}
                      </h3>
                    </div>

                    <div className="mt-8 flex items-center justify-between gap-4 border-t border-white/8 pt-5">
                      <span className="font-accent text-[11px] font-semibold uppercase tracking-[0.22em] text-white/52">
                        Ver projeto completo
                      </span>
                      <span className="inline-flex h-11 items-center justify-center rounded-full border border-[var(--accent-primary)]/35 bg-[var(--accent-primary)]/12 px-5 font-accent text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--accent-hover)] transition duration-300 group-hover:bg-[var(--accent-primary)] group-hover:text-white">
                        Abrir site →
                      </span>
                    </div>
                  </div>
                </a>
              </SpotlightPanel>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
