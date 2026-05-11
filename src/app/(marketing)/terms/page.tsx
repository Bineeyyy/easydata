import type { Metadata } from "next";
import { SiteFooter } from "../_components/site-footer";
import { SiteNav } from "../_components/site-nav";

export const metadata: Metadata = {
  title: "Όροι χρήσης",
  description:
    "Οι όροι κάτω από τους οποίους χρησιμοποιείς τη σελίδα του EasyData και τη λίστα αναμονής.",
  alternates: { canonical: "/terms" },
};

const LAST_UPDATED = "11/05/2026";

export default function TermsPage() {
  return (
    <>
      <SiteNav />
      <main className="relative z-[2] mx-auto max-w-[720px] px-6 lg:px-8 py-16 lg:py-24">
        <header className="mb-12 lg:mb-16">
          <h1 className="font-display text-[44px] md:text-[56px] font-medium leading-[1.05] tracking-[-0.02em] text-espresso">
            Όροι χρήσης
          </h1>
          <p className="mt-4 text-[14px] text-taupe">
            Τελευταία ενημέρωση: {LAST_UPDATED}
          </p>
        </header>

        <div className="space-y-10 text-[17px] leading-[1.7] text-espresso-soft">
          <p>
            Καλώς ήρθες στο EasyData. Χρησιμοποιώντας τη σελίδα, συμφωνείς με
            τους παρακάτω όρους. Είναι σύντομοι επίτηδες.
          </p>

          <Section title="Τι είναι το EasyData">
            <p>
              Αυτή τη στιγμή, το EasyData είναι μια σελίδα παρουσίασης για
              μια εφαρμογή myDATA που έρχεται. Δεν έχει ξεκινήσει επίσημα. Το
              μόνο που μπορείς να κάνεις τώρα είναι να εγγραφείς στη λίστα
              αναμονής.
            </p>
          </Section>

          <Section title="Χρήση της σελίδας">
            <p>
              Μπορείς να περιηγείσαι ελεύθερα. Αν θες να μάθεις πότε θα είμαστε
              έτοιμοι, βάλε το email σου. Δεν χρειάζεται λογαριασμός, δεν
              χρειάζεται κάρτα — και δεν θα σου στείλουμε spam.
            </p>
          </Section>

          <Section title="Πνευματικά δικαιώματα">
            <p>
              Το όνομα, ο σχεδιασμός, τα κείμενα και ο κώδικας ανήκουν στο
              EasyData. Μη τα χρησιμοποιείς για δικό σου προϊόν χωρίς γραπτή
              άδεια.
            </p>
          </Section>

          <Section title="Καμία εγγύηση">
            <p>
              Η σελίδα παρέχεται &laquo;ως έχει&raquo;. Δεν εγγυόμαστε ότι θα
              είναι πάντα διαθέσιμη ή ότι όλα τα features που περιγράφουμε θα
              κυκλοφορήσουν με τη μορφή που τα βλέπεις σήμερα. Είμαστε
              pre-launch — τα πράγματα θα εξελιχθούν.
            </p>
          </Section>

          <Section title="Περιορισμός ευθύνης">
            <p>
              Στον μέγιστο βαθμό που επιτρέπει ο νόμος, δεν φέρουμε ευθύνη για
              έμμεσες, παρεπόμενες ή αποθετικές ζημιές που μπορεί να προκύψουν
              από τη χρήση της σελίδας. Αυτό δεν αφαιρεί δικαιώματα που σου
              δίνει η ισχύουσα νομοθεσία ως καταναλωτή.
            </p>
          </Section>

          <Section title="Εφαρμοστέο δίκαιο">
            <p>
              Οι όροι διέπονται από το ελληνικό δίκαιο. Αρμόδια δικαστήρια για
              κάθε διαφορά είναι τα δικαστήρια της Αθήνας.
            </p>
          </Section>

          <Section title="Αλλαγές στους όρους">
            <p>
              Μπορεί να ενημερώσουμε τους όρους. Η τελευταία έκδοση δημοσιεύεται
              πάντα εδώ, με ημερομηνία στο πάνω μέρος της σελίδας.
            </p>
          </Section>

          <Section title="Επικοινωνία">
            <p>
              Για οτιδήποτε, στείλε email στο{" "}
              <a
                href="mailto:hello@easydata.gr"
                className="text-espresso underline decoration-terracotta underline-offset-4 transition-colors hover:text-terracotta"
              >
                hello@easydata.gr
              </a>
              .
            </p>
          </Section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-display text-[24px] md:text-[28px] font-medium tracking-[-0.01em] text-espresso mb-4">
        {title}
      </h2>
      {children}
    </section>
  );
}
