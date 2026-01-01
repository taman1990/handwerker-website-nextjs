export function Section({
  children,
  muted = false,
}: {
  children: React.ReactNode;
  muted?: boolean;
}) {
  return (
    <section
      className={`py-20 ${
        muted ? "bg-bg-muted" : "bg-bg-main"
      }`}
    >
      {children}
    </section>
  );
}
