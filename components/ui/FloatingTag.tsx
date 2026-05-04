type FloatingTagProps = {
  label: string;
  className?: string;
  tone?: "purple" | "dark";
};

export default function FloatingTag({
  label,
  className,
  tone = "purple",
}: FloatingTagProps) {
  const toneClass =
    tone === "purple"
      ? "bg-[var(--accent-primary)] text-white border-transparent"
      : "bg-[rgba(17,17,17,0.92)] text-white border-white/10";

  return (
    <div
      aria-hidden="true"
      className={`floating-pill ${toneClass} ${className ?? ""}`}
    >
      {label}
    </div>
  );
}
