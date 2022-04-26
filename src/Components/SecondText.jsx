import React,{useRef,useCallback,useEffect} from 'react';
import { gsap,Power3 } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSPlugin } from "gsap/CSSPlugin";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);

const SecondText = () => {
    const secondTextRef = useRef();


  return (
    <div className="container-fluid h-100 px-0" ref={secondTextRef}>
        <div className="row">
        <div className="col block-text-container">
            <div className="top-text hide-2">
                <p className="top-para top-para-1 mb-0 text-2">The Next Big</p>
                <h2 className="top-heading text-2">Blockchain</h2>
                <p className="top-para top-para-2 text-right text-2">Revolution</p>
            </div>
            <div className="bottom-text hide-2">
                <h3 className="bottom-heading text-2">ABC 234</h3>
                <p className="bottom-para text-2">We are the best web developement company in the world</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SecondText