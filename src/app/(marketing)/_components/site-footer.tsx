import Link from "next/link";
import { Logo } from "./logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-border pt-12 pb-28 md:pb-15">
      <div className="relative z-[2] mx-auto max-w-[1240px] px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-15 items-start">
          <Logo />
          <p className="font-display italic text-[17px] leading-[1.6] text-taupe">
            Δεν είμαστε υποκατάστατο του λογιστή σου. Είμαστε το εργαλείο που
            του κάνει — και σου κάνει — τη ζωή πιο εύκολη.
          </p>
        </div>
        <div className="mt-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 border-t border-border-soft pt-7 text-[13px] text-taupe">
          <div>© {new Date().getFullYear()} EasyData · Φτιαγμένο με μεράκι στην Ελλάδα</div>
          <div className="flex gap-6">
            <a
              href="mailto:hello@easydata.gr"
              className="transition-colors hover:text-espresso"
            >
              hello@easydata.gr
            </a>
            <Link
              href="/privacy"
              className="transition-colors hover:text-espresso"
            >
              Απόρρητο
            </Link>
            <Link
              href="/terms"
              className="transition-colors hover:text-espresso"
            >
              Όροι
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
