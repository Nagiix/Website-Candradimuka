import { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const MechanicCarousel = () => {
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
      >Mechanics</p>
      <p className="mt-4 text-[#000000] position-absolute"
        style={{
          paddingLeft:"1%",
          top:"20.5%",
          fontFamily:"Island Moments",
          WebkitTextStroke:"2px #000000",
          opacity:0.3,
          fontSize:250
        }}
      >Mechanics</p>
      <img className="position-absolute mb-[37%] ml-[4.3%]"
        src='/res_img/Icons/Frame.png'
        alt="Frame"
      />
    </div>,

        // Turn Based
    <div key="1" className="flex items-center justify-center w-full h-full">
      <img className="position-absolute w-[90%] mb-[3%]"
        src='/res_img/Mechanics/Bottom-border.png'
        alt="Frame"
      />
      <p className="mt-4 text-[#000000] position-absolute mb-[-2%]"
        style={{
          fontFamily:"Island Moments",
          WebkitTextStroke:"2px #000000",
          fontSize:100
        }}
      >Turn Based Mechanics</p>
      <img className="position-absolute w-[55%] mb-[35%]"
        src='/res_img/Mechanics/Turnbased.png'
        alt="Frame"
      />
    </div>,
  
  // Real Time Explo
    <div key="2" className="flex items-center justify-center w-full h-full">
      <img className="position-absolute w-[90%] mb-[3%]"
        src='/res_img/Mechanics/Bottom-border.png'
        alt="Frame"
      />
      <p className="mt-4 text-[#000000] position-absolute mb-[-2%]"
        style={{
          fontFamily:"Island Moments",
          WebkitTextStroke:"2px #000000",
          fontSize:100
        }}
      >Real Time Exploration</p>
      <img className="position-absolute w-[55%] mb-[35%]"
        src='/res_img/Mechanics/RTE.png'
        alt="Frame"
      />
    </div>,

    // Events
    <div key="3" className="flex items-center justify-center w-full h-full">
    <img className="position-absolute w-[25%] h-[40%] mb-[23%] ml-[40%]"
      src='/res_img/Icons/Frame-Top.png'
      alt="Frame"
    />
    <p className="mt-4 text-[#000000] position-absolute mb-[24%] ml-[40%]"
      style={{
        fontFamily:"Island Moments",
        WebkitTextStroke:"2px #000000",
        fontSize:150,
        textAlign:"center",
      }}
    >Encounters <br/> and <br/> Events</p>
    <img className="position-absolute w-[33%] h-[55%] mb-[23%] mr-[45%]"
      src='/res_img/Mechanics/Events.png'
      alt="Frame"
    />
  </div>,

      // Artifacts
  <div key="4" className="flex items-center justify-center w-full h-full">
    <img className="position-absolute w-[30%] h-[40%] mb-[23%] ml-[40%]"
      src='/res_img/Icons/Frame-Top.png'
      alt="Frame"
    />
    <p className="mt-4 text-[#000000] position-absolute mb-[24%] ml-[40%]"
      style={{
        fontFamily:"Island Moments",
        WebkitTextStroke:"2px #000000",
        fontSize:150,
        textAlign:"center",
      }}
    >Relics <br/> and <br/> Artifacts</p>
    <img className="position-absolute w-[33%] h-[55%] mb-[23%] mr-[45%]"
      src='/res_img/Mechanics/egogifts.png'
      alt="Frame"
    />
  </div>,
  ];

  return (

    <Carousel 
      activeIndex={index} 
      onSelect={handleSelect}
      prevIcon={<img src="res_img/Icons/arrow_left.png" alt="Previous" />}
      nextIcon={<img src="res_img/Icons/arrow_right.png" alt="Next" />}
      interval={50000}
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

export default MechanicCarousel;