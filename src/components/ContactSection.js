import React, { useState } from "react";
import { db } from "../firebase"; // Import Firebase config
import { collection, addDoc } from "firebase/firestore";

const ContactSection = ({ language }) => {
  const translations = {
    en: {
      heading: "Contact Us",
      placeholders: {
        name: "Name",
        phone: "Phone Number",
        email: "Email",
        message: "Message",
      },
      button: "SEND",
      error: {
        name: "Name is required",
        phone: "Phone number is required",
        email: "Invalid email format",
        message: "Message should be at least 10 characters",
      },
      success: "Message sent successfully!",
      failure: "Error sending message, please try again.",
    },
    ar: {
      heading: "اتصل بنا",
      placeholders: {
        name: "الاسم",
        phone: "رقم الهاتف",
        email: "البريد الإلكتروني",
        message: "رسالة",
      },
      button: "إرسال",
      error: {
        name: "الاسم مطلوب",
        phone: "رقم الهاتف مطلوب",
        email: "تنسيق البريد الإلكتروني غير صحيح",
        message: "يجب أن تحتوي الرسالة على 10 أحرف على الأقل",
      },
      success: "تم إرسال الرسالة بنجاح!",
      failure: "حدث خطأ أثناء الإرسال، يرجى المحاولة مرة أخرى.",
    },
  };

  const t = translations[language] || translations.en;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const validateForm = () => {
    let errors = {};
    if (!formData.name) errors.name = t.error.name;
    if (!formData.phone) errors.phone = t.error.phone;
    if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = t.error.email;
    if (formData.message.length < 10) errors.message = t.error.message;
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    if (!validateForm()) return;

    try {
      await addDoc(collection(db, "contacts"), formData);
      setStatus("success");
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch (error) {
      console.error("Error adding document: ", error);
      setStatus("failure");
    }
  };

  return (
    <section className={`contact_section layout_padding ${language === "ar" ? "rtl" : ""}`}>
      <div className="container">
        <div className="heading_container">
          <h2>{t.heading}</h2>
        </div>
        <div className="row">
          <div className={`col-md-6 ${language === "ar" ? "order-md-2" : ""}`}>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  placeholder={t.placeholders.name}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="text-black"
                />
                {errors.name && <p className="error">{errors.name}</p>}
              </div>
              <div>
                <input
                  type="text"
                  placeholder={t.placeholders.phone}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="text-black"
                />
                {errors.phone && <p className="error">{errors.phone}</p>}
              </div>
              <div>
                <input
                  type="email"
                  placeholder={t.placeholders.email}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="text-black"
                />
                {errors.email && <p className="error">{errors.email}</p>}
              </div>
              <div>
                <input
                  type="text"
                  className="message-box text-black"
                  placeholder={t.placeholders.message}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
                {errors.message && <p className="error">{errors.message}</p>}
              </div>
              <div className="d-flex">
                <button type="submit">{t.button}</button>
              </div>
              {status === "success" && <p className="success">{t.success}</p>}
              {status === "failure" && <p className="error">{t.failure}</p>}
            </form>
          </div>
          <div className={`col-md-6 ${language === "ar" ? "order-md-1" : ""}`}>
            <div className="map_container">
              <div className="map">
                <iframe
                  title="Google Map"
                  src="https://maps.google.com/maps?q=Old%20City%20Hall%20Station&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: "0" }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
