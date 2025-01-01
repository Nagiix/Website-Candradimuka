
import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { useRouter } from 'next/navigation';

const CharacterCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const router = useRouter();

  const handleRedirect = (slug) => {
    router.push(`/charpages/${slug}`);
  };

  const pages = [
    // GROUP
    <div key="0" className="flex items-center justify-center w-full h-full">
      <img
        src="/res_img/Characters/Group.png"
        alt="Group"
        className="w-[100vw] h-[30%] object-contain quality-[100]"
      />
      <p className="mt-4 text-[#000000] position-absolute"
        style={{
          top:"7%",
          fontFamily:"Island Moments",
          WebkitTextStroke:"2px #000000",
          fontSize:250
        }}
      >Characters</p>
      <p className="mt-4 text-[#000000] position-absolute"
        style={{
          paddingLeft:"1%",
          top:"8.5%",
          fontFamily:"Island Moments",
          WebkitTextStroke:"2px #000000",
          opacity:0.3,
          fontSize:250
        }}
      >Characters</p>
      <img className="position-absolute mb-[57%] ml-[4.3%]"
        src='/res_img/Icons/Frame.png'
        alt="Frame"
      />
    </div>,

        // SEMAR
    <div key="1" className="flex items-center w-full h-full">
      <img
        src="/res_img/Characters/Semar.png"
        alt="Semar"
        className="w-[30%] h-[45%] object-contain quality-[100] ml-[6%] mb-[30%]"
        />
      <img className="position-absolute mb-[25%] ml-[49.7%] w-[0.2%] h-[23%]"
        src='/res_img/Icons/Frame-Right.png'
        alt="Frame"
      />
      <img className="position-absolute mb-[25%] ml-[2%] w-[43%] h-[50%]"
        src='/res_img/Icons/Frame-Top.png'
        alt="Frame"
      />
      <img 
        src="/res_img/Characters/semar-aksara.png"
        className="position-absolute w-[7%] h-[13%] ml-[46.5%] mb-[56%]" style={{
      }}/>
      <img 
        src="/res_img/Characters/semar-aksara.png"
        className="position-absolute w-[7%] h-[13%] ml-[46.5%] mb-[-6.5%]" style={{
      }}/>
      <img 
        src="/res_img/Characters/semar-nama.png"
        className="position-absolute w-[48%] h-[4%] ml-[25%] mb-[-20%]" style={{
      }}/>
      <img 
        src="/res_img/Icons/border-bottom.png"
        className="position-absolute w-[50%] h-[25%] ml-[50%] mb-[13%]" style={{
      }}/>
      <img 
        src="/res_img/Icons/frame-bottom.png"
        className="position-absolute w-[45%] h-[4px] ml-[52.5%] mb-[-15%]" style={{
      }}/>
      <img 
        src="/res_img/Characters/Semar-title.png"
        className="position-absolute w-[37%] h-[15%] ml-[56%] mb-[45%]" style={{
      }}/>
      <h1 className="position-absolute ml-[61%] mt-[11%]"
          onClick={()=> handleRedirect("Semar")}
          style={{
            fontFamily:"Island Moments",
            opacity:0.7,
            fontSize:100,
            color: "black",
            WebkitTextStroke: "2px black",
            cursor:"url('/res_img/cursors/select.cur'), pointer"
          }}
      >DEEP DIVE!</h1>
      <h2 className="position-absolute quality-[100] ml-[56.5%] mb-[25%] pr-[7%]"
          style={{
            fontFamily:"Inria Serif",
            fontSize:30,
            color: "black",
            WebkitTextStroke: "1px black",
          }}
      >
      A Wise [Punakawan] who acts as an advisor for [The Pandawa Lima] and the other [Punakawan]. <br/><br/>
      Semar is characterized to be chubby due to his past competitions; he is always looking up and to the front.
      </h2>
      <h1 className="position-absolute ml-[74%] mb-[60%]"
          style={{
            height:130,
            fontFamily:"Inria Serif",
            opacity:1,
            fontSize:100,
            color: "black",
            WebkitTextStroke: "2px black",
          }}
      >1.</h1>
    </div>,

          // GARENG
    <div key="2" className="flex items-center w-full h-full">
      <img
        src="/res_img/Characters/Gareng.png"
        alt="Semar"
        className="w-[30%] h-[45%] object-contain quality-[100] ml-[6%] mb-[30%]"
        />
      <img className="position-absolute mb-[25%] ml-[49.7%] w-[0.2%] h-[23%]"
        src='/res_img/Icons/Frame-Right.png'
        alt="Frame"
      />
      <img className="position-absolute mb-[25%] ml-[2%] w-[43%] h-[50%]"
        src='/res_img/Icons/Frame-Top.png'
        alt="Frame"
      />
      <img 
        src="/res_img/Characters/Gareng-aksara.png"
        className="position-absolute w-[10%] h-[15%] ml-[45%] mb-[56%]" style={{
      }}/>
      <img 
        src="/res_img/Characters/Gareng-aksara.png"
        className="position-absolute w-[10%] h-[14%] ml-[45%] mb-[-6.5%]" style={{
      }}/>
      <img 
        src="/res_img/Characters/Gareng-nama.png"
        className="position-absolute w-[48%] h-[4%] ml-[25%] mb-[-20%]" style={{
      }}/>
      <img 
        src="/res_img/Icons/border-bottom.png"
        className="position-absolute w-[50%] h-[25%] ml-[50%] mb-[13%]" style={{
      }}/>
      <img 
        src="/res_img/Icons/frame-bottom.png"
        className="position-absolute w-[45%] h-[4px] ml-[52.5%] mb-[-15%]" style={{
      }}/>
      <img 
        src="/res_img/Characters/Gareng-title.png"
        className="position-absolute w-[37%] h-[8%] ml-[56%] mb-[50%]" style={{
      }}/>
      <h1 className="position-absolute ml-[61%] mt-[11%]"
          onClick={()=> handleRedirect("Gareng")}
          style={{
            fontFamily:"Island Moments",
            opacity:0.7,
            fontSize:100,
            color: "black",
            WebkitTextStroke: "2px black",
            cursor:"url('/res_img/cursors/select.cur'), pointer"
          }}
      >DEEP DIVE!</h1>
      <h2 className="position-absolute quality-[100] ml-[56.5%] mb-[25%] pr-[7%]"
          style={{
            fontFamily:"Inria Serif",
            fontSize:30,
            color: "black",
            WebkitTextStroke: "1px black",
          }}
      >
      A Careful [Punakawan], whose main trait is that he doesn't want to see evil acts and never tries to steal anyone's rights. <br/><br/>
      Gareng is characterized to have 1 longer arm and leg while also being cross eyed.
      </h2>
      <h1 className="position-absolute ml-[72%] mb-[60%]"
          style={{
            height:130,
            fontFamily:"Inria Serif",
            opacity:1,
            fontSize:100,
            color: "black",
            WebkitTextStroke: "2px black",
          }}
      >2.</h1>
    </div>,

      // PETRUK
    <div key="3" className="flex items-center w-full h-full">
      <img
        src="/res_img/Characters/Petruk.png"
        alt="Semar"
        className="w-[30%] h-[45%] object-contain quality-[100] ml-[6%] mb-[28%]"
        />
      <img className="position-absolute mb-[-7%] ml-[49%] w-[0.2%] h-[10%]"
        src='/res_img/Icons/Frame-Right.png'
        alt="Frame"
      />
      <img className="position-absolute mb-[57%] ml-[49%] w-[0.2%] h-[8%]"
        src='/res_img/Icons/Frame-Right.png'
        alt="Frame"
      />
      <img className="position-absolute mb-[25%] ml-[2%] w-[43%] h-[50%]"
        src='/res_img/Icons/Frame-Top.png'
        alt="Frame"
      />
      <img 
        src="/res_img/Characters/Petruk-Aksara.png"
        className="position-absolute w-[10%] h-[30%] ml-[45%] mb-[26%]" style={{
      }}/>
      <img 
        src="/res_img/Characters/Petruk-nama.png"
        className="position-absolute w-[48%] h-[4%] ml-[25%] mb-[-20%]" style={{
      }}/>
      <img 
        src="/res_img/Icons/border-bottom.png"
        className="position-absolute w-[50%] h-[25%] ml-[50%] mb-[13%]" style={{
      }}/>
      <img 
        src="/res_img/Icons/frame-bottom.png"
        className="position-absolute w-[45%] h-[4px] ml-[52.5%] mb-[-15%]" style={{
      }}/>
      <img 
        src="/res_img/Characters/Petruk-Title.png"
        className="position-absolute w-[37%] h-[8%] ml-[56%] mb-[50%]" style={{
      }}/>
      <h1 className="position-absolute ml-[61%] mt-[11%]"
          onClick={()=> handleRedirect("Petruk")}
          style={{
            fontFamily:"Island Moments",
            opacity:0.7,
            fontSize:100,
            color: "black",
            WebkitTextStroke: "2px black",
            cursor:"url('/res_img/cursors/select.cur'), pointer"
          }}
      >DEEP DIVE!</h1>
      <h2 className="position-absolute quality-[100] ml-[56.5%] mb-[25%] pr-[7%]"
          style={{
            fontFamily:"Inria Serif",
            fontSize:30,
            color: "black",
            WebkitTextStroke: "1px black",
          }}
      >
        A [Punakawan] whose main trait is his generocity, diligency, and being a good listener. <br/>
        Petruk always wants to be useful to the people around him, no matter where he is.<br/><br/>

        Petruk is characterized to have long hands, a long nose, and being tall.
      </h2>
      <h1 className="position-absolute ml-[72%] mb-[60%]"
          style={{
            height:130,
            fontFamily:"Inria Serif",
            opacity:1,
            fontSize:100,
            color: "black",
            WebkitTextStroke: "2px black",
          }}
      >3.</h1>
    </div>,

    // Bagong
    <div key="4" className="flex items-center w-full h-full">
       <img
        src="/res_img/Characters/Bagong.png"
        alt="Semar"
        className="w-[30%] h-[45%] object-contain quality-[100] ml-[6%] mb-[28%]"
        />
      <img className="position-absolute mb-[-11.2%] ml-[49%] w-[0.2%] h-[4%]"
        src='/res_img/Icons/Frame-Right.png'
        alt="Frame"
      />
      <img className="position-absolute mb-[60.3%] ml-[49%] w-[0.2%] h-[5%]"
        src='/res_img/Icons/Frame-Right.png'
        alt="Frame"
      />
      <img className="position-absolute mb-[25%] ml-[2%] w-[43%] h-[50%]"
        src='/res_img/Icons/Frame-Top.png'
        alt="Frame"
      />
      <img 
        src="/res_img/Characters/Bagong-Aksara.png"
        className="position-absolute w-[10%] h-[40%] ml-[45%] mb-[23.5%]" style={{
      }}/>
      <img 
        src="/res_img/Characters/Bagong-nama.png"
        className="position-absolute w-[48%] h-[4%] ml-[25%] mb-[-20%]" style={{
      }}/>
      <img 
        src="/res_img/Icons/border-bottom.png"
        className="position-absolute w-[50%] h-[25%] ml-[50%] mb-[13%]" style={{
      }}/>
      <img 
        src="/res_img/Icons/frame-bottom.png"
        className="position-absolute w-[45%] h-[4px] ml-[52.5%] mb-[-15%]" style={{
      }}/>
      <img 
        src="/res_img/Characters/Bagong-Title.png"
        className="position-absolute w-[37%] h-[8%] ml-[56%] mb-[50%]" style={{
      }}/>
      <h1 className="position-absolute ml-[61%] mt-[11%]"
          onClick={()=> handleRedirect("Bagong")}
          style={{
            fontFamily:"Island Moments",
            opacity:0.7,
            fontSize:100,
            color: "black",
            WebkitTextStroke: "2px black",
            cursor:"url('/res_img/cursors/select.cur'), pointer"
          }}
      >DEEP DIVE!</h1>
      <h2 className="position-absolute quality-[100] ml-[56.5%] mb-[25%] pr-[7%]"
          style={{
            fontFamily:"Inria Serif",
            fontSize:30,
            color: "black",
            WebkitTextStroke: "1px black",
          }}
      >
        A [Punakawan] whose main trait is his good heart but is also always in a hurry to do anything, he is usually used as a bad example.<br/><br/>

        Bagong is born from Semar's shadow, therefore they are quite similar in appearance.
      </h2>
      <h1 className="position-absolute ml-[72%] mb-[60%]"
          style={{
            height:130,
            fontFamily:"Inria Serif",
            opacity:1,
            fontSize:100,
            color: "black",
            WebkitTextStroke: "2px black",
          }}
      >4.</h1>
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

export default CharacterCarousel;