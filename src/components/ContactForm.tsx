import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
    console.log(emailjs)
    console.log(import.meta.env.VITE_EMAILJS_SERVICE_ID);
  const form = useRef<HTMLFormElement | null>(null);

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  // SEND THE EMAIL USING THE TEMPLATE AND PUBLIC KEYS
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!form.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("Message Sent Successfully!");
        form.current?.reset(); // ✅ safe
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to send message.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    
    <form
      ref={form}
      onSubmit={sendEmail}
      className="
        xl:gap-[2rem] xl:pt-[2rem]
        lg:gap-[2rem] lg:pt-[1rem]
        md:gap-[1rem] md:pt-[1rem] md:items-start
        gap-[1rem] pt-[2rem]
        max-w-xl flex flex-col items-center
      "
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="pl-[0.5rem] py-[0.5rem] w-full bg-white text-black outline-none focus:ring-2 focus:ring-highlight1"
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
        className=" pl-[0.5rem] py-[0.5rem] w-full bg-white text-black outline-none focus:ring-2 focus:ring-highlight1"
      />

      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
        className="pl-[0.5rem]  py-[0.5rem] w-full bg-white text-black outline-none focus:ring-2 focus:ring-highlight1"
      />

      <textarea
        rows={5}
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
        className="pl-[0.5rem] py-[0.5rem] w-full bg-white text-black outline-none resize-none focus:ring-2 focus:ring-highlight1"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-[14rem] py-[1rem] bg-object1 text-white font-bold hover:opacity-90 disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;
