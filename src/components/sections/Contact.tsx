import { FaInstagram, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { SectionWrapper } from "../../hoc";
import { Header } from "../atoms/Header";
import { config } from "../../constants/config";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 py-10">
      <Header useMotion={false} {...config.contact} />

      <div className="flex gap-8 text-4xl text-white">
        {/* Instagram */}
        <a
          href="https://www.instagram.com/moh_sahmat"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram className="hover:text-pink-500 transition-colors duration-300" />
        </a>

        {/* Email */}
        <a
          href="mailto:sahmatmuslih@gmail.com"
          aria-label="Email"
        >
          <FaEnvelope className="hover:text-yellow-400 transition-colors duration-300" />
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/+6285393913005" // Ganti dengan nomormu
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <FaWhatsapp className="hover:text-green-400 transition-colors duration-300" />
        </a>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
