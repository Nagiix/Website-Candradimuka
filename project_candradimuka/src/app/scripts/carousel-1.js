import { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const PageCarousel = ({ pages }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {pages.map((page, idx) => (
        <Carousel.Item key={idx}>
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: '100vh' }}
          >
            {page}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default PageCarousel;