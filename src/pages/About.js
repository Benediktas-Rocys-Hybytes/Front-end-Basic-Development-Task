import React from "react";
import "../styles/style.css";
import Footer from "../components/Footer";

const About = ({ language }) => {
  const translations = {
    en: {
      heading: "About us",
      description: `
        There are many variations of passages of Lorem Ipsum available,
        but the majority have suffered alteration in some form, by
        injected humour, or randomised. There are many variations of
        passages of Lorem Ipsum available, but the majority have
        suffered alteration in some form, by injected humour, or
        randomised.
      `,
      button: "Read More",
    },
    ar: {
      heading: "معلومات عنا",
      description: `
        هناك العديد من الأشكال المختلفة لمقاطع لوريم إيبسوم المتاحة،
        لكن الغالبية تعرضت لتعديلات في شكل ما، سواء بإدخال الفكاهة
        أو عشوائيات. هناك العديد من الأشكال المختلفة لمقاطع لوريم
        إيبسوم المتاحة، لكن الغالبية تعرضت لتعديلات في شكل ما.
      `,
      button: "اقرأ المزيد",
    },
  };

  const t = translations[language] || translations.en;

  return (
    <>
      <section
        className={`about_section layout_padding ${
          language === "ar" ? "rtl" : ""
        }`}
      >
        <div className="container">
          <div className="row">
            {/* About Text Section */}
            <div
              className={`col-lg-5 col-md-6 ${
                language === "ar" ? "order-lg-2" : ""
              }`}
            >
              <div className="detail-box">
                <h2>{t.heading}</h2>
                <p>{t.description}</p>
                <a href="#">{t.button}</a>
              </div>
            </div>
            {/* About Image Section */}
            <div
              className={`col-lg-7 col-md-6 ${
                language === "ar" ? "order-lg-1" : ""
              }`}
            >
              <div className="img-box">
                <img src="images/about-img.jpg" alt={t.heading} />
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default About;
