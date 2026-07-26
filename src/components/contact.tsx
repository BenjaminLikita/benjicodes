import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "sonner";
import { motion } from "motion/react";
import { TbBrandWhatsapp, TbMail, TbArrowUpRight } from "react-icons/tb";
import { Link } from "react-router-dom";
import { sendEmail } from "../lib/emailjs";

type IFormData = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const [formData, setFormData] = useState<IFormData>({
    email: "",
    message: "",
    name: "",
  });

  const onsubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const promise = new Promise((resolve, reject) => {
      sendEmail(formData)
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
    toast.promise(promise, {
      loading: "Sending...",
      success: () => {
        setFormData({ email: "", message: "", name: "" });
        return "Sent successfully";
      },
      error: () => "Something went wrong",
    });
  };

  const onchange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <section className="bg-bg py-28 md:py-36 px-5 md:px-10 relative" id="contact">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-5xl h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" />

      <div className="max-w-5xl mx-auto space-y-14">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          <span className="font-mono text-[10px] font-medium tracking-[5px] uppercase text-text-muted">
            04 — Contact
          </span>
          <p className="font-display text-3xl md:text-4xl text-text-primary">
            Let's work together
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-20">
          {/* Left — info */}
          <motion.div
            viewport={{ once: true, amount: 0.3 }}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 flex-1"
          >
            <p className="text-text-muted text-sm md:text-[15px] leading-relaxed max-w-md">
              Have a project in mind, a question, or just want to connect? I'm
              always open to interesting conversations and collaborations.
            </p>

            <div className="space-y-3">
              <Link
                to="mailto:benjaminlikita3@gmail.com"
                className="group flex items-center gap-3 text-text-secondary hover:text-text-primary transition-colors duration-300"
              >
                <div className="bg-bg-surface border border-border/30 p-3 transition-all duration-300 group-hover:border-border/60">
                  <TbMail size={20} strokeWidth="1.5" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-body text-sm">benjaminlikita3@gmail.com</span>
                  <TbArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </Link>
              <Link
                to="https://wa.me/+2348104156868"
                className="group flex items-center gap-3 text-text-secondary hover:text-text-primary transition-colors duration-300"
              >
                <div className="bg-bg-surface border border-border/30 p-3 transition-all duration-300 group-hover:border-border/60">
                  <TbBrandWhatsapp size={20} strokeWidth="1.5" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-body text-sm">+234 810 415 6868</span>
                  <TbArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </Link>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            viewport={{ once: true, amount: 0.3 }}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex-[1.2]"
          >
            <form onSubmit={onsubmit} className="space-y-5">
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-[10px] text-text-muted font-mono uppercase tracking-[3px]">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name"
                  className="bg-transparent border-b border-border/50 px-0 py-3 w-full text-text-primary placeholder:text-text-muted/40 focus:border-text-muted focus:outline-none transition-colors duration-300 font-body text-sm"
                  value={formData.name}
                  onChange={onchange}
                  required
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-[10px] text-text-muted font-mono uppercase tracking-[3px]">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="your@email.com"
                  className="bg-transparent border-b border-border/50 px-0 py-3 w-full text-text-primary placeholder:text-text-muted/40 focus:border-text-muted focus:outline-none transition-colors duration-300 font-body text-sm"
                  value={formData.email}
                  onChange={onchange}
                  required
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-[10px] text-text-muted font-mono uppercase tracking-[3px]">
                  Message
                </label>
                <textarea
                  rows={4}
                  name="message"
                  id="message"
                  placeholder="Tell me about your project..."
                  className="bg-transparent border-b border-border/50 px-0 py-3 w-full resize-none text-text-primary placeholder:text-text-muted/40 focus:border-text-muted focus:outline-none transition-colors duration-300 font-body text-sm"
                  value={formData.message}
                  onChange={onchange}
                  required
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-accent text-white py-3 px-7 font-body font-semibold text-sm transition-all duration-300 cursor-pointer mt-2"
              >
                Send message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
