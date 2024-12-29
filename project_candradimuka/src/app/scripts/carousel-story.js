import { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const StoryCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const pages = [
    // GROUP
    <div key="0" className="flex items-center justify-center w-full h-full">
      <p className="mt-4 text-[#000000] position-absolute"
        style={{
          top:"19%",
          fontFamily:"Island Moments",
          WebkitTextStroke:"2px #000000",
          fontSize:250
        }}
      >Story</p>
      <p className="mt-4 text-[#000000] position-absolute"
        style={{
          paddingLeft:"1%",
          top:"20.5%",
          fontFamily:"Island Moments",
          WebkitTextStroke:"2px #000000",
          opacity:0.3,
          fontSize:250
        }}
      >Story</p>
      <img className="position-absolute mb-[37%] ml-[4.3%]"
        src='/res_img/Icons/Frame.png'
        alt="Frame"
      />
    </div>,

        // Babad sigalagala
    <div key="1" className="flex items-center justify-center w-full h-full" style={
      {
        backgroundImage: "url('/res_img/Story/Prolog.png')",
        backgroundPositionY: 95,
        backgroundSize: "100vw 90vh",
        backgroundRepeat: "no-repeat", // Prevents tiling of the image
      }
    }>
      <img className="position-absolute w-[90%] mb-[3%]"
        src='/res_img/Mechanics/Bottom-border.png'
        alt="Frame"
      />
      <p className="mt-4 position-absolute mb-[60%]"
        style={{
          fontFamily:"Island Moments",
          WebkitTextStroke:"1px #FFFFFF",
          fontSize:150
        }}
      >Prologue</p>
      <p className="mt-4 position-absolute mb-[59%]"
        style={{
          fontFamily:"Island Moments",
          WebkitTextStroke:"1px #FFFFFF",
          fontSize:150,
          opacity:0.5,
        }}
      >Prologue</p>
      <p className="mt-4 position-absolute mb-[-2%]"
        style={{
          fontFamily:"Island Moments",
          WebkitTextStroke:"1px #FFFFFF",
          fontSize:150
        }}
      >Babad Bale Sigala Gala</p>
      <p className="mt-4 position-absolute mb-[-3%]"
        style={{
          fontFamily:"Island Moments",
          WebkitTextStroke:"1px #FFFFFF",
          fontSize:150,
          opacity:0.5,
        }}
      >Babad Bale Sigala Gala</p>
    </div>,
  ];

  return (

    <Carousel 
      activeIndex={index} 
      onSelect={handleSelect}
      prevIcon={<img src="/res_img/Icons/arrow_left.png" alt="Previous" />}
      nextIcon={<img src="/res_img/Icons/arrow_right.png" alt="Next" />}
      interval={null}
      >
      {pages.map((page, idx) => (
        <Carousel.Item key={idx}>
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: '154vh', width: "100vw"}}
          >
            {page}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default StoryCarousel;