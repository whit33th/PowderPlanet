import type { ReactNode } from "react";

function Hr({ children }: { children?: ReactNode }) {
  return (
    <div className="relative my-10 flex items-center justify-center">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/15 to-zaun/70" />
      {children ? (
        <div className="mx-4 rounded-full border border-zaun/35 bg-ink px-4 py-1.5 text-sm font-bold tracking-[0.14em] text-zaun uppercase">
          {children}
        </div>
      ) : null}
      <div className="h-px flex-1 bg-gradient-to-l from-transparent via-white/15 to-zaun/70" />
    </div>
  );
}

export default Hr;
