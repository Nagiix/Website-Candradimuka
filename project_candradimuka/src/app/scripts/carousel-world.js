import { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const WorldCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const pages = [
    // GROUP
    <div key="0" className="flex items-center justify-center w-full h-full">
      <p className="mt-4 text-[#000000] position-absolute w-[100%]"
        style={{
          left:"35%",
          top:"19%",
          fontFamily:"Island Moments",
          WebkitTextStroke:"2px #000000",
          fontSize:250
        }}
      >World</p>
      <p className="mt-4 text-[#000000] position-absolute w-[100%]"
        style={{
          paddingLeft:"36%",
          top:"20.5%",
          fontFamily:"Island Moments",
          WebkitTextStroke:"2px #000000",
          opacity:0.3,
          fontSize:250
        }}
      >World</p>
      <img className="position-absolute mb-[37%] ml-[4.3%]"
        src='/res_img/Icons/Frame.png'
        alt="Frame"
      />
    </div>,

        // Bale Sigala gala
    <div key="1" className="flex items-center w-full h-full">
      <img
        src="/res_img/World/Gunungan.png"
        alt="Semar"
        className="w-[40%] h-[50%] object-contain quality-[100] ml-[6%] mb-[25%]"
        />
      <img className="position-absolute mb-[25%] ml-[49%] w-[0.2%] h-[50%]"
        src='/res_img/Icons/Frame-Right.png'
        alt="Frame"
      />
      <img className="position-absolute mb-[25%] ml-[2%] w-[43%] h-[50%]"
        src='/res_img/Icons/Frame-Top.png'
        alt="Frame"
      />
      <img 
        src="/res_img/Icons/border-bottom.png"
        className="position-absolute w-[50%] h-[25%] ml-[50%] mb-[13%]" style={{
      }}/>
      <img 
        src="/res_img/Icons/frame-bottom.png"
        className="position-absolute w-[45%] h-[4px] ml-[52.5%] mb-[-15%]" style={{
      }}/>
    <h2 className="position-absolute w-[37%] h-[15%] ml-[57%] mb-[35%]"
          style={{
            fontFamily:"Island Moments",
            fontSize:120,
            color: "black",
            WebkitTextStroke: "1px black",
          }}
      >
      Bale Sigala Gala
      </h2>
      <img 
        src="/res_img/Icons/frame-bottom.png"
        className="position-absolute w-[45%] h-[4px] ml-[52.5%] mb-[64.4%]" style={{
      }}/>
      <h2 className="position-absolute quality-[100] ml-[56%] mb-[25%] pr-[7%]"
          style={{
            fontFamily:"Inria Serif",
            fontSize:30,
            color: "black",
            WebkitTextStroke: "1px black",
            textAlign:"center",
          }}
      >
      A house that is given to the [Pandawa] by Sangkuni, of course with a hidden agenda.
      </h2>
    </div>,

// Pandawa
  <div key="2" className="flex items-center w-full h-full">
    <img
      src="/res_img/World/Pandawa.png"
      alt="Semar"
      className="w-[40%] h-[50%] object-contain quality-[100] ml-[3%] mb-[17.5%]"
      />
    <img className="position-absolute mb-[25%] ml-[49%] w-[0.2%] h-[50%]"
      src='/res_img/Icons/Frame-Right.png'
      alt="Frame"
    />
    <img className="position-absolute mb-[25%] ml-[2%] w-[43%] h-[50%]"
      src='/res_img/Icons/Frame-Top.png'
      alt="Frame"
    />
    <img 
      src="/res_img/Icons/border-bottom.png"
      className="position-absolute w-[50%] h-[25%] ml-[50%] mb-[13%]" style={{
    }}/>
    <img 
      src="/res_img/Icons/frame-bottom.png"
      className="position-absolute w-[45%] h-[4px] ml-[52.5%] mb-[-15%]" style={{
    }}/>
  <h2 className="position-absolute w-[37%] h-[15%] ml-[60%] mb-[35%]"
        style={{
          fontFamily:"Island Moments",
          fontSize:120,
          color: "black",
          WebkitTextStroke: "1px black",
        }}
    >
    Pandawa Lima
    </h2>
    <img 
      src="/res_img/Icons/frame-bottom.png"
      className="position-absolute w-[45%] h-[4px] ml-[52.5%] mb-[64.4%]" style={{
    }}/>
    <h2 className="position-absolute quality-[100] ml-[56%] mb-[25%] pr-[7%]"
        style={{
          fontFamily:"Inria Serif",
          fontSize:30,
          color: "black",
          WebkitTextStroke: "1px black",
          textAlign:"center",
        }}
    >
A powerful group of 5 that is consisted of good hearted and powerful demi-gods.</h2>
  </div>,

// Punakawan
  <div key="2" className="flex items-center w-full h-full">
    <img
      src="/res_img/World/Punakawan.png"
      alt="Semar"
      className="w-[40%] h-[50%] object-contain quality-[100] ml-[3%] mb-[24.5%]"
      />
    <img className="position-absolute mb-[25%] ml-[49%] w-[0.2%] h-[50%]"
      src='/res_img/Icons/Frame-Right.png'
      alt="Frame"
    />
    <img className="position-absolute mb-[25%] ml-[2%] w-[43%] h-[50%]"
      src='/res_img/Icons/Frame-Top.png'
      alt="Frame"
    />
    <img 
      src="/res_img/Icons/border-bottom.png"
      className="position-absolute w-[50%] h-[25%] ml-[50%] mb-[13%]" style={{
    }}/>
    <img 
      src="/res_img/Icons/frame-bottom.png"
      className="position-absolute w-[45%] h-[4px] ml-[52.5%] mb-[-15%]" style={{
    }}/>
    <h2 className="position-absolute w-[37%] h-[15%] ml-[65%] mb-[35%]"
        style={{
          fontFamily:"Island Moments",
          fontSize:120,
          color: "black",
          WebkitTextStroke: "1px black",
        }}
    >
    Punakawan
    </h2>
    <img 
      src="/res_img/Icons/frame-bottom.png"
      className="position-absolute w-[45%] h-[4px] ml-[52.5%] mb-[64.4%]" style={{
    }}/>
    <h2 className="position-absolute quality-[100] ml-[57%] mb-[25%] pr-[7%]"
        style={{
          fontFamily:"Inria Serif",
          fontSize:30,
          color: "black",
          WebkitTextStroke: "1px black",
          textAlign:"center",
        }}
    >
    A group of 4 people that ar filled with mysteries that follows the Pandawa Lima as their helper and advisor.
    </h2>
  </div>,

// Kurawa
  <div key="2" className="flex items-center w-full h-full">
    <img
      src="/res_img/World/Sengkuni.png"
      alt="Semar"
      className="w-[40%] h-[50%] object-contain quality-[100] ml-[3%] mb-[14.3%]"
      />
    <img className="position-absolute mb-[25%] ml-[49%] w-[0.2%] h-[50%]"
      src='/res_img/Icons/Frame-Right.png'
      alt="Frame"
    />
    <img className="position-absolute mb-[25%] ml-[2%] w-[43%] h-[50%]"
      src='/res_img/Icons/Frame-Top.png'
      alt="Frame"
    />
    <img 
      src="/res_img/Icons/border-bottom.png"
      className="position-absolute w-[50%] h-[25%] ml-[50%] mb-[13%]" style={{
    }}/>
    <img 
      src="/res_img/Icons/frame-bottom.png"
      className="position-absolute w-[45%] h-[4px] ml-[52.5%] mb-[-15%]" style={{
    }}/>
    <h2 className="position-absolute w-[37%] h-[15%] ml-[65%] mb-[35%]"
        style={{
          fontFamily:"Island Moments",
          fontSize:120,
          color: "black",
          WebkitTextStroke: "1px black",
        }}
    >
    Kurawa
    </h2>
    <img 
      src="/res_img/Icons/frame-bottom.png"
      className="position-absolute w-[45%] h-[4px] ml-[52.5%] mb-[64.4%]" style={{
    }}/>
    <h2 className="position-absolute quality-[100] ml-[53%] mb-[25%] pr-[7%]"
        style={{
          fontFamily:"Inria Serif",
          fontSize:30,
          color: "black",
          WebkitTextStroke: "1px black",
          textAlign:"center",
        }}
    >
A faction of 100 siblings that always plot and seek destruction towards the people that represents the Dharma.    </h2>
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

export default WorldCarousel;