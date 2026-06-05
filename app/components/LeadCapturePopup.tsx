"use client";

import { FormEvent, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";

const endpoint =
  "https://script.google.com/macros/s/AKfycbx92lnyGMg48aVfBbIJIuCSoeG4qnsSSFqI_Vfn8Hcwc3f1nJfp9DBgj5OEUVQRsaA/exec";

const sessionKey = "shiva-inn-lead-popup-shown";
const submittedKey = "shiva-inn-lead-popup-submitted";

type Status = "idle" | "submitting" | "success" | "error";

export function LeadCapturePopup() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [touchedPhone, setTouchedPhone] = useState(false);

  const phoneError =
    touchedPhone && phone.length !== 10 ? "Enter a valid 10 digit mobile number." : "";

  useEffect(() => {
    if (pathname === "/vegmenu" || pathname === "/nonvegmenu") {
      return;
    }

    if (window.localStorage.getItem(submittedKey) || window.sessionStorage.getItem(sessionKey)) {
      return;
    }

    const timer = window.setTimeout(() => {
      window.sessionStorage.setItem(sessionKey, "true");
      setOpen(true);
    }, 5000);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  if (pathname === "/vegmenu" || pathname === "/nonvegmenu") {
    return null;
  }

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && status !== "submitting") {
        setOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, status]);

  const close = () => {
    if (status !== "submitting") {
      setOpen(false);
    }
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTouchedPhone(true);
    setError("");

    if (!name.trim() || phone.length !== 10) {
      setError("Please enter your name and a valid 10 digit mobile number.");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({
          name: name.trim(),
          phone,
          page: window.location.href
        })
      });


      window.localStorage.setItem(submittedKey, "true");
      setStatus("success");
      window.setTimeout(() => setOpen(false), 2000);
    } catch {
      setStatus("error");
      setError("Sorry, we could not send your request. Please try again.");
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[90] grid place-items-center overflow-y-auto overflow-x-hidden bg-[rgba(38,34,29,0.74)] px-4 py-6 text-[var(--white)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-hidden={!open}
        >
          <motion.form
            className="relative w-full max-w-[460px] border border-[rgba(196,161,90,0.34)] bg-white p-6 shadow-[var(--shadow)] sm:p-8"
            initial={{ opacity: 0, scale: 0.94, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={submit}
            role="dialog"
            aria-modal="true"
            aria-labelledby="lead-capture-title"
          >
            <button
              type="button"
              className="absolute right-4 top-4 grid h-[34px] w-[34px] place-items-center rounded-full border border-[rgba(255,255,255,0.35)] bg-[rgba(255,255,255,0.12)] text-[var(--white)]"
              onClick={close}
              aria-label="Close availability popup"
            >
              <X size={18} />
            </button>
            <button
              type="button"
              className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-gray-300 bg-white text-black hover:bg-gray-100"
              onClick={close}
              aria-label="Close availability popup"
            >
              <X size={20} />
            </button>
            <p className="eyebrow pr-12">Reservations</p>
            <h2
              id="lead-capture-title"
              className="m-0 max-w-[13ch] text-[clamp(32px,8vw,46px)] text-black leading-[1.04] [font-family:Baskerville,'Libre_Baskerville',Georgia,'Times_New_Roman',serif]"
            >
              Check Availability
            </h2>
            <p className="mb-7 mt-4 text-[15px] leading-7 text-gray-700 [font-family:Baskerville,'Libre_Baskerville',Georgia,'Times_New_Roman',serif]">
              Share your details and our reservation team will contact you shortly.
            </p>

            <div className="grid gap-4">
              <label className="grid gap-2 text-black font-extrabold  text-[rgba(255,255,255,0.78)]">
                Guest Name*
                <input
                  placeholder="Enter your name"
                  className="min-h-[46px] border-0 border-b border-[rgba(226,222,212,0.34)] bg-transparent text-[16px] text-white placeholder:text-white/60 outline-none focus:border-[var(--gold)]"
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  autoComplete="name"
                />
              </label>

              <label className="grid gap-2 text-black font-extrabold  text-[rgba(255,255,255,0.78)]">
                Mobile Number*
                <input
                  placeholder="Enter 10 digit mobile number"
                  className="min-h-[46px] border-0 border-b border-[rgba(196,161,90,0.34)] bg-transparent text-[16px] text-white placeholder:text-white/60 outline-none focus:border-[var(--gold)]"
                  required
                  value={phone}
                  onBlur={() => setTouchedPhone(true)}
                  onChange={(event) => {
                    setPhone(event.target.value.replace(/\D/g, "").slice(0, 10));
                    setError("");
                  }}
                  inputMode="numeric"
                  autoComplete="tel"
                  maxLength={10}
                  aria-invalid={phoneError ? "true" : "false"}
                  aria-describedby={phoneError ? "lead-phone-error" : undefined}
                />
              </label>
            </div>

            {phoneError && (
              <p id="lead-phone-error" className="mt-3 text-[13px] font-bold text-[var(--gold)]">
                {phoneError}
              </p>
            )}

            {error && <p className="mt-3 text-[13px] font-bold text-[var(--gold)]">{error}</p>}

            {status === "success" ? (
              <p className="mt-6 border border-[rgba(196,161,90,0.34)] p-4 text-center text-[15px] font-bold leading-6 text-[var(--white)]">
                Thank you. Our reservation team will contact you shortly.
              </p>
            ) : (
              <button
                className="mt-7 inline-flex min-h-[50px] w-full items-center justify-center border border-[var(--gold)] bg-[var(--gold)] px-6 text-[13px] font-extrabold uppercase text-[var(--dark)] transition hover:-translate-y-0.5 hover:bg-[var(--muted-gold)] disabled:cursor-not-allowed disabled:opacity-70"
                type="submit"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Sending..." : "CHECK AVAILABILITY"}
              </button>
            )}
          </motion.form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
