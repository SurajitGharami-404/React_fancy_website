import React,{useRef,useCallback,useEffect} from 'react';
import worldComm from "../Assets/world-comm.png";
import "../Styles/FirstPage.css";
import { gsap,Power3 } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSPlugin } from "gsap/CSSPlugin";


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);


const FirstText = () => {

const firstTextRef = useRef();

  const initAnimation = useCallback(() => {
    gsap.timeline({
      defaults:{
        duration:0.5,
        ease:Power3.easeOut
      }
    })
    .to(".hide",{y:0})
    .to(".text",{y:0,stagger:0.25});

  }, []);

  useEffect(() => {
    initAnimation();
  }, [initAnimation]);


  return (
    <div className="container-fluid first-text h-100 px-0" ref={firstTextRef} >
        <div className="row">
            <div className="col">
            <div className="top-text hide">
            <h2 className="top-heading text">25M+ Downloads</h2>
            <p className="top-para top-para-2 text-right text">
              On appstore & google playstore
            </p>
          </div>
          <div className="bottom-text hide">
            <img
              src={worldComm}
              alt="mobile app of the year"
              className="first-bottom-img mb-3 text"
            />
            <h3 className="bottom-heading text">ABC 123</h3>
            <p className="bottom-para text">
              We are the best web developement company in the world
            </p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default FirstText