"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative flex md:min-h-screen flex-col items-center justify-center py-20 md:py-32 bg-secondary/20 overflow-hidden"
    >
      <div className="z-10 w-full max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Mail className="h-6 w-6" />
          </div>
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
             <form className="flex flex-col space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                   <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                      <input 
                        id="name" 
                        type="text" 
                        placeholder="Your Name" 
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                   </div>
                   <div className="space-y-2">
                       <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                      <input 
                        id="email" 
                        type="email" 
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
                     placeholder="Your Subject" 
                     className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                   />
                </div>
                
                <div className="space-y-2">
                   <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                   <textarea
                     id="message" 
                     rows={4}
                     placeholder="Your Message..." 
                     className="flex h-32 w-full resize-none rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 overflow-y-auto"
                   />
                </div>
                
                <button
                  type="submit"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                   Send Message
                   <Send className="ml-2 h-4 w-4" />
                </button>
             </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
