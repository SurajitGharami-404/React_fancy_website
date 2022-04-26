import React, { useEffect, useRef, useCallback } from "react";
import "../Styles/FirstPage.css";
import firstPage1 from "../Assets/firstpage-1.png";
import firstPage2 from "../Assets/firstpage-2.png";
import worldComm from "../Assets/world-comm.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSPlugin } from "gsap/CSSPlugin";
import { gsap,Power4 } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);

const FirstPage = () => {
 
  const firstPageRef = useRef();
  const imageRef = useRef();


  const initAnimation = useCallback(() => {
   
    gsap.timeline({
      scrollTrigger:{
        trigger:firstPageRef.current,
        scrub:true,
        start:"center center-=5%",
        end:"bottom top",

      }
    })
    .to(imageRef.current,{y:1000,duration:0.8,ease:Power4.easeOut})

 
   
  }, []);

  useEffect(() => {
    initAnimation();
  }, [initAnimation]);

  return (
    <div className="container-fluid" ref={firstPageRef} id="firstpage">
      <div className="row">
        <div className="col d-flex justify-content-center align-items-center first-img-container" ref={imageRef}>
            <img
              src={firstPage1}
              alt="nextg tv"
              className="first-img first-img-1"
            />
            <img
              src={firstPage2}
              alt="nextg tv"
              className="first-img first-img-2"
            />
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
