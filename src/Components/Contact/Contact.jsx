import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";
import whatsapp_icon from "../../assets/whatsapp-icon.png";
import { useLanguage } from "../../LanguageContext";

const Contact = () => {
  const { language } = useLanguage(); 
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult(language === "en" ? "Sending..." : "Mengirim...");
    const formData = new FormData(event.target);

    formData.append("access_key", "9d10af77-a8c8-49bf-957f-250dacda6f6e");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
      event.target.reset();
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          {language === "en" ? "Send us a message" : "Kirim pesan kepada kami"}{" "}
          <img src={msg_icon} alt="" />
        </h3>
        <p>
          {language === "en"
            ? "Feel free to reach out through the contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service."
            : "Jangan ragu untuk menghubungi kami melalui formulir kontak atau temukan informasi kontak kami di bawah ini. Umpan balik, pertanyaan, dan saran Anda sangat penting bagi kami untuk memberikan layanan terbaik."}
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            info@mtaxindo.com
          </li>
          <li>
            <img src={phone_icon} alt="" />
            (021) 38805177
          </li>
          <li>
            <img src={whatsapp_icon} alt="" />
            085765574651
          </li>
          <li>
            <img src={location_icon} alt="" />
            {language === "en"
              ? "Jl. TB Simatupang, Banjarsari 1 No. 8C Cilandak Barat, Jakarta Selatan 12430"
              : "Jl. TB Simatupang, Banjarsari 1 No. 8C Cilandak Barat, Jakarta Selatan 12430"}
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>
            {language === "en" ? "Your name" : "Nama Anda"}
          </label>
          <input
            type="text"
            name="name"
            placeholder={
              language === "en" ? "Enter your name" : "Masukkan nama Anda"
            }
            required
          />
          <label>
            {language === "en" ? "Email address" : "Alamat email"}
          </label>
          <input
            type="email"
            name="email"
            placeholder={
              language === "en"
                ? "Enter your email"
                : "Masukkan alamat email Anda"
            }
            required
          />
          <label>
            {language === "en" ? "Phone number" : "Nomor telepon"}
          </label>
          <input
            type="tel"
            name="phone"
            placeholder={
              language === "en"
                ? "Enter your mobile number"
                : "Masukkan nomor telepon Anda"
            }
            required
          />
          <label>
            {language === "en" ? "Write your message here" : "Tulis pesan Anda di sini"}
          </label>
          <textarea
            name="message"
            rows="6"
            placeholder={
              language === "en"
                ? "Enter your message"
                : "Masukkan pesan Anda"
            }
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            {language === "en" ? "Submit now" : "Kirim sekarang"}{" "}
            <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
