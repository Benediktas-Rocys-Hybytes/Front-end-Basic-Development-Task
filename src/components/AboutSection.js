import React from "react";

const AboutSection = ({ language }) => {
  const translations = {
    en: {
      title: "About Us",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised. There are many variations of passages of Lorem Ipsum available.",
      button: "Read More",
    },
    ar: {
      title: "معلومات عنا",
      description:
        "هناك العديد من الأشكال المختلفة لمقاطع لوريم إيبسوم المتاحة، لكن الغالبية تعرضت لتعديلات في شكل ما، سواء بإدخال الفكاهة أو عشوائيات. هناك العديد من الأشكال المختلفة لمقاطع لوريم إيبسوم المتاحة.",
      button: "اقرأ المزيد",
    },
  };

  const t = translations[language] || translations.en;

  return (
    <section
      className={`about_section layout_padding-bottom ${
        language === "ar" ? "rtl" : ""
      }`}
    >
      <div className="container">
        <div className="row">
        
          <div className={`col-lg-5 col-md-6 ${language === "ar" ? "order-lg-2" : ""}`}>
            <div className="detail-box">
              <h2>{t.title}</h2>
              <p>{t.description}</p>
              <a href="/">{t.button}</a>
            </div>
          </div>
       
          <div className={`col-lg-7 col-md-6 ${language === "ar" ? "order-lg-1" : ""}`}>
            <div className="img-box">
              <img src="images/about-img.jpg" alt={t.title} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
