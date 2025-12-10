import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "sonner";
import { motion } from "motion/react";
import { TbBrandWhatsapp, TbMail } from "react-icons/tb";
import { Link } from "react-router-dom";

const Contact = () => {
  type IFormData = {
    name: string;
    email: string;
    message: string;
  };

  const [formData, setFormData] = useState<IFormData>({
    email: "",
    message: "",
    name: "",
  });

  const onsubmit = (e: FormEvent<HTMLFormElement>) => {
    const promise = new Promise((res, rej) => {
      const rand = Math.round(Math.random());
      setTimeout(() => (rand === 0 ? rej("") : res("")), 2000);
    });
    e.preventDefault();
    toast.promise(promise, {
      loading: "Sending...",
      success: () => {
        setFormData({ email: "", message: "", name: "" });
        return "Sent succesfully";
      },
      error: () => "Something went wrong",
    });
  };

  const onchange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;

    setFormData((prev) => {
      return {
        ...prev,
        [id]: value,
      };
    });
  };

  return (
    <section className="bg-black-2 px-5 py-20" id="contact">
      <div className="flex flex-col md:flex-row gap-10 items-center">
        <motion.div
          viewport={{ once: true, amount: 0.5 }}
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="space-y-5"
        >
          <h1 className="font-bold text-3xl">Let's talk?</h1>
          <p>
            If you have any questions, proposals, or just want to have a chat,
            feel free to get in touch.
          </p>
          <Link
            to={"mailto:benjaminlikita3@gmail.com"}
            className="border border-gray-2/20 rounded-xl flex justify-center items-center p-5 gap-3 hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <TbMail size={30} strokeWidth="1" />
            <p>Mail</p>
          </Link>
          <Link
            to={"https://wa.me/+2348104156868"}
            className="border border-gray-2/20 rounded-xl flex justify-center items-center p-5 gap-3 hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <TbBrandWhatsapp size={30} strokeWidth="1" />
            <p>Whatsapp</p>
          </Link>
        </motion.div>

        <hr className="h-[1px] md:h-[500px] w-[100%] md:w-[2px] bg-gray-2/20 border-none block " />

        <motion.div
          viewport={{ once: true, amount: 0.5 }}
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="flex-grow w-full"
        >
          <form onSubmit={onsubmit} className="space-y-5">
            <div className="space-y-1">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Insert your name"
                className="bg-gray-5 p-3 rounded-xl border border-gray-2/20 w-full"
                value={formData.name}
                onChange={onchange}
                required
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Insert your e-mail"
                className="bg-gray-5 p-3 rounded-xl border border-gray-2/20 w-full"
                value={formData.email}
                onChange={onchange}
                required
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="message">Message</label>
              <textarea
                rows={5}
                name="message"
                id="message"
                placeholder="Write your message"
                className="bg-gray-5 p-3 rounded-xl border border-gray-2/20 w-full resize-none"
                value={formData.message}
                onChange={onchange}
                required
              />
            </div>

            <input
              type="submit"
              value="Send Message"
              className="border border-gray-2/40 py-4 px-6 rounded-full hover:scale-105 transition-all duration-300 cursor-pointer"
            />
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
