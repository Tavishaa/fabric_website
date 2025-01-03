import { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function NextArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-primary/80 hover:bg-primary text-white p-3 rounded-full transition-all duration-300"
    >
      <FontAwesomeIcon icon={faChevronRight} />
    </button>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-primary/80 hover:bg-primary text-white p-3 rounded-full transition-all duration-300"
    >
      <FontAwesomeIcon icon={faChevronLeft} />
    </button>
  );
}

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const slides = [
    {
      image: 'https://jhanjitextiles.com/wp-content/uploads/2023/07/Fusible-Chemical-Bonded-Fabric.webp',
      caption: 'Chemical Bonded Non Woven Fabrics',
    },
    {
      image: 'https://doubleghoda.com/wp-content/uploads/2020/09/non-woven-interlinings1.jpg',
      caption: 'Fusible Interlinings',
    },
    {
      image: 'https://images.unsplash.com/photo-1599589915468-b4c71ed62543?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Embroidery Backing Fabrics',
    },
  ];

  return (
    <div className="relative">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[500px]">
            <img
              src={slide.image}
              alt={slide.caption}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
              <h3 className="text-2xl font-bold">{slide.caption}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;