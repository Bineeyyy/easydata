import { Logo } from "./logo";

const links = [
  { href: "#how", label: "Πώς δουλεύει" },
  { href: "#october", label: "1 Οκτωβρίου" },
];

export function SiteNav() {
  return (
    <nav className="relative z-10 py-7">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8 flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-8 text-sm font-medium">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hidden lg:inline text-taupe transition-colors hover:text-espresso"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#waitlist"
            className="rounded-full bg-espresso px-4 py-2.5 text-[13px] text-cream transition-all hover:-translate-y-px hover:bg-terracotta"
          >
            Μπες στη λίστα
          </a>
        </div>
      </div>
    </nav>
  );
}
