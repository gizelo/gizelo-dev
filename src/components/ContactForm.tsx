import { FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";

type FormStatus = "idle" | "submitting" | "success" | "error";

const ContactForm = () => {
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("https://formsubmit.co/ajax/98d2f895f6f6c89691d966be40efe297", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-space border-t border-ink/10 bg-white">
      <div className="site-container grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
        <div>
          <p className="eyebrow">Get in touch</p>
          <h2 className="mt-5 max-w-lg text-4xl font-bold leading-tight tracking-[-0.04em] text-ink sm:text-5xl">
            Have a product in mind?
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/65">
            Tell me how I can help with your product.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/gizelo/"
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex min-h-11 items-center gap-2 border border-ink/20 px-4 py-3 text-sm font-semibold text-ink hover:border-ink"
            >
              <img src="/brand/linkedin.svg" alt="" className="h-5 w-5" aria-hidden="true" />
              LinkedIn
            </a>
            <a
              href="https://t.me/gizelo"
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex min-h-11 items-center gap-2 border border-ink/20 px-4 py-3 text-sm font-semibold text-ink hover:border-ink"
            >
              <img src="/brand/telegram.svg" alt="" className="h-5 w-5" aria-hidden="true" />
              Telegram
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-5" aria-label="Send Robert a message">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-ink">
              Name
              <input
                type="text"
                name="name"
                required
                autoComplete="name"
                className="focus-ring min-h-12 border border-ink/20 bg-paper px-4 text-base font-normal outline-none transition-colors hover:border-ink/50"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-ink">
              Email
              <input
                type="email"
                name="email"
                required
                autoComplete="email"
                className="focus-ring min-h-12 border border-ink/20 bg-paper px-4 text-base font-normal outline-none transition-colors hover:border-ink/50"
              />
            </label>
          </div>
          <label className="grid gap-2 text-sm font-semibold text-ink">
            Message
            <textarea
              name="message"
              rows={6}
              required
              className="focus-ring resize-y border border-ink/20 bg-paper px-4 py-3 text-base font-normal outline-none transition-colors hover:border-ink/50"
            />
          </label>
          <input type="hidden" name="_template" value="box" />
          <button
            type="submit"
            disabled={status === "submitting"}
            className="focus-ring inline-flex min-h-12 w-full items-center justify-center gap-2 bg-electric px-6 py-3 font-semibold text-white transition-colors hover:bg-electric-dark disabled:cursor-wait disabled:opacity-60 sm:w-fit"
          >
            {status === "submitting" ? "Sending…" : "Send message"}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
          <div aria-live="polite" className="min-h-6 text-sm">
            {status === "success" && (
              <p className="font-medium text-forest">
                Message sent. I&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="font-medium text-red-700">
                The message could not be sent. Please reach out through LinkedIn or Telegram.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
