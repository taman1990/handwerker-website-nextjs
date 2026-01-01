export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-[1100px] px-6">
      {children}
    </div>
  );
}
