import React from "react";

const SliderSection = ({ language }) => {
  // Translations for the slider section
  console.log(language)
  const translations = {
    en: {
      title: "Repair and Maintenance Services",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui harum voluptatem adipisci. Quos molestiae saepe dicta nobis pariatur, tempora iusto, ad possimus soluta hic praesentium mollitia consequatur beatae, aspernatur culpa.",
      button: "Contact Us",
    },
    ar: {
      title: "خدمات الإصلاح والصيانة",
      description:
        "لوريم ايبسوم هو نص تجريبي يستخدم في صناعات الطباعة والنشر. يعد أداة فعالة لعرض تخطيطات التصاميم قبل تنفيذ النصوص النهائية.",
      button: "اتصل بنا",
    },
  };

  // Safely get the translation based on the language prop
  const t = translations[language] || translations.en;

  // Debugging: Check if language and translations are correct
  console.log("SliderSection Language:", language);
  console.log("SliderSection Translations:", t);

  return (
    <section className={`slider_section ${language === "ar" ? "rtl" : ""}`}>
      <div className="container">
        <div className="row">
          {/* Text Section */}
          <div className={`col-md-6 ${language === "ar" ? "order-md-2" : ""}`}>
            <div className="detail-box">
              <h1>
                {t.title.split(" ").map((word, index) => (
                  <React.Fragment key={index}>
                    {word} <br />
                  </React.Fragment>
                ))}
              </h1>
              <p>{t.description}</p>
              <a href="/">{t.button}</a>
            </div>
          </div>

          {/* Image Section */}
          <div className={`col-md-6 ${language === "ar" ? "order-md-1" : ""}`}>
            <div className="img-box">
              <img src="images/slider-img.png" alt={t.title} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderSection;
