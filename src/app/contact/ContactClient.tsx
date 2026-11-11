"use client";

import { useState } from "react";
import {
  ChevronDown,
  Mail,
  MapPin,
  Clock,
  Send,
  Check,
  Copy,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import SectionLabel from "@/components/SectionLabel";
import AnimatedHeading from "@/components/AnimatedHeading";
import { faqs, socials } from "@/data/socials";

const delays = ["0", "100", "200", "300"];

export default function ContactClient() {
  const [open, setOpen] = useState<number | null>(0);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Data Analyst Role",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // No backend on a static portfolio: open the visitor's email client
    // with the message pre-filled, addressed to Stephanie.
    const subject = encodeURIComponent(
      `${formData.subject || formData.service} — ${formData.name}`
    );
    const body = encodeURIComponent(
      `Hi Stephanie,\n\n${formData.message}\n\n— ${formData.name} (${formData.email})\nTopic: ${formData.service}`
    );
    window.location.href = `mailto:${socials.email}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  return (
    <div className="max-screen pt-10 sm:pt-14 md:pt-20 pb-20 md:pb-32 space-y-20 sm:space-y-28 md:space-y-36">
      {/* ===== Contact Form & Details Section ===== */}
      <section>
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span
            data-aos="fade"
            data-aos-offset="0"
            data-aos-duration="300"
            data-aos-easing="ease-in-out-sine"
            data-aos-delay="0"
          >
            <SectionLabel>Get In Touch</SectionLabel>
          </span>

          <span
            data-aos="fade"
            data-aos-offset="0"
            data-aos-duration="300"
            data-aos-easing="ease-in-out-sine"
            data-aos-delay="200"
          >
            <AnimatedHeading
              text="Let's Talk Data"
              as="h1"
              className="mt-2 text-3xl sm:text-5xl md:text-6xl font-bold font-clash-display text-text-primary tracking-tight leading-[1.12]"
            />
          </span>

          <span
            data-aos="fade"
            data-aos-offset="0"
            data-aos-duration="300"
            data-aos-easing="ease-in-out-sine"
            data-aos-delay="400"
          >
            <p className="mt-4 text-base sm:text-lg text-text-secondary leading-relaxed">
              Looking for a Data / BI Analyst, or want to discuss an analytics
              project? Fill out the form or reach out directly.
            </p>
          </span>
        </div>

        {/* 2-Column Grid: Left Details & Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Contact Info & Availability */}
          <div
            className="lg:col-span-5 space-y-6"
            data-aos="fade-up"
            data-aos-duration="400"
            data-aos-delay="200"
          >
            {/* Availability Card */}
            <div className="rounded-3xl border border-bg-700 bg-bg-800/90 p-6 sm:p-7 shadow-lg backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                  Available for new projects
                </span>
              </div>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                Open to Data / BI Analyst roles (entry-level and new-grad) starting
                after June 2027, and to analytics projects.
              </p>
            </div>

            {/* Email Card with Quick Copy */}
            <div className="rounded-3xl border border-bg-700 bg-bg-800/90 p-6 sm:p-7 shadow-lg backdrop-blur-xl transition-all duration-300 hover:border-zinc-700">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-bg-700 text-highlight-primary">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-clash-display font-semibold text-text-primary text-base">
                      Direct Email
                    </h3>
                    <p className="text-xs text-text-secondary">Official communication</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex size-9 items-center justify-center rounded-lg border border-bg-700 bg-bg-700/60 text-zinc-300 transition-colors hover:border-highlight-primary hover:text-highlight-primary"
                  aria-label="Copy email address"
                  title="Copy email"
                >
                  {copiedEmail ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
              </div>
              <a
                href={`mailto:${socials.email}`}
                className="font-mono text-sm sm:text-base text-zinc-200 hover:text-highlight-primary transition-colors break-all"
              >
                {socials.email}
              </a>
              {copiedEmail && (
                <p className="text-xs text-emerald-400 mt-2 flex items-center gap-1">
                  <Check size={13} /> Email copied to clipboard!
                </p>
              )}
            </div>

            {/* Location & Response Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-bg-700 bg-bg-800/90 p-5 shadow-sm">
                <div className="flex items-center gap-2 text-highlight-primary mb-2">
                  <MapPin size={18} />
                  <span className="text-xs font-semibold uppercase tracking-wider text-text-primary">
                    Location
                  </span>
                </div>
                <p className="font-medium text-sm text-text-primary">Los Angeles, California</p>
                <p className="text-xs text-text-secondary mt-0.5">Remote in California</p>
              </div>

              <div className="rounded-2xl border border-bg-700 bg-bg-800/90 p-5 shadow-sm">
                <div className="flex items-center gap-2 text-highlight-primary mb-2">
                  <Clock size={18} />
                  <span className="text-xs font-semibold uppercase tracking-wider text-text-primary">
                    Response
                  </span>
                </div>
                <p className="font-medium text-sm text-text-primary">&lt; 24 Hours</p>
                <p className="text-xs text-text-secondary mt-0.5">Fast &amp; responsive</p>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="rounded-3xl border border-bg-700 bg-bg-800/90 p-6 shadow-lg">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-text-secondary mb-4">
                Connect Online
              </h3>
              <div className="flex flex-wrap gap-3">
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-bg-700 bg-bg-700/50 px-4 py-2 text-xs sm:text-sm font-medium text-zinc-300 transition-colors hover:border-highlight-primary hover:text-white"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight size={14} className="opacity-70" />
                </a>
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-bg-700 bg-bg-700/50 px-4 py-2 text-xs sm:text-sm font-medium text-zinc-300 transition-colors hover:border-highlight-primary hover:text-white"
                >
                  <span>GitHub</span>
                  <ArrowUpRight size={14} className="opacity-70" />
                </a>
                <a
                  href={socials.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-bg-700 bg-bg-700/50 px-4 py-2 text-xs sm:text-sm font-medium text-zinc-300 transition-colors hover:border-highlight-primary hover:text-white"
                >
                  <span>Resume</span>
                  <ArrowUpRight size={14} className="opacity-70" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div
            className="lg:col-span-7"
            data-aos="fade-up"
            data-aos-duration="400"
            data-aos-delay="300"
          >
            <div className="rounded-3xl border border-bg-700 bg-bg-800/90 p-6 sm:p-9 shadow-xl backdrop-blur-xl">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-5">
                  <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="font-clash-display text-2xl sm:text-3xl font-bold text-text-primary">
                    Ready to Send!
                  </h3>
                  <p className="max-w-md mx-auto text-sm sm:text-base text-text-secondary leading-relaxed">
                    Thank you, <span className="text-text-primary font-semibold">{formData.name}</span>.
                    Your email client should have opened with a message about{" "}
                    <span className="text-highlight-primary">{formData.service}</span> addressed
                    to me — just hit send, and I&apos;ll reply to{" "}
                    <span className="text-text-primary font-mono">{formData.email}</span> within 24 hours.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          service: "Data Analyst Role",
                          subject: "",
                          message: "",
                        });
                      }}
                      className="cursor-pointer inline-flex items-center gap-2 rounded-full border border-bg-700 bg-bg-700/80 px-6 py-2.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-text-primary hover:border-highlight-primary transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex items-center justify-between pb-2 border-b border-bg-700">
                    <div className="flex items-center gap-2">
                      <Sparkles size={18} className="text-highlight-primary" />
                      <h2 className="font-clash-display font-semibold text-lg sm:text-xl text-text-primary">
                        Send a Message
                      </h2>
                    </div>
                    <span className="text-xs text-text-secondary font-mono">* All fields required</span>
                  </div>

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="block text-xs font-semibold uppercase tracking-wider text-text-secondary"
                      >
                        Your Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full rounded-xl border border-bg-700 bg-bg-900/80 px-4 py-3 text-sm text-text-primary outline-none transition-colors placeholder:text-zinc-500 focus:border-highlight-primary focus:bg-bg-900"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold uppercase tracking-wider text-text-secondary"
                      >
                        Your Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full rounded-xl border border-bg-700 bg-bg-900/80 px-4 py-3 text-sm text-text-primary outline-none transition-colors placeholder:text-zinc-500 focus:border-highlight-primary focus:bg-bg-900"
                      />
                    </div>
                  </div>

                  {/* Service Inquired & Subject Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label
                        htmlFor="service"
                        className="block text-xs font-semibold uppercase tracking-wider text-text-secondary"
                      >
                        Project Type / Service
                      </label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full rounded-xl border border-bg-700 bg-bg-900 px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-highlight-primary cursor-pointer"
                      >
                        <option value="Data Analyst Role">Data Analyst Role</option>
                        <option value="BI / Dashboard Project">
                          BI / Dashboard Project
                        </option>
                        <option value="Analytics Project">Analytics Project</option>
                        <option value="Other">Other Inquiry</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="subject"
                        className="block text-xs font-semibold uppercase tracking-wider text-text-secondary"
                      >
                        Subject
                      </label>
                      <input
                        id="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="e.g. Next.js SaaS app development"
                        className="w-full rounded-xl border border-bg-700 bg-bg-900/80 px-4 py-3 text-sm text-text-primary outline-none transition-colors placeholder:text-zinc-500 focus:border-highlight-primary focus:bg-bg-900"
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold uppercase tracking-wider text-text-secondary"
                    >
                      Project Details &amp; Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your project goals, scope, timeline, and any specific requirements..."
                      className="w-full resize-y rounded-xl border border-bg-700 bg-bg-900/80 px-4 py-3 text-sm text-text-primary outline-none transition-colors placeholder:text-zinc-500 focus:border-highlight-primary focus:bg-bg-900"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-highlight px-8 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-zinc-950 transition-all hover:bg-highlight/90 active:scale-95 disabled:opacity-50 cursor-pointer shadow-lg shadow-highlight/20"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="size-4 animate-spin rounded-full border-2 border-zinc-950 border-t-transparent" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send size={15} />
                        </>
                      )}
                    </button>

                    <p className="text-xs text-text-secondary text-center sm:text-right">
                      Or write directly to{" "}
                      <a
                        href={`mailto:${socials.email}`}
                        className="text-highlight-primary hover:underline"
                      >
                        {socials.email}
                      </a>
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQs Section ===== */}
      <section className="border-t border-bg-700 pt-16 sm:pt-20">
        <div className="flex flex-col gap-8 md:flex-row md:gap-16 md:items-start justify-between">
          {/* Left Column: Heading */}
          <div className="w-full md:w-1/3 md:sticky md:top-28">
            <span
              data-aos="fade"
              data-aos-offset="0"
              data-aos-duration="300"
              data-aos-easing="ease-in-out-sine"
              data-aos-delay="0"
            >
              <SectionLabel>FAQs</SectionLabel>
            </span>
            <span
              data-aos="fade"
              data-aos-offset="0"
              data-aos-duration="300"
              data-aos-easing="ease-in-out-sine"
              data-aos-delay="200"
            >
              <AnimatedHeading
                text="Have Questions?"
                as="h2"
                className="mb-4 sm:mb-8 text-3xl sm:text-4xl md:text-5xl font-bold font-clash-display text-text-primary"
              />
            </span>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed hidden md:block">
              Here are common questions regarding my development process, availability,
              and project timelines.
            </p>
          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="w-full md:w-2/3 space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <span
                  key={faq.question}
                  data-aos="fade"
                  data-aos-offset="0"
                  data-aos-duration="300"
                  data-aos-easing="ease-in-out-sine"
                  data-aos-delay={delays[i % delays.length]}
                  className="block"
                >
                  <div className="rounded-2xl border border-bg-700 bg-bg-800 overflow-hidden transition-all duration-300">
                    <h3>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => setOpen(isOpen ? null : i)}
                        className="font-satoshi text-text-primary flex w-full flex-1 cursor-pointer items-center justify-between gap-3 p-5 text-left text-base font-medium transition-all"
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-text-secondary font-mono text-sm">
                            {String(i + 1).padStart(2, "0")}.
                          </span>
                          <span>{faq.question}</span>
                        </span>
                        <ChevronDown
                          size={20}
                          className={`chevron ml-auto shrink-0 transition-transform duration-300 ${
                            isOpen ? "rotate-180 text-highlight-primary" : "text-text-secondary"
                          }`}
                        />
                      </button>
                    </h3>
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100 px-5 pb-5"
                          : "grid-rows-[0fr] opacity-0 px-5 pb-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-text-secondary text-sm sm:text-base leading-relaxed pt-1">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </span>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
