import React, { useEffect, useCallback, useRef } from "react";
import "./App.css";
import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSPlugin } from "gsap/CSSPlugin";

import FirstPage from "./Components/FirstPage";
import Blockchain from "./Components/Blockchain";
import FirstText from "./Components/FirstText";
import SecondText from "./Components/SecondText";


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);

function App() {
  const rowRef = useRef();
  const page1Ref = useRef();
  const page2Ref = useRef();
  const text1Ref = useRef();
  const text2Ref = useRef();



  const initAnimation = useCallback(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".scroll-dist",
          scrub: true,
          pin:true,
          start: "top top",
          end: "bottom top",
        },
      })
      .to(page1Ref.current, { visibility:"visible",backgroundColor:"#001E6C", duration: 1 ,stagger:0.5})
      .to(page2Ref.current, { visibility:"visible",backgroundColor:"#06113C", duration: 1 });

      gsap
      .timeline({
        scrollTrigger: {
          trigger: ".scroll-dist",
          scrub: true,
          pin:true,
          start: "top top",
          end: "bottom top",
        },
      })
      .to(text1Ref.current, { visibility:"visible",backgroundColor:"#4700D8"})
      .to(text2Ref.current, { visibility:"visible"});

  }, []);

  useEffect(() => {
    initAnimation();
  }, [initAnimation]);

  return (
    <>
    <div className="scroll-dist"></div>
    <div className="App container-fluid px-0"  ref={rowRef}>
      <div className="row">
        <div className="col col-5 app-text">
          <div className="texts texts-1" ref={text1Ref}>
            <FirstText/>
          </div>
          <div className="texts" ref={text2Ref}>
              <SecondText/>
          </div>
        </div>
        <div className="col col-7 app-img">
          <div className="pages pages-1" ref={page1Ref}>
            <FirstPage />
          </div>
          <div className="pages" ref={page2Ref}>
            <Blockchain />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
