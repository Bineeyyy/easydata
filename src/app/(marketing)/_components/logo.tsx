import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="font-display text-[28px] font-semibold tracking-[-0.02em] text-espresso inline-flex items-baseline gap-px"
    >
      easydata
      <span
        aria-hidden
        className="block h-1.5 w-1.5 rounded-full bg-terracotta -translate-y-3.5"
      />
    </Link>
  );
}
