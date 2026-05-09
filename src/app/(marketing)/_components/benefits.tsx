type Benefit = {
  num: string;
  title: string;
  body: React.ReactNode;
  icon: React.ReactNode;
};

const benefits: Benefit[] = [
  {
    num: "— 01 —",
    title: "Τιμολόγιο σε 3 tap",
    body: (
      <>
        Συμπληρώνουμε αυτόματα{" "}
        <strong className="font-semibold text-espresso-soft">
          ΑΦΜ, ΚΑΔ και classification code
        </strong>
        . Δεν χρειάζεται να ξέρεις τι είναι το «1.1». Εμείς ξέρουμε.
      </>
    ),
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-[22px] w-[22px] stroke-espresso"
      >
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    num: "— 02 —",
    title: "Ποτέ ξανά πρόστιμο",
    body: (
      <>
        Σου θυμίζουμε{" "}
        <strong className="font-semibold text-espresso-soft">
          ΦΠΑ, ΕΦΚΑ και deadlines
        </strong>{" "}
        πριν είναι αργά. Notification στο κινητό σου, με το ποσό και το link
        πληρωμής.
      </>
    ),
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-[22px] w-[22px] stroke-espresso"
      >
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
  },
  {
    num: "— 03 —",
    title: "Ο λογιστής σου θα σ' αγαπήσει",
    body: (
      <>
        Ένα κουμπί. Καθαρό export κάθε μήνα —{" "}
        <strong className="font-semibold text-espresso-soft">
          Excel + PDF
        </strong>{" "}
        έτοιμα να σταλούν. Χωρίς κενά, χωρίς λάθη, χωρίς γκρίνια.
      </>
    ),
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-[22px] w-[22px] stroke-espresso"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
];

export function Benefits() {
  return (
    <section className="border-t border-border py-20 lg:py-[100px]">
      <div className="relative z-[2] mx-auto max-w-[1240px] px-6 lg:px-8">
        <div className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-terracotta">
          <span className="block h-px w-6 bg-terracotta" />
          Τι κάνει το EasyData
        </div>

        <h2 className="mb-14 lg:mb-20 max-w-[720px] font-display font-medium tracking-[-0.02em] text-[clamp(36px,5vw,56px)] leading-[1.05]">
          Τρία πράγματα.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-14">
          {benefits.map((b) => (
            <div key={b.num}>
              <div className="mb-6 font-display italic font-medium text-base text-terracotta">
                {b.num}
              </div>
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-cream-deep">
                {b.icon}
              </div>
              <h3 className="mb-3.5 font-display font-medium text-[28px] tracking-[-0.01em] leading-[1.15]">
                {b.title}
              </h3>
              <p className="text-[15px] leading-[1.65] text-taupe">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
