import * as React from "react";
import Header from "../../components/Header";
import Carousel, { CarouselItem } from "../../components/Carousel";
import Footer from "../../components/Footer";
import { items, activity } from "../../Data";
import ActivityCard from "../../components/ActivityCard";

const Presenter = () => {
  return (
    <>
      <Header />
      <Carousel>
        {items.map((item, i) => (
          <CarouselItem key={i} {...item} />
        ))}
      </Carousel>
      <h1>Activity</h1>
      {activity.map((item, i) => (
        <ActivityCard key={i} post={item} />
      ))}

      <Footer />
    </>
  );
};

export default Presenter;
