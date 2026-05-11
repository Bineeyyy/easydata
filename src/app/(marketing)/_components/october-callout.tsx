type Penalty = {
  amount: React.ReactNode;
  label: string;
};

const penalties: Penalty[] = [
  {
    amount: (
      <>
        έως <em className="italic">€</em>2.500
      </>
    ),
    label:
      "Ανά παράβαση για παράλειψη έκδοσης μέσω παρόχου ηλεκτρονικής τιμολόγησης, σύμφωνα με την εγκύκλιο της ΑΑΔΕ.",
  },
  {
    amount: (
      <>
        <em className="italic">&lt;</em>€1M
      </>
    ),
    label:
      "Αφορά κάθε επιχείρηση και ελεύθερο επαγγελματία με ετήσιο τζίρο κάτω από 1 εκατομμύριο ευρώ — δηλαδή σχεδόν όλους.",
  },
];

export function OctoberCallout() {
  return (
    <section id="october" className="my-15 lg:my-15">
      <div className="relative z-[2] mx-auto max-w-[1240px] px-6 lg:px-8">
        <div className="grain-dark relative overflow-hidden rounded-2xl bg-espresso text-cream py-[70px] lg:py-[100px]">
          <div className="relative z-[2] grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20 px-8 lg:px-14">
            <div>
              <div className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-gold">
                <span className="block h-px w-6 bg-gold" />
                1 Οκτωβρίου 2026
              </div>
              <h2 className="mb-7 font-display font-medium tracking-[-0.02em] text-[clamp(40px,5.5vw,64px)] leading-[1.05]">
                Τι αλλάζει{" "}
                <em className="not-italic font-display italic text-gold">
                  για όλους μας;
                </em>
              </h2>
              <p className="mb-4 text-[17px] leading-[1.65] text-cream/80">
                Από 1 Οκτωβρίου 2026 ξεκινά η Β&apos; Φάση της υποχρεωτικής
                ηλεκτρονικής τιμολόγησης. Όλες οι επιχειρήσεις και οι
                ελεύθεροι επαγγελματίες με τζίρο κάτω από 1.000.000€{" "}
                <strong className="font-semibold text-cream">
                  υποχρεούνται να εκδίδουν τιμολόγια μέσω παρόχου
                  ηλεκτρονικής τιμολόγησης
                </strong>{" "}
                για B2B και B2G συναλλαγές.
              </p>
              <p className="text-[17px] leading-[1.65] text-cream/80">
                Υπάρχει περίοδος προσαρμογής έως 31 Δεκεμβρίου 2026. Το
                EasyData σε προετοιμάζει από τώρα, χωρίς να αλλάξεις λογιστή,
                χωρίς πολύπλοκο software.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {penalties.map((p, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-cream/10 bg-cream/[0.04] p-8 backdrop-blur-md"
                >
                  <div className="mb-2 font-display font-medium text-[56px] leading-none tracking-[-0.025em] text-gold">
                    {p.amount}
                  </div>
                  <div className="text-[14px] leading-[1.5] text-cream/75">
                    {p.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
