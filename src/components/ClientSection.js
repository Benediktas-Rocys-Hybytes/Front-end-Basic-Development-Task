import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/style.css";

const ClientSection = ({ language }) => {
  const translations = {
    en: {
      heading: "What Our Clients Say",
      clients: [
        {
          image: "images/client-1.jpg",
          name: "Jorch Morik",
          stars: 5,
          text: "Chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum.",
        },
        {
          image: "images/client-2.jpg",
          name: "Jorch Morik",
          stars: 5,
          text: "Chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum.",
        },
      ],
    },
    ar: {
      heading: "ماذا يقول عملاؤنا",
      clients: [
        {
          image: "images/client-1.jpg",
          name: "خورش موريك",
          stars: 5,
          text: "النصوص حسب الضرورة، مما يجعل هذا أول مولد حقيقي على الإنترنت. يستخدم قاموسًا يحتوي على أكثر من 200 كلمة لاتينية، بالإضافة إلى مجموعة من الهياكل الجملية النموذجية لإنشاء لوريم إيبسوم.",
        },
        {
          image: "images/client-2.jpg",
          name: "خورش موريك",
          stars: 5,
          text: "النصوص حسب الضرورة، مما يجعل هذا أول مولد حقيقي على الإنترنت. يستخدم قاموسًا يحتوي على أكثر من 200 كلمة لاتينية، بالإضافة إلى مجموعة من الهياكل الجملية النموذجية لإنشاء لوريم إيبسوم.",
        },
      ],
    },
  };

  const t = translations[language] || translations.en;

  const sliderRef = React.useRef(null);

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <section
      className={`client_section ${language === "ar" ? "rtl" : ""}`}
    >
      <div className="container">
        <div className="heading_container heading_center">
          <h2>{t.heading}</h2>
        </div>
        <div className="carousel-wrap layout_padding2-top">
          <Slider {...settings} ref={sliderRef}>
            {t.clients.map((client, index) => (
              <div className="item" key={index}>
                <div className="box">
                  <div className="client_id">
                    <div className="img-box">
                      <img src={client.image} alt={client.name} />
                    </div>
                    <div className="client_detail">
                      <div className="client_info">
                        <h6>{client.name}</h6>
                        {Array.from({ length: 5 }).map((_, starIndex) => (
                          <i
                            key={starIndex}
                            className={`fa fa-star${starIndex < client.stars ? "" : "-o"}`}
                            aria-hidden="true"
                            style={{ color: "#fbaf5d", marginRight: "5px" }}
                          ></i>
                        ))}
                      </div>
                      <i className="fa fa-quote-left" aria-hidden="true"></i>
                    </div>
                  </div>
                  <div className="client_text">
                    <p>{client.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          {/* Navigation buttons */}
          <div className="carousel-wrap owl-nav">
            <button className="owl-prev" onClick={handlePrev}>
              &#x276E;
            </button>
            <button className="owl-next" onClick={handleNext}>
              &#x276F;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
