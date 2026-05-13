export function Comparison() {
  return (
    <section id="comparison" className="my-15 lg:my-15">
      <div className="relative z-[2] mx-auto max-w-[1240px] px-6 lg:px-8">
        <div className="grain-dark relative overflow-hidden rounded-2xl bg-espresso text-cream py-[70px] lg:py-[100px]">
          <div className="relative z-[2] mx-auto max-w-[720px] px-8 lg:px-14">
            <div className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-gold">
              <span className="block h-px w-6 bg-gold" />
              Σύγκριση
            </div>
            <h2 className="mb-8 font-display font-medium tracking-[-0.02em] text-[clamp(40px,5.5vw,64px)] leading-[1.05]">
              Γιατί όχι{" "}
              <em className="not-italic font-display italic text-gold">
                Elorus
              </em>{" "}
              ή Softone;
            </h2>
            <p className="mb-5 text-[17px] leading-[1.65] text-cream/80">
              Καλά είναι. Δουλεύουν για επιχειρήσεις με δεκάδες
              υπαλλήλους και εκατοντάδες τιμολόγια. Αλλά είναι
              desktop-first με features ERP που οι περισσότεροι
              ελεύθεροι επαγγελματίες δεν θα χρησιμοποιήσουν ποτέ.
            </p>
            <p className="text-[17px] leading-[1.65] text-cream/80">
              Εμείς focus-άρουμε σε ένα πράγμα: τον freelancer που
              εκδίδει 5–30 τιμολόγια τον μήνα και θέλει να το κάνει σε{" "}
              <strong className="font-semibold text-cream">
                30 δευτερόλεπτα
              </strong>{" "}
              από το κινητό του. Αν είσαι μεγαλύτερη επιχείρηση, οι
              incumbents είναι καλύτεροι. Αν είσαι solo και θες απλό +
              γρήγορο, είμαστε εδώ.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
