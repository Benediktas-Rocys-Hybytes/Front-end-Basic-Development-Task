import React from "react";

const ProfessionalSection = ({ language }) => {
  const translations = {
    en: {
      title: "We Provide Professional Home Services",
      description:
        "Randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
      button: "Read More",
    },
    ar: {
      title: "نحن نقدم خدمات منزلية احترافية",
      description:
        "كلمات عشوائية لا تبدو قابلة للتصديق على الإطلاق. إذا كنت ستستخدم فقرة من لوريم إيبسوم، فأنت بحاجة إلى التأكد من عدم وجود أي شيء محرج مخفي في وسط النص.",
      button: "اقرأ المزيد",
    },
  };

  const t = translations[language] || translations.en;

  return (
    <section
      className={`professional_section layout_padding ${
        language === "ar" ? "rtl" : ""
      }`}
    >
      <div className="container">
        <div className="row">
          {/* Image Section */}
          <div
            className={`col-md-6 ${language === "ar" ? "order-md-2" : "order-md-1"}`}
          >
            <div className="img-box">
              <img
                src="images/professional-img.png"
                alt={t.title}
              />
            </div>
          </div>
          {/* Text Section */}
          <div
            className={`col-md-6 ${language === "ar" ? "order-md-1" : "order-md-2"}`}
          >
            <div className="detail-box">
              <h2>
                {t.title.split(" ").map((word, index) => (
                  <React.Fragment key={index}>
                    {word} <br />
                  </React.Fragment>
                ))}
              </h2>
              <p>{t.description}</p>
              <a href="/">{t.button}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSection;
