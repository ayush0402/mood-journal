import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Testimony from "./Testimony";

const ControlledCarousel = ({ testimonies }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className="carousel" activeIndex={index} onSelect={handleSelect}>
      {testimonies.map((testimony) => {
        return (
          <Carousel.Item>
            <Testimony testimony={testimony} />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default ControlledCarousel;
