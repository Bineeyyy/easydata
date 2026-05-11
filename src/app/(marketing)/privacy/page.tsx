import type { Metadata } from "next";
import { SiteFooter } from "../_components/site-footer";
import { SiteNav } from "../_components/site-nav";

export const metadata: Metadata = {
  title: "Πολιτική απορρήτου",
  description:
    "Πώς διαχειριζόμαστε τα δεδομένα σου στο EasyData — email λίστας αναμονής, analytics, και τα δικαιώματά σου.",
  alternates: { canonical: "/privacy" },
};

const LAST_UPDATED = "11/05/2026";

export default function PrivacyPage() {
  return (
    <>
      <SiteNav />
      <main className="relative z-[2] mx-auto max-w-[720px] px-6 lg:px-8 py-16 lg:py-24">
        <header className="mb-12 lg:mb-16">
          <h1 className="font-display text-[44px] md:text-[56px] font-medium leading-[1.05] tracking-[-0.02em] text-espresso">
            Πολιτική απορρήτου
          </h1>
          <p className="mt-4 text-[14px] text-taupe">
            Τελευταία ενημέρωση: {LAST_UPDATED}
          </p>
        </header>

        <div className="space-y-10 text-[17px] leading-[1.7] text-espresso-soft">
          <p>
            Σεβόμαστε τα δεδομένα σου. Αυτή η σελίδα εξηγεί τι μαζεύουμε, γιατί,
            πού τα κρατάμε, και πώς μπορείς να τα ζητήσεις πίσω ή να τα
            διαγράψεις.
          </p>

          <Section title="Ποιοι είμαστε">
            <p>
              Υπεύθυνος επεξεργασίας είναι το EasyData. Για κάθε θέμα που
              αφορά τα δεδομένα σου, στείλε email στο{" "}
              <MailLink />.
            </p>
          </Section>

          <Section title="Τι δεδομένα συλλέγουμε">
            <ul className="space-y-2 pl-5 list-disc marker:text-terracotta">
              <li>
                <strong className="font-medium text-espresso">
                  Το email σου
                </strong>{" "}
                — μόνο όταν εγγραφείς στη λίστα αναμονής.
              </li>
              <li>
                <strong className="font-medium text-espresso">
                  Αναλυτικά δεδομένα χρήσης
                </strong>{" "}
                — ποιες σελίδες είδες, πόσο σκρόλαρες, αν πάτησες το CTA. Δεν
                αποθηκεύουμε ονοματεπώνυμο, ταχυδρομικό κώδικα ή ολόκληρη IP·
                η IP κόβεται πριν αποθηκευτεί.
              </li>
            </ul>
          </Section>

          <Section title="Γιατί τα συλλέγουμε">
            <ul className="space-y-2 pl-5 list-disc marker:text-terracotta">
              <li>
                <strong className="font-medium text-espresso">Email:</strong>{" "}
                για να σε ειδοποιήσουμε όταν η εφαρμογή είναι έτοιμη και να
                μοιραστούμε news σχετικά με το myDATA.
              </li>
              <li>
                <strong className="font-medium text-espresso">
                  Analytics:
                </strong>{" "}
                για να καταλάβουμε ποια κομμάτια της σελίδας δουλεύουν και ποια
                χρειάζονται δουλειά.
              </li>
            </ul>
          </Section>

          <Section title="Νομική βάση">
            <ul className="space-y-2 pl-5 list-disc marker:text-terracotta">
              <li>
                <strong className="font-medium text-espresso">Email:</strong>{" "}
                η συγκατάθεσή σου, που δίνεις όταν υποβάλλεις τη φόρμα.
              </li>
              <li>
                <strong className="font-medium text-espresso">
                  Analytics:
                </strong>{" "}
                έννομο συμφέρον για να βελτιώνουμε την υπηρεσία (άρθρο 6 παρ.
                1στ ΓΚΠΔ).
              </li>
            </ul>
          </Section>

          <Section title="Πού αποθηκεύονται">
            <ul className="space-y-2 pl-5 list-disc marker:text-terracotta">
              <li>
                <strong className="font-medium text-espresso">Email:</strong>{" "}
                στο Supabase, σε servers εντός Ευρωπαϊκής Ένωσης.
              </li>
              <li>
                <strong className="font-medium text-espresso">
                  Analytics:
                </strong>{" "}
                στο PostHog, με αποθήκευση εντός ΕΕ.
              </li>
              <li>
                <strong className="font-medium text-espresso">
                  Φιλοξενία σελίδας:
                </strong>{" "}
                Vercel (CDN παγκοσμίως, χωρίς αποθήκευση προσωπικών δεδομένων
                εκτός των cookies κατάστασης που χρειάζεται η ίδια η σελίδα).
              </li>
            </ul>
          </Section>

          <Section title="Πόσο καιρό τα κρατάμε">
            <ul className="space-y-2 pl-5 list-disc marker:text-terracotta">
              <li>
                <strong className="font-medium text-espresso">Email:</strong>{" "}
                μέχρι να μας ζητήσεις να το διαγράψουμε, ή το αργότερο 12 μήνες
                μετά τη δημόσια διάθεση της εφαρμογής.
              </li>
              <li>
                <strong className="font-medium text-espresso">
                  Analytics:
                </strong>{" "}
                12 μήνες.
              </li>
            </ul>
          </Section>

          <Section title="Τα δικαιώματά σου">
            <p>
              Έχεις δικαίωμα πρόσβασης, διόρθωσης, διαγραφής, φορητότητας,
              περιορισμού της επεξεργασίας και εναντίωσης. Στείλε email στο{" "}
              <MailLink /> και θα απαντήσουμε εντός 30 ημερών.
            </p>
            <p className="mt-4">
              Αν θεωρείς ότι παραβιάζουμε τα δικαιώματά σου, μπορείς να
              υποβάλεις καταγγελία στην{" "}
              <a
                href="https://www.dpa.gr"
                target="_blank"
                rel="noopener"
                className="text-espresso underline decoration-terracotta underline-offset-4 transition-colors hover:text-terracotta"
              >
                Αρχή Προστασίας Δεδομένων Προσωπικού Χαρακτήρα
              </a>
              .
            </p>
          </Section>

          <Section title="Αλλαγές στην πολιτική">
            <p>
              Αν αλλάξει κάτι ουσιαστικό, θα ενημερώσουμε αυτή τη σελίδα και θα
              αλλάξουμε την ημερομηνία στο πάνω μέρος. Αν είσαι ήδη στη λίστα,
              θα σε ειδοποιήσουμε με email πριν τις αλλαγές τεθούν σε ισχύ.
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

function MailLink() {
  return (
    <a
      href="mailto:hello@easydata.gr"
      className="text-espresso underline decoration-terracotta underline-offset-4 transition-colors hover:text-terracotta"
    >
      hello@easydata.gr
    </a>
  );
}
