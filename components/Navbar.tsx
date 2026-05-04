"use client";

import { useEffect, useState } from "react";
import ScrollLink from "@/components/ui/ScrollLink";

const navLinks = [
  { href: "#topo", label: "Início" },
  { href: "#projetos", label: "Projetos" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#contato", label: "Contato" },
];

type NavbarProps = {
  whatsappUrl: string;
};

export default function Navbar({ whatsappUrl }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="container-shell pt-4">
          <div className="rounded-full border border-white/10 bg-[rgba(10,10,10,0.78)] px-5 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl">
            <div className="flex items-center justify-between gap-4">
              <ScrollLink
                href="#topo"
                ariaLabel="Voltar ao topo"
                className="font-display text-4xl uppercase leading-none tracking-[0.06em]"
              >
                diegocodes
                <span className="text-[var(--accent-primary)]">_</span>
              </ScrollLink>

              <nav className="hidden items-center gap-2 rounded-full border border-white/6 bg-white/[0.03] p-2 md:flex">
                {navLinks.map((link) => (
                  <ScrollLink
                    key={link.href}
                    href={link.href}
                    className="rounded-full px-4 py-2 font-accent text-sm font-medium uppercase tracking-[0.18em] text-[var(--text-secondary)] transition hover:bg-white/[0.04] hover:text-white"
                  >
                    {link.label}
                  </ScrollLink>
                ))}
              </nav>

              <div className="hidden md:block">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Abrir conversa no WhatsApp para solicitar um site"
                  className="button-primary"
                >
                  Quero meu site
                </a>
              </div>

              <button
                type="button"
                aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
                aria-expanded={isOpen}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[var(--bg-surface)] text-white transition hover:border-[var(--accent-primary)] md:hidden"
                onClick={() => setIsOpen((open) => !open)}
              >
                <span className="relative block h-4 w-5">
                  <span
                    className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition ${
                      isOpen ? "translate-y-[7px] rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition ${
                      isOpen ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-[14px] h-0.5 w-5 bg-current transition ${
                      isOpen ? "-translate-y-[7px] -rotate-45" : ""
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <button
        type="button"
        aria-label="Fechar menu lateral"
        className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        } md:hidden`}
        onClick={handleClose}
      />

      <aside
        className={`fixed right-0 top-0 z-50 h-screen w-[300px] border-l border-white/10 bg-[rgba(10,10,10,0.98)] px-6 py-24 transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-5">
          {navLinks.map((link) => {
            const label =
              link.href === "#topo" ? "Ir para o início" : `Ir para ${link.label}`;

            return (
              <ScrollLink
                key={link.href}
                href={link.href}
                ariaLabel={label}
                className="font-display text-4xl uppercase tracking-[0.04em] text-white"
                onClick={handleClose}
              >
                {link.label}
              </ScrollLink>
            );
          })}
        </nav>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Abrir conversa no WhatsApp para solicitar um site"
          className="button-primary mt-10 w-full"
          onClick={handleClose}
        >
          Quero meu site
        </a>
      </aside>
    </>
  );
}
