// ImageSlider component

"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image } from "@nextui-org/react";

export const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="px-5">
        <Image
          src="/images/1.jpg"
          alt="Landscape 1"
          width={500}
          height={250}
          isZoomed
          // className="h-full w-full object-contain"
        />
      </div>
      <div className="px-2">
        <Image
          src="/images/2.jpg"
          alt="Mountain"
          width={500}
          height={250}
          isZoomed
          // className="h-full w-full object-contain"
        />
      </div>
      <div className="px-2">
        <Image
          src="/images/3.jpg"
          alt="Beach"
          width={500}
          height={250}
          isZoomed

          // className="h-full w-full object-contain"
        />
      </div>
      <div className="px-2">
        <Image
          src="/images/4.jpg"
          alt="City"
          width={500}
          height={250}
          isZoomed
          // className="h-full w-full object-contain"
        />
      </div>
      <div className="px-2">
        <Image
          src="/images/5.jpg"
          alt="Forest"
          width={500}
          height={250}
          isZoomed
          // className="h-full w-full object-contain"
        />
      </div>
    </Slider>
  );
};
