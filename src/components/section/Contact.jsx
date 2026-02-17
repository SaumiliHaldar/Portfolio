"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Phone, CheckCircle2, AlertCircle, X } from "lucide-react";

// Themed Toaster Component
const Toast = ({ message, type, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
      className={`fixed bottom-8 right-4 z-50 flex items-center gap-3 rounded-lg border px-4 py-3 shadow-lg backdrop-blur-md ${
        type === "success" 
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
      className="relative flex min-h-[40vh] md:min-h-[60vh] flex-col items-center justify-center py-12 md:py-20 bg-secondary/20 overflow-hidden"
    >
      <div className="z-10 w-full max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Get in Touch
          </h2>
          <div className="mt-4 h-1 w-20 rounded-full bg-primary" />
          <p className="mt-4 max-w-xl text-muted-foreground">
             Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
           {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center lg:items-start space-y-8"
          >
             <h3 className="text-2xl font-semibold text-foreground text-center lg:text-left">
                Let's Connect!
             </h3>
             <p className="text-muted-foreground text-center lg:text-left">
                I'm currently open to new opportunities and collaborations. 
                Whether you have a question or just want to connect, feel free to reach out.
             </p>
             
             <div className="space-y-6">
                <div className="flex flex-row items-center gap-4 text-left">
                   <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Mail className="h-5 w-5" />
                   </div>
                   <div>
                      <h4 className="font-medium text-foreground">Email</h4>
                      <a href="mailto:haldar.saumili843@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                         haldar.saumili843@gmail.com
                      </a>
                   </div>
                </div>
                
                <div className="flex flex-row items-center gap-4 text-left">
                   <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <MapPin className="h-5 w-5" />
                   </div>
                   <div>
                      <h4 className="font-medium text-foreground">Location</h4>
                      <p className="text-muted-foreground">
                         Kolkata, India
                      </p>
                   </div>
                </div>

                <div className="flex flex-row items-center gap-4 text-left">
                   <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Phone className="h-5 w-5" />
                   </div>
                   <div>
                      <h4 className="font-medium text-foreground">Phone</h4>
                      <p className="text-muted-foreground">
                         +91 7063737272
                      </p>
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
             className="relative rounded-2xl border border-border bg-card p-8 shadow-sm"
          >
             <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                   <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                      <input 
                        id="name" 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name" 
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                   </div>
                   <div className="space-y-2">
                       <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                      <input 
                        id="email" 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email" 
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                   </div>
                </div>
                
                <div className="space-y-2">
                   <label htmlFor="subject" className="text-sm font-medium text-foreground">Subject</label>
                   <input 
                     id="subject" 
                     type="text" 
                     required
                     value={formData.subject}
                     onChange={handleChange}
                     placeholder="Your Subject" 
                     className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                   />
                </div>
                
                <div className="space-y-2">
                   <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                   <textarea
                     id="message" 
                     rows={4}
                     required
                     value={formData.message}
                     onChange={handleChange}
                     placeholder="Your Message..." 
                     className="flex h-32 w-full resize-none rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 overflow-y-auto"
                   />
                </div>
                
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
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
