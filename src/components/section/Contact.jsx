"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Linkedin, CheckCircle2, AlertCircle, X } from "lucide-react";

// Themed Toaster Component
const Toast = ({ message, type, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
      className={`fixed bottom-8 right-4 z-50 flex items-center gap-3 rounded-lg border px-4 py-3 shadow-lg backdrop-blur-md ${type === "success"
          ? "bg-green-500/10 border-green-500/50 text-green-500"
          : "bg-red-500/10 border-red-500/50 text-red-500"
        }`}
    >
      {type === "success" ? (
        <CheckCircle2 className="h-5 w-5" />
      ) : (
        <AlertCircle className="h-5 w-5" />
      )}
      <p className="text-sm font-medium">{message}</p>
      <button
        onClick={onClose}
        className="ml-2 rounded-full p-1 hover:bg-foreground/10 transition-colors"
      >
        <X className="h-4 w-4" />
      </button>
    </motion.div>
  );
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [status, setStatus] = useState("idle"); // idle, submitting, success, error
  const [toast, setToast] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    const SCRIPT_URL = process.env.NEXT_PUBLIC_CONTACT_URL;

    try {
      // Create form data for Apps Script (traditional URL-encoded)
      const formBody = new URLSearchParams();
      Object.keys(formData).forEach(key => {
        formBody.append(key, formData[key]);
      });

      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        body: formBody,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      const result = await response.json();

      if (result.result === "success") {
        setStatus("success");
        setToast({ message: "Message sent successfully!", type: "success" });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(result.error || "Failed to send");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
      setToast({ message: "Something went wrong. Please try again.", type: "error" });
    }
  };

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  return (
    <section
      id="contact"
      className="relative flex min-h-[40vh] md:min-h-[60vh] flex-col items-center justify-center py-12 md:py-20 bg-zinc-950 overflow-hidden scroll-mt-20"
    >
      <div className="z-10 w-full max-w-7xl px-4 md:px-6">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start gap-6"
          >

            <h2 className="text-5xl md:text-7xl font-black font-heading tracking-tighter text-foreground leading-[0.9] uppercase">
               GET IN <span className="text-primary italic">TOUCH.</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-start space-y-8"
          >
            <h3 className="text-2xl font-black font-heading tracking-tight text-white italic text-left">
              Let's Connect.
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed text-left border-l-2 border-primary/20 pl-4">
              I'm currently open to new opportunities and collaborations.
              Whether you have a question or just want to connect, feel free to reach out.
            </p>

            <div className="space-y-6 w-full">

              <div className="flex flex-row items-center gap-4 text-left group">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/[0.04] border border-white/10 text-primary group-hover:border-primary/40 group-hover:bg-primary/5 transition-all duration-300">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-500 mb-0.5">Email</h4>
                  <a href="mailto:haldar.saumili843@gmail.com" className="text-sm font-medium text-neutral-300 hover:text-primary transition-colors break-all">
                    haldar.saumili843@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex flex-row items-center gap-4 text-left group">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/[0.04] border border-white/10 text-primary group-hover:border-primary/40 group-hover:bg-primary/5 transition-all duration-300">
                  <Linkedin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-500 mb-0.5">LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/saumili-haldar-0804s2003" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-neutral-300 hover:text-primary transition-colors break-all">
                    linkedin.com/in/saumili-haldar
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative rounded-2xl border border-white/[0.07] bg-white/[0.02] backdrop-blur-sm p-6 md:p-8 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-500">Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="flex h-10 w-full rounded-md border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-primary/50 focus:bg-white/[0.05] transition-all duration-200"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-500">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="flex h-10 w-full rounded-md border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-primary/50 focus:bg-white/[0.05] transition-all duration-200"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-500">Subject</label>
                <input
                  id="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Your Subject"
                  className="flex h-10 w-full rounded-md border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-primary/50 focus:bg-white/[0.05] transition-all duration-200"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-500">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message..."
                  className="flex h-24 w-full resize-none rounded-md border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-primary/50 focus:bg-white/[0.05] transition-all duration-200 overflow-y-auto"
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center justify-center whitespace-nowrap bg-primary text-black px-4 py-2 text-xs font-black uppercase tracking-widest hover:bg-white transition-colors duration-300 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]"
              >
                {status === "submitting" ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
