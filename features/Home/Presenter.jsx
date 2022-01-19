import Header from "../../components/Header";
import Carousel, { CarouselItem } from "../../components/Carousel";
import Footer from "../../components/Footer";

const Presenter = () => {
  const items = [
    {
      name: "Aya Bouchiha",
      description: "Full Stack Web Developer",
      image:
        "https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ",
    },
    {
      name: "John Doe",
      description: "Author",
      image:
        "https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ",
    },
    {
      name: "Pitsu Coma",
      description: "Math Student",
      image:
        "https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ",
    },
  ];
  return (
    <>
      <Header />
      <Carousel>
        {items.map((item, i) => (
          <CarouselItem key={i} {...item} />
        ))}
      </Carousel>
      <Footer />
    </>
  );
};

export default Presenter;
