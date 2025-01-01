'use client'
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import CharacterCarousel from "./scripts/carousel-character";
import MechanicCarousel from "./scripts/carousel-mechanic";
import StoryCarousel from "./scripts/carousel-story";
import WorldCarousel from "./scripts/carousel-world";

export default function Home() {
  const [isInViewSectionZero, setIsInViewSectionZero] = useState(false);
  const [isInViewSectionOne, setIsInViewSectionOne] = useState(false);
  const [isInViewSectionTwo, setIsInViewSectionTwo] = useState(false);
  const [isInViewSectionThree, setIsInViewSectionThree] = useState(false);
  const [isInViewSectionFour, setIsInViewSectionFour] = useState(false);
  const [isInViewSectionFive, setIsInViewSectionFive] = useState(false);

  // Create refs for each section
  const sectionZeroRef = useRef<HTMLDivElement>(null);
  const sectionOneRef = useRef<HTMLDivElement>(null);
  const sectionTwoRef = useRef<HTMLDivElement>(null);
  const sectionThreeRef = useRef<HTMLDivElement>(null);
  const sectionFourRef = useRef<HTMLDivElement>(null);
  const sectionFiveRef = useRef<HTMLDivElement>(null);

  // Scroll to Section Zero
  const scrollToSectionZero = () => {
    sectionZeroRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };
  // Scroll to Section One
  const scrollToSectionOne = () => {
    sectionOneRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };
  // Scroll to Section Two
  const scrollToSectionTwo = () => {
    sectionTwoRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };
  // Scroll to Section Three
  const scrollToSectionThree = () => {
    sectionThreeRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };
  // Scroll to Section Four
  const scrollToSectionFour = () => {
    sectionFourRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };
  // Scroll to Section Five
  const scrollToSectionFive = () => {
    sectionFiveRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  // Check view state for multiple sections
  useEffect(() => {
    const observerOptions = {
      threshold: 0.5, // Trigger when 50% of the section is in view
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Check if the section is in view and set the corresponding state
        if (entry.target === sectionZeroRef.current) {
          setIsInViewSectionZero(entry.isIntersecting);
        } else if (entry.target === sectionOneRef.current) {
          setIsInViewSectionOne(entry.isIntersecting);
        } else if (entry.target === sectionTwoRef.current) {
          setIsInViewSectionTwo(entry.isIntersecting);
        } else if (entry.target === sectionThreeRef.current) {
          setIsInViewSectionThree(entry.isIntersecting);
        } else if (entry.target === sectionFourRef.current) {
          setIsInViewSectionFour(entry.isIntersecting);
        } else if (entry.target === sectionFiveRef.current) {
          setIsInViewSectionFive(entry.isIntersecting);
        }
      },
      observerOptions
    );

    // Observe each section
    if (sectionZeroRef.current) {
      observer.observe(sectionZeroRef.current);
    }
    if (sectionOneRef.current) {
      observer.observe(sectionOneRef.current);
    }
    if (sectionTwoRef.current) {
      observer.observe(sectionTwoRef.current);
    }
    if (sectionThreeRef.current){
      observer.observe(sectionThreeRef.current);
    }
    if (sectionFourRef.current){
      observer.observe(sectionFourRef.current);
    }
    if (sectionFiveRef.current){
      observer.observe(sectionFiveRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (sectionZeroRef.current) {
        observer.unobserve(sectionZeroRef.current);
      }
      if (sectionOneRef.current) {
        observer.unobserve(sectionOneRef.current);
      }
      if (sectionTwoRef.current) {
        observer.unobserve(sectionTwoRef.current);
      }
      if (sectionThreeRef.current) {
        observer.unobserve(sectionThreeRef.current);
      }
      if (sectionFourRef.current) {
        observer.unobserve(sectionFourRef.current);
      }
      if (sectionFiveRef.current) {
        observer.unobserve(sectionFiveRef.current);
      }
    };
  }, []);

  // main
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* Background - Landing*/}
        <div className="Background_image" ref={sectionZeroRef}/>
        <img
          className="w-[36%] z-1 position-absolute ml-[20%] mt-[-10%]"
          src="/res_img/landing_title.png"
        />
          
        {/* Navbar */}
        <div className="navbar">
          <div className="navbarbox" 
            style={{
              transition: 'opacity 1s ease, mix-blend-mode 0.5s ease',
              opacity: isInViewSectionZero ? 0.8 : 1,
              mixBlendMode: isInViewSectionZero? "lighten" : "normal"
            }}
          ></div>
          <div className="navbar-content">
            <Image
              className="Language"
              src="/res_img/Icons/dictionarylanguagebook.png"
              alt="translate"
              width={48}
              height={48}
            />
            <div className="title"
              onClick={scrollToSectionZero}
            >
              <h1>Project Candradimuka</h1>
            </div>
            <ul className="navbar_links">
              <li>
                <div className="Character_text"
                style={{
                  transition: 'WebkitTextStroke 0.5s ease',
                  WebkitTextStroke: isInViewSectionTwo? "2px #000000" : "0px #000000"
                }}
                >
                  <a onClick={scrollToSectionTwo}>Characters</a>
                </div>
              </li>
              <li>
                <div className="Mechanic_text"
                style={{
                  transition: 'WebkitTextStroke 0.5s ease',
                  WebkitTextStroke: isInViewSectionThree? "2px #000000" : "0px #000000"
                }}
                >
                    <a onClick={scrollToSectionThree}>Mechanics</a></div>
                </li>
              <li>
                <div className="Story_text"
                style={{
                  transition: 'WebkitTextStroke 0.5s ease',
                  WebkitTextStroke: isInViewSectionFour? "2px #000000" : "0px #000000"
                }}>
                  <a onClick={scrollToSectionFour}>Story</a>
                </div>
              </li>
              <li>
              <div className="World_text"
                style={{
                  transition: 'WebkitTextStroke 0.5s ease',
                  WebkitTextStroke: isInViewSectionFive? "2px #000000" : "0px #000000"
                }}>
                  <a onClick={scrollToSectionFive}>World</a>
                </div>
              </li>
            </ul>
            <ul className="navbar_socials">
              {/* Twitter */}
            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="black" className="bibi-twitter-x" viewBox="0 0 16 16">
              <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
            </svg>
              {/* insta */}
            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="black" className="bibi-instagram" viewBox="0 0 16 16">
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
            </svg>
            {/* Youtube */}
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="black" className="bibi-youtube" viewBox="0 0 16 16">
              <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
            </svg>
            </ul>
          </div>
        </div>

        {/* Transition */}
        <div className="transition">
          <div className="tr-1">
            <svg width="100vw" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFB353" fillOpacity="1" d="M0,128L21.8,117.3C43.6,107,87,85,131,69.3C174.5,53,218,43,262,48C305.5,53,349,75,393,96C436.4,117,480,139,524,160C567.3,181,611,203,655,186.7C698.2,171,742,117,785,117.3C829.1,117,873,171,916,170.7C960,171,1004,117,1047,85.3C1090.9,53,1135,43,1178,32C1221.8,21,1265,11,1309,42.7C1352.7,75,1396,149,1418,186.7L1440,224L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"></path></svg>
          </div>
          <div className="tr-2">
            <svg width="100vw" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFBC04" fillOpacity="0.4" d="M0,128L21.8,117.3C43.6,107,87,85,131,69.3C174.5,53,218,43,262,48C305.5,53,349,75,393,96C436.4,117,480,139,524,160C567.3,181,611,203,655,186.7C698.2,171,742,117,785,117.3C829.1,117,873,171,916,170.7C960,171,1004,117,1047,85.3C1090.9,53,1135,43,1178,32C1221.8,21,1265,11,1309,42.7C1352.7,75,1396,149,1418,186.7L1440,224L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"></path></svg>
          </div>
          <div className="tr-3">
            <svg width="100vw" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#EC4043" fillOpacity="0.2" d="M0,128L21.8,117.3C43.6,107,87,85,131,69.3C174.5,53,218,43,262,48C305.5,53,349,75,393,96C436.4,117,480,139,524,160C567.3,181,611,203,655,186.7C698.2,171,742,117,785,117.3C829.1,117,873,171,916,170.7C960,171,1004,117,1047,85.3C1090.9,53,1135,43,1178,32C1221.8,21,1265,11,1309,42.7C1352.7,75,1396,149,1418,186.7L1440,224L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"></path></svg>
          </div>
          <div className="transition_text">
            Continue?
            <div className="transition_image">
            <Image
              className="arrowdowntr"
              src="/res_img/Icons/arrow_down.png"
              alt="Arrow_down"
              width = {48}
              height = {48}
              onClick={scrollToSectionOne}
            />  
            </div>
          </div>
        </div>
        {/* Section 1 */}
        <div className="section1" >
          <div className="s1_guideline">
            <Image
              className="s1top_guideline"
              src="/res_img/Icons/outline_single-pg1.png"
              alt="outline"
              width = {1790}
              height = {869}
              quality={100}
            />
            <Image
              className="s1bottom_guideline"
              src="/res_img/Icons/outline_single-pg1.png"
              alt="outline"
              width = {1790}
              height = {869}
              quality={100}
            />
          </div>
          <div className="s1_text">
            <div className="s1_text_top">
              A Guide to an old world filled with mysticism.
            </div>
            <div className="s1_text_bottom" ref={sectionOneRef}>
              Served by yours truly, the Dalangs.
            </div>
            <div className="s1_text_blackbox">
              Stand With Dharma, Walk With Karma, Stand Against The Adharma.
            </div>
          </div>
          <Image
            className="s1_arrowdown"
            src="/res_img/Icons/arrow_down.png"
            alt="Arrow_down"
            width = {48}
            height = {48}
          />
        </div>

        {/* section 2 */}
        <div className="section2" >
          <div className="SECTION2ANCHOR" ref={sectionTwoRef}/>
          <CharacterCarousel/>
        </div>

        <div className="section3 position-absolute">
          <div className="SECTION3ANCHOR" ref={sectionThreeRef}/>
          <MechanicCarousel/>
        </div>

        <div className="section4 position-absolute">
          <div className="SECTION4ANCHOR" ref={sectionFourRef}/>
          <StoryCarousel/>
        </div>

        <div className="section5 position-absolute">
          <div className="SECTION5ANCHOR" ref={sectionFiveRef}/>
          <WorldCarousel/>
        </div>

        <div className="section6 position-absolute">
          <h1 className="mb-[-10%] ml-[18%]">
            Forward, Sang Punakawan.
          </h1>
          <img
            className="ml-[2%] mt-[6%] position-absolute w-[1790]"
            src="/res_img/Icons/outline_single-pg1.png"
          />
        </div>

        <div className="Footer position-absolute">
          <img
            className="imgfooter_steam"
            src="/res_img/Icons/steam.png"
          />
          <img
            className="imgfooter_itch"
            src="/res_img/Icons/itch.png"
          />
          <h1 className="playnow">
            Play Now!
          </h1>
          <p className="Copyright">Copyright © 2024 — Dimas Nauli Satria Addin Sinaga - 2401010179. All Rights Reserved</p>

        </div>
        {/* Scrollable website */}
        <div className="extra-content">
          <p>This is additional content that makes the page scrollable.</p>
          <p>More content here...</p>
          <p>Even more content!</p>
        </div>
      </main>
    </div>
  );
}