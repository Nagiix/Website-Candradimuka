import { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const BagongCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const pages = [
    // ref
    <div key="0" className="flex items-center justify-center w-full h-full">
      <img 
        src="/res_img/Characters/Bagong-title.png"
        className="position-absolute w-[37%] h-[8%] ml-[0%] mb-[7%]" style={{
      }}/>
      <p className="mt-4 text-[#000000] position-absolute mb-[-3%]"
        style={{
          fontFamily:"Island Moments",
          WebkitTextStroke:"2px #000000",
          fontSize:100
        }}
      >Reference</p>
      <img className="position-absolute w-[16%] mb-[35%]"
        src='/res_img/WIPS/bagong_ref.png'
        alt="Frame"
      />
    </div>,

    // early design
    <div key="1" className="flex items-center justify-center w-full h-full">
    <img 
      src="/res_img/Characters/Bagong-title.png"
      className="position-absolute w-[37%] h-[8%] ml-[0%] mb-[7%]" style={{
    }}/>
    <p className="mt-4 text-[#000000] position-absolute mb-[-3%]"
      style={{
        fontFamily:"Island Moments",
        WebkitTextStroke:"2px #000000",
        fontSize:100
      }}
    >Origin</p>
    <img className="position-absolute w-[20%] mb-[37%]"
      src='/res_img/WIPS/semar_shadow.png'
      alt="Frame"
    />
  </div>,
  
// Sillhoutte
  <div key="2" className="flex items-center justify-center w-full h-full">
  <img 
    src="/res_img/Characters/Bagong-title.png"
    className="position-absolute w-[37%] h-[8%] ml-[0%] mb-[7%]" style={{
  }}/>
  <p className="mt-4 text-[#000000] position-absolute mb-[-3%] ml-[87%] w-[100%]"
    style={{
      fontFamily:"Island Moments",
      WebkitTextStroke:"2px #000000",
      fontSize:100
    }}
  >Colored</p>
  <img className="position-absolute w-[20%] mb-[35%]"
    src='/res_img/WIPS/bagong_color.png'
    alt="Frame"
  />
</div>,
// Sketch
  <div key="3" className="flex items-center justify-center w-full h-full">
    <img 
      src="/res_img/Characters/Bagong-title.png"
      className="position-absolute w-[37%] h-[8%] ml-[0%] mb-[7%]" style={{
    }}/>
    <p className="mt-4 text-[#000000] position-absolute mb-[-3%]"
      style={{
        fontFamily:"Island Moments",
        WebkitTextStroke:"2px #000000",
        fontSize:100
      }}
    >Human Sketch</p>
    <img className="position-absolute w-[22%] mb-[35%]"
      src='/res_img/WIPS/bagong_sketch.png'
      alt="Frame"
    />
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

export default BagongCarousel;