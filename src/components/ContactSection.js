import React from "react";

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
    },
  };

  const t = translations[language] || translations.en;

  return (
    <section
      className={`contact_section layout_padding ${
        language === "ar" ? "rtl" : ""
      }`}
    >
      <div className="container">
        <div className="heading_container">
          <h2>{t.heading}</h2>
        </div>
        <div className="row">
          {/* Contact Form */}
          <div className={`col-md-6 ${language === "ar" ? "order-md-2" : ""}`}>
            <form action="">
              <div>
                <input type="text" placeholder={t.placeholders.name} />
              </div>
              <div>
                <input type="text" placeholder={t.placeholders.phone} />
              </div>
              <div>
                <input type="email" placeholder={t.placeholders.email} />
              </div>
              <div>
                <input
                  type="text"
                  className="message-box"
                  placeholder={t.placeholders.message}
                />
              </div>
              <div className="d-flex">
                <button type="submit">{t.button}</button>
              </div>
            </form>
          </div>
          {/* Map */}
          <div className={`col-md-6 ${language === "ar" ? "order-md-1" : ""}`}>
            <div className="map_container">
              <div className="map">
                <iframe
                  title="Google Map"
                  src="https://maps.google.com/maps?q=Old%20City%20Hall%20Station&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: "0" }}
                  allowFullScreen=""
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
