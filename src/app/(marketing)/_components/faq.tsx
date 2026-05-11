"use client";

import Link from "next/link";
import { useState } from "react";
import { trackFaqOpen, type FaqQuestion } from "@/lib/analytics";

type FaqItem = { id: FaqQuestion; q: string; a: React.ReactNode };

const items: FaqItem[] = [
  {
    id: "q1",
    q: "Είναι αυτό επίσημο AADE εργαλείο;",
    a: "Όχι. Το EasyData είναι ανεξάρτητο εργαλείο που σε βοηθά να χρησιμοποιήσεις σωστά και γρήγορα την υπηρεσία myDATA της ΑΑΔΕ — δεν είμαστε υποκατάστατο, είμαστε βοηθός.",
  },
  {
    id: "q2",
    q: "Δεν είναι ήδη υποχρεωτικό το myDATA;",
    a: "Ναι, το myDATA (διαβίβαση παραστατικών στην ΑΑΔΕ) είναι υποχρεωτικό από τον Νοέμβριο 2021. Αυτό που αλλάζει την 1η Οκτωβρίου 2026 είναι η Β' Φάση της υποχρεωτικής ηλεκτρονικής τιμολόγησης: όλες οι επιχειρήσεις με τζίρο κάτω από 1.000.000€ — δηλαδή σχεδόν όλοι οι ελεύθεροι επαγγελματίες — υποχρεούνται να εκδίδουν τιμολόγια μέσω παρόχου ηλεκτρονικής τιμολόγησης για B2B και B2G συναλλαγές.",
  },
  {
    id: "q3",
    q: "Πόσο μεγάλα είναι τα πρόστιμα;",
    a: "Έως €2.500 ανά παράβαση, σύμφωνα με την πρόσφατη εγκύκλιο της ΑΑΔΕ. Υπάρχει μεταβατική περίοδος έως τις 31 Δεκεμβρίου 2026.",
  },
  {
    id: "q4",
    q: "Χρειάζομαι λογιστή ή μπορώ μόνος μου;",
    a: "Συνέχισε να δουλεύεις με τον λογιστή σου. Το EasyData του στέλνει καθαρό export κάθε μήνα — δεν τον αντικαθιστά, του κάνει τη ζωή πιο εύκολη.",
  },
  {
    id: "q5",
    q: "Πόσο θα κοστίζει;",
    a: "Στους πρώτους 100 που μπαίνουν στη λίστα αναμονής, κλειδώνουμε €9/μήνα για πάντα. Μετά γίνεται €15/μήνα. Πρώτος μήνας δωρεάν.",
  },
  {
    id: "q6",
    q: "Πότε ανοίγει;",
    a: "Στόχος μας είναι να ανοίξουμε πριν την 1η Οκτωβρίου 2026, ώστε να έχεις χρόνο να εξοικειωθείς πριν γίνει υποχρεωτικό. Όσοι είναι στη λίστα παίρνουν πρόσβαση πρώτοι.",
  },
  {
    id: "q7",
    q: "Χρειάζεται κωδικός TaxisNet;",
    a: "Όχι για το EasyData. Μόνο τα βασικά σου στοιχεία — ΑΦΜ, ΚΑΔ, καθεστώς ΦΠΑ. Δουλεύουμε δίπλα στο σύστημα της ΑΑΔΕ, όχι μέσα από αυτό.",
  },
  {
    id: "q8",
    q: "Τι γίνεται με τα δεδομένα μου;",
    a: (
      <>
        Μένουν σε servers στην ΕΕ (Φραγκφούρτη). Δεν πουλάμε δεδομένα, δεν
        συλλέγουμε IP. Μπορείς να ζητήσεις διαγραφή ανά πάσα στιγμή. Διάβασε
        την πλήρη πολιτική απορρήτου στο{" "}
        <Link
          href="/privacy"
          className="text-espresso underline decoration-border underline-offset-[3px] transition-colors hover:text-terracotta hover:decoration-terracotta"
        >
          /privacy
        </Link>
        .
      </>
    ),
  },
  {
    id: "q9",
    q: "Μπορώ να ακυρώσω;",
    a: "Όποτε θες. Δεν δεσμεύεσαι με κάρτα ή συμβόλαιο. Αν δεν σου αρέσει, σταματάς — και κρατάς πρόσβαση μέχρι το τέλος του τρέχοντος μήνα.",
  },
];

export function Faq() {
  const [openIds, setOpenIds] = useState<Set<FaqQuestion>>(new Set());

  function toggle(id: FaqQuestion) {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
        trackFaqOpen(id);
      }
      return next;
    });
  }

  return (
    <section id="faq" className="border-t border-border py-20 lg:py-[100px]">
      <div className="relative z-[2] mx-auto max-w-[1240px] px-6 lg:px-8">
        <div className="mb-14 lg:mb-20 grid grid-cols-1 lg:grid-cols-2 items-end gap-6 lg:gap-20">
          <h2 className="font-display font-medium tracking-[-0.02em] text-[clamp(36px,5vw,56px)] leading-[1.05]">
            Συχνές{" "}
            <em className="not-italic font-display italic text-terracotta">
              ερωτήσεις.
            </em>
          </h2>
          <p className="max-w-[380px] text-base leading-[1.65] text-taupe">
            Ό,τι μας ρωτάνε πιο συχνά. Αν δεν βρίσκεις την απάντηση που
            ψάχνεις, στείλε μας email.
          </p>
        </div>

        <div className="mx-auto max-w-[860px]">
          {items.map((item, idx) => {
            const isOpen = openIds.has(item.id);
            const panelId = `faq-${item.id}-panel`;
            const buttonId = `faq-${item.id}-button`;
            return (
              <div
                key={item.id}
                className={`border-t border-border ${
                  idx === items.length - 1 ? "border-b" : ""
                }`}
              >
                <button
                  type="button"
                  id={buttonId}
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="group flex w-full items-center justify-between gap-6 py-6 lg:py-7 text-left transition-colors hover:text-terracotta focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracotta"
                >
                  <span className="font-display font-medium text-[20px] lg:text-[24px] leading-[1.3] tracking-[-0.01em]">
                    {item.q}
                  </span>
                  <span
                    aria-hidden
                    className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-terracotta transition-[transform,border-color] duration-[250ms] ease-out motion-reduce:transition-none group-hover:border-terracotta ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth={1.6}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-[14px] w-[14px] stroke-current"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-[grid-template-rows] duration-[250ms] ease-out motion-reduce:transition-none ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-7 lg:pb-8 pr-12 text-[15.5px] leading-[1.65] text-taupe">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
