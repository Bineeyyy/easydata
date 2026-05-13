import { WaitlistCount } from "@/components/waitlist-count";
import { Countdown, CountdownEyebrow } from "./countdown";
import { WaitlistForm } from "./waitlist-form";

export function Hero() {
  return (
    <section id="hero" className="relative pt-20 pb-24 lg:pt-20 lg:pb-[100px]">
      <div className="relative z-[2] mx-auto max-w-[1240px] px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-14 lg:gap-20 items-center">
          {/* LEFT: copy + form */}
          <div>
            <div
              className="mb-7 inline-flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.12em] text-terracotta opacity-0 animate-[var(--animate-fade-up)] [animation-delay:0.1s]"
            >
              <span className="block h-px w-8 bg-terracotta" />
              Έρχεται 1 Οκτωβρίου 2026
            </div>

            <h1 className="mb-8 font-display font-medium tracking-[-0.025em] text-espresso text-[clamp(48px,7vw,88px)] leading-[0.98] opacity-0 animate-[var(--animate-fade-up)] [animation-delay:0.25s]">
              Τιμολόγιο σε{" "}
              <em className="not-italic font-display italic font-normal text-terracotta">
                30 δευτερόλεπτα
              </em>
              . Από το κινητό σου.
            </h1>

            <p className="mb-10 max-w-[480px] text-[19px] leading-[1.55] text-taupe opacity-0 animate-[var(--animate-fade-up)] [animation-delay:0.4s]">
              Από 1 Οκτωβρίου 2026, η ηλεκτρονική τιμολόγηση γίνεται
              υποχρεωτική. Φτιάχνουμε το πιο γρήγορο και απλό εργαλείο για
              ελεύθερους επαγγελματίες — όχι ολόκληρο ERP.
            </p>

            <div className="opacity-0 animate-[var(--animate-fade-up)] [animation-delay:0.55s] max-w-[480px] mx-0">
              <div className="lg:[&>div]:mx-0">
                <WaitlistForm source="hero" />
              </div>
              <WaitlistCount align="left" />
            </div>

            <p className="mt-4 text-[13px] text-taupe opacity-0 animate-[var(--animate-fade-up)] [animation-delay:0.7s]">
              Στους πρώτους 100,{" "}
              <strong className="font-semibold text-terracotta">€5/μήνα</strong>{" "}
              κλειδωμένο για πάντα. Χωρίς κάρτα.
            </p>
          </div>

          {/* RIGHT: countdown */}
          <div className="lg:text-right opacity-0 animate-[var(--animate-fade-up)] [animation-delay:0.5s]">
            <CountdownEyebrow />
            <div className="font-display font-medium tracking-[-0.04em] text-espresso text-[clamp(72px,12vw,160px)] leading-[0.9] [font-feature-settings:'lnum'_1]">
              01<span className="font-display italic font-normal text-terracotta">.</span>10<span className="font-display italic font-normal text-terracotta">.</span>26
            </div>
            <Countdown />
            <div className="mt-5 inline-flex items-center gap-3 rounded-full border border-border bg-cream-deep px-[18px] py-2.5 text-[13px] text-espresso-soft">
              <span className="pulse-dot" />
              <span>Υποχρεωτικό για όλους τους ελεύθερους επαγγελματίες</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
