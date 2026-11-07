"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { contactForm, site } from "@/lib/site";

type FormStatus = "idle" | "submitting" | "success" | "error";

const ContactForm = () => {
  const [status, setStatus] = useState<FormStatus>("idle");
  const isSubmitting = status === "submitting";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const payload = new FormData(form);
    payload.append("access_key", contactForm.accessKey);
    payload.append("subject", "New message from gizelo.dev");
    payload.append("from_name", "gizelo.dev");

    try {
      const response = await fetch(contactForm.endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: payload,
      });
      const result = (await response.json()) as { success?: boolean };

      if (!response.ok || !result.success) {
        throw new Error("Form submission failed");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-space border-t border-white/10 bg-ink text-white">
      <div className="site-container grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
        <div>
          <Image
            src="/asterisk-color.svg"
            alt=""
            width={64}
            height={64}
            className="h-12 w-12 sm:h-16 sm:w-16"
            aria-hidden="true"
          />
          <h2 className="mt-5 max-w-lg text-4xl font-bold leading-tight tracking-[-0.04em] text-white sm:text-5xl">
            Share what you’ve got. Let’s make it work.
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring-inverse inline-flex min-h-11 items-center gap-2 border border-white/25 px-4 py-3 text-sm font-semibold text-white hover:border-white"
            >
              <Image
                src="/brand/linkedin.svg"
                alt=""
                width={20}
                height={20}
                className="h-5 w-5"
                aria-hidden="true"
              />
              LinkedIn
            </a>
            <a
              href={site.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring-inverse inline-flex min-h-11 items-center gap-2 border border-white/25 px-4 py-3 text-sm font-semibold text-white hover:border-white"
            >
              GitHub
            </a>
            <a
              href={site.social.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring-inverse inline-flex min-h-11 items-center gap-2 border border-white/25 px-4 py-3 text-sm font-semibold text-white hover:border-white"
            >
              <Image
                src="/brand/telegram.svg"
                alt=""
                width={20}
                height={20}
                className="h-5 w-5"
                aria-hidden="true"
              />
              Telegram
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid gap-5"
          aria-label="Send Robert a message"
          aria-busy={isSubmitting}
        >
          <p className="text-sm text-white/70">All fields are required.</p>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-white">
              Name
              <input
                type="text"
                name="name"
                required
                autoComplete="name"
                className="focus-ring-inverse min-h-12 border border-white/35 bg-white px-4 text-base font-normal text-ink transition-colors hover:border-white"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-white">
              Email
              <input
                type="email"
                name="email"
                required
                autoComplete="email"
                className="focus-ring-inverse min-h-12 border border-white/35 bg-white px-4 text-base font-normal text-ink transition-colors hover:border-white"
              />
            </label>
          </div>
          <label className="grid gap-2 text-sm font-semibold text-white">
            Message
            <textarea
              name="message"
              rows={5}
              required
              placeholder="A role, an idea, a link or a problem. Tell me what you have in mind."
              className="focus-ring-inverse resize-y border border-white/35 bg-white px-4 py-3 text-base font-normal text-ink placeholder:text-ink/60 transition-colors hover:border-white"
            />
          </label>
          <input
            type="checkbox"
            name="botcheck"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
            className="focus-ring-inverse inline-flex min-h-12 w-full items-center justify-center gap-2 border border-transparent bg-electric px-6 py-3 font-semibold text-white transition-colors hover:bg-electric-dark disabled:cursor-wait disabled:opacity-60 sm:w-fit"
          >
            {isSubmitting ? "Sending…" : "Send message"}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
          <div aria-live="polite" className="min-h-6 text-sm">
            {isSubmitting && <p className="font-medium text-white/60">Sending…</p>}
            {status === "success" && (
              <p className="font-medium text-lime">Message sent. I&apos;ll get back to you soon.</p>
            )}
            {status === "error" && (
              <p className="font-medium text-red-400">
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
