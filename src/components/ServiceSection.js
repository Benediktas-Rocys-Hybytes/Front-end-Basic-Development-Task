import React from "react";

const ServiceSection = ({ language }) => {
  const translations = {
    en: {
      heading: "Our Services",
      services: [
        {
          title: "Maintenance",
          description: "The point of using Lorem Ipsum is that it has a more-or-less normal layout.",
        },
        {
          title: "Electrical",
          description: "The point of using Lorem Ipsum is that it has a more-or-less normal layout.",
        },
        {
          title: "Plumbing",
          description: "The point of using Lorem Ipsum is that it has a more-or-less normal layout.",
        },
      ],
      button: "View More",
    },
    ar: {
      heading: "خدماتنا",
      services: [
        {
          title: "الصيانة",
          description: "النقطة في استخدام لوريم إيبسوم هي أن له تخطيطًا طبيعيًا تقريبًا.",
        },
        {
          title: "الكهرباء",
          description: "النقطة في استخدام لوريم إيبسوم هي أن له تخطيطًا طبيعيًا تقريبًا.",
        },
        {
          title: "السباكة",
          description: "النقطة في استخدام لوريم إيبسوم هي أن له تخطيطًا طبيعيًا تقريبًا.",
        },
      ],
      button: "عرض المزيد",
    },
  };

  const t = translations[language] || translations.en;

  return (
    <section
      className={`service_section layout_padding ${
        language === "ar" ? "rtl" : ""
      }`}
    >
      <div className="container">
        <div className="heading_container heading_center">
          <h2>{t.heading}</h2>
        </div>
        <div className="row">
          {t.services.map((service, index) => (
            <div className="col-sm-6 col-md-4 mx-auto" key={index}>
              <div className="box">
                <div className="img-box">
                  <img src={service.imgSrc || `images/s${index + 1}.png`} alt={service.title} />
                </div>
                <div className="detail-box">
                  <h5>{service.title}</h5>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="btn-box">
          <a href="/">{t.button}</a>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
