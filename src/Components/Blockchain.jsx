import React,{useCallback,useRef,useEffect} from 'react';
import "../Styles/Blockchain.css";
import vemeUi from "../Assets/vemeui.png";
import vemeBlockchain from "../Assets/vemeBlockchain.png";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap,Power4 } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

const Blockchain = () => {

  const secondpageRef = useRef();
  const firstImageRef = useRef();
  const secondImageRef = useRef();

    const initAnimation = useCallback(()=>{
      
     gsap.timeline({
       scrollTrigger:{
         trigger:secondpageRef.current,
         scrub:true,
         start:"top top",
         end:"bottom top",
       }
     }).to(firstImageRef.current,{y:0,duration:0.8,ease:Power4.easeOut},1).to(secondImageRef.current,{y:0,duration:0.8},1)
      
    },
    []);

    useEffect(()=>{
        initAnimation()
    },[initAnimation]);
  return (
        <div className="container-fluid" ref={secondpageRef}>
        <div className="row">
          <div className="col block-img-container">
              <img src={vemeUi} alt="veme app" className='block-img block-img-1' ref={firstImageRef}/>
              <img src={vemeBlockchain} alt="veme app blockchain" className='block-img block-img-2' ref={secondImageRef}/>
          </div>
        </div>
    </div>
  )
}

export default Blockchain