"use client";

import { useState } from "react";
import { Mail, Send } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
    alert("Message sent! (This is a demo - connect to your backend)");
  };

  return (
    <section id="contact" className="relative py-24 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-white/60 text-sm uppercase tracking-widest mb-2">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">Contact Me</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Email Card */}
          <div className="card-glow bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-primary/20 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
            <p className="text-white/60 mb-3">joeee0ee@gmail.com</p>
            <a
              href="mailto:joeee0ee@gmail.com"
              className="text-primary hover:underline"
            >
              Send a message
            </a>
          </div>

          {/* WhatsApp Card */}
          <div className="card-glow bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-primary/20 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-3xl">📱</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">WhatsApp</h3>
            <p className="text-white/60 mb-3">(+60) 177700711</p>
            <a
              href="https://wa.me/60177700711"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Your Full Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full px-4 py-3 bg-card/50 border border-primary/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full px-4 py-3 bg-card/50 border border-primary/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={5}
              className="w-full px-4 py-3 bg-card/50 border border-primary/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-primary transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/80 transition-all btn-glow mx-auto"
          >
            <Send className="w-4 h-4" />
            Send Message!
          </button>
        </form>
      </div>
    </section>
  );
}
