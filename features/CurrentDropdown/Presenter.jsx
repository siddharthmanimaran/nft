import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Carousel, { CarouselItem } from "../../components/Carousel";
import { items } from "../../Data";

const Presenter = () => {
  return (
    <div>
      <Header />
      <Carousel>
        {items.map((item, i) => (
          <CarouselItem key={i} {...item} />
        ))}
      </Carousel>
      <Footer />
    </div>
  );
};

export default Presenter;
