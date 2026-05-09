type Step = { num: string; title: string; body: string };

const steps: Step[] = [
  {
    num: "— Βήμα 01 —",
    title: "Συνδέεις τα στοιχεία σου",
    body: "ΑΦΜ, ΚΑΔ, καθεστώς ΦΠΑ, κατηγορία ΕΦΚΑ. Μία φορά. Σε 2 λεπτά. Δεν χρειάζεται κωδικός TaxisNet — απλά τα βασικά.",
  },
  {
    num: "— Βήμα 02 —",
    title: "Εκδίδεις σε 30 δευτερόλεπτα",
    body: "Πληκτρολογείς ΑΦΜ πελάτη — εμφανίζεται. Γράφεις τι έκανες — προτείνουμε classification. Πατάς αποστολή — έτοιμο.",
  },
  {
    num: "— Βήμα 03 —",
    title: "Στέλνεις στον λογιστή",
    body: "Στο τέλος του μήνα, ένα tap. Excel + PDF, ταξινομημένα όπως τα θέλει. Κανένα Viber message στις 10 το βράδυ.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-20 lg:py-[100px]">
      <div className="relative z-[2] mx-auto max-w-[1240px] px-6 lg:px-8">
        <div className="mb-14 lg:mb-20 grid grid-cols-1 lg:grid-cols-2 items-end gap-6 lg:gap-20">
          <h2 className="font-display font-medium tracking-[-0.02em] text-[clamp(36px,5vw,56px)] leading-[1.05]">
            Όλη η συμμόρφωση.{" "}
            <em className="not-italic font-display italic text-terracotta">
              Χωρίς το άγχος.
            </em>
          </h2>
          <p className="max-w-[380px] text-base leading-[1.65] text-taupe">
            Δεν χρειάζεσαι ολόκληρο ERP για να εκδώσεις 8 τιμολόγια τον μήνα.
            Χρειάζεσαι κάτι που δουλεύει — από το κινητό, στα ελληνικά, χωρίς
            εκπαίδευση.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 border-t border-border">
          {steps.map((s, i) => (
            <div
              key={s.num}
              className={`py-10 ${i === 0 ? "lg:pr-8" : "lg:px-8"} ${
                i === steps.length - 1 ? "lg:pr-0" : "lg:border-r lg:border-border"
              } border-b border-border lg:border-b-0`}
            >
              <div className="mb-4 font-display italic font-medium text-[14px] tracking-[0.05em] text-terracotta">
                {s.num}
              </div>
              <h3 className="mb-3 font-display font-medium text-[24px] leading-[1.2]">
                {s.title}
              </h3>
              <p className="text-[14.5px] leading-[1.6] text-taupe">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
