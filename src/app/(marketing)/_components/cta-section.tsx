import { WaitlistCount } from "@/components/waitlist-count";
import { WaitlistForm } from "./waitlist-form";

export function CtaSection() {
  return (
    <section
      id="waitlist"
      className="border-t border-border py-20 lg:py-30 text-center"
    >
      <div className="relative z-[2] mx-auto max-w-[1240px] px-6 lg:px-8">
        <div className="mb-6 inline-flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-terracotta">
          <span className="block h-px w-6 bg-terracotta" />
          Λίστα αναμονής
        </div>

        <h2 className="mx-auto mb-6 max-w-[800px] font-display font-medium tracking-[-0.025em] text-[clamp(44px,6.5vw,80px)] leading-none">
          Μπες{" "}
          <em className="not-italic font-display italic text-terracotta">
            πρώτος.
          </em>
          <br />
          Πληρώνεις τελευταίος.
        </h2>

        <p className="mx-auto mb-12 max-w-[540px] text-[18px] leading-[1.55] text-taupe">
          Στους πρώτους 50 που μπαίνουν στη λίστα,{" "}
          <strong className="font-semibold text-terracotta">
            δωρεάν για πάντα
          </strong>
          {" "}— καθόλου κάρτα, καθόλου χρέωση. Μετά τους πρώτους 50, €5/μήνα.
          Στέλνουμε ένα email όταν ανοίγουμε. Όχι spam.
        </p>

        <WaitlistForm source="cta_bottom" variant="terracotta" size="lg" />

        <WaitlistCount align="center" />

        <p className="mt-5 text-[13px] text-taupe">
          Δωρεάν για τις πρώτες 30 ημέρες · Ακυρώνεις όποτε θες · Χωρίς κάρτα
        </p>
      </div>
    </section>
  );
}
