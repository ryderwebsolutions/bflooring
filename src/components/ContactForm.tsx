"use client";

import { useState, type FormEvent } from "react";
import { business, services } from "@/lib/content";

type FormState = {
  name: string;
  phone: string;
  email: string;
  area: string;
  flooringType: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  area: "",
  flooringType: "",
  message: "",
};

const PHONE_PATTERN = /^[0-9+()\s-]{7,20}$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  function updateField<K extends keyof FormState>(field: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};

    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.phone.trim()) {
      next.phone = "Please enter a phone number.";
    } else if (!PHONE_PATTERN.test(form.phone.trim())) {
      next.phone = "Please enter a valid phone number.";
    }
    if (form.email.trim() && !EMAIL_PATTERN.test(form.email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) next.message = "Let Philip know a little about the job.";

    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate()) return;

    // TODO: Connect a real form backend here (e.g. Formspree, a serverless
    // function, or an email API) to send this data without relying on the
    // visitor's own mail client. Until then, fall back to a pre-filled
    // mailto: so the enquiry still reaches Philip.
    const subject = encodeURIComponent(`Flooring quote request from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email || "-"}\nArea/Town: ${form.area || "-"}\nType of flooring: ${form.flooringType || "-"}\n\nMessage:\n${form.message}`,
    );
    window.location.href = `${business.emailUrl}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-charcoal">
          Name
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          value={form.name}
          onChange={(e) => updateField("name", e.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          className="h-12 w-full rounded-lg border border-taupe/30 bg-white px-4 text-base text-charcoal focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-red-700">
            {errors.name}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-charcoal">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className="h-12 w-full rounded-lg border border-taupe/30 bg-white px-4 text-base text-charcoal focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1 text-sm text-red-700">
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-charcoal">
            Email <span className="font-normal text-charcoal/50">(optional)</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="h-12 w-full rounded-lg border border-taupe/30 bg-white px-4 text-base text-charcoal focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-red-700">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="area" className="mb-1.5 block text-sm font-medium text-charcoal">
            Area / Town <span className="font-normal text-charcoal/50">(optional)</span>
          </label>
          <input
            id="area"
            type="text"
            value={form.area}
            onChange={(e) => updateField("area", e.target.value)}
            className="h-12 w-full rounded-lg border border-taupe/30 bg-white px-4 text-base text-charcoal focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
          />
        </div>

        <div>
          <label htmlFor="flooringType" className="mb-1.5 block text-sm font-medium text-charcoal">
            Type of Flooring <span className="font-normal text-charcoal/50">(optional)</span>
          </label>
          <select
            id="flooringType"
            value={form.flooringType}
            onChange={(e) => updateField("flooringType", e.target.value)}
            className="h-12 w-full rounded-lg border border-taupe/30 bg-white px-4 text-base text-charcoal focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
          >
            <option value="">Not sure yet</option>
            {services.map((service) => (
              <option key={service.id} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-charcoal">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={form.message}
          onChange={(e) => updateField("message", e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          placeholder="Tell Philip about the room, the flooring you have in mind, and roughly when you'd like it done."
          className="w-full rounded-lg border border-taupe/30 bg-white px-4 py-3 text-base text-charcoal focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-red-700">
            {errors.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="photo" className="mb-1.5 block text-sm font-medium text-charcoal">
          Photo of the space <span className="font-normal text-charcoal/50">(optional)</span>
        </label>
        {/* Photo attachments need a real form backend to actually receive the
            file — a mailto: link cannot carry attachments. The field is kept
            here so it's ready the moment a backend is connected. */}
        <input
          id="photo"
          type="file"
          accept="image/*"
          className="block w-full text-sm text-charcoal/70 file:mr-4 file:h-11 file:rounded-full file:border-0 file:bg-charcoal/5 file:px-4 file:text-sm file:font-medium file:text-charcoal"
        />
      </div>

      <button
        type="submit"
        className="flex h-14 w-full items-center justify-center rounded-full bg-brand text-base font-semibold text-cream transition-colors hover:bg-brand-dark sm:w-auto sm:px-10"
      >
        Get a Free Quote
      </button>

      {submitted && (
        <p role="status" className="text-sm text-charcoal/70">
          Your email app should have opened with your details filled in —
          just hit send. If nothing opened, call or WhatsApp Philip instead.
        </p>
      )}
    </form>
  );
}
