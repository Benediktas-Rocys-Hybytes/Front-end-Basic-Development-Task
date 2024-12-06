import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/style.css"; 

const clientData = [
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
  
];

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      style={{ ...style, display: "block", background: "#0355cc" }}
      onClick={onClick}
    >
      &#x276F;
    </button>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      style={{ ...style, display: "block", background: "#0355cc" }}
      onClick={onClick}
    >
      &#x276E;
    </button>
  );
};

const renderStars = (count) => {
  return Array.from({ length: 5 }).map((_, index) => (
    <i
      key={index}
      className={`fa fa-star${index < count ? "" : "-o"}`}
      aria-hidden="true"
      style={{ color: "#fbaf5d", marginRight: "5px" }}
    ></i>
  ));
};

const ClientSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
    <section className="client_section">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>What Our Clients Say</h2>
        </div>
        <div className="carousel-wrap layout_padding2-top">
          <Slider {...settings}>
            {clientData.map((client, index) => (
              <div className="item" key={index}>
                <div className="box">
                  <div className="client_id">
                    <div className="img-box">
                      <img src={client.image} alt={client.name} />
                    </div>
                    <div className="client_detail">
                      <div className="client_info">
                        <h6>{client.name}</h6>
                        {renderStars(client.stars)}
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
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
