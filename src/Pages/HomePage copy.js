import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import techQuestions from './tech.json'
import mathQuestions from './math.json'
import countryQuestions from './country.json'
import {motion, AnimatePresence} from "framer-motion";

const useMousePosition = () => {
    const [
        mousePosition,
        setMousePosition
    ] = React.useState({ x: null, y: null });
    React.useEffect(() => {
        const updateMousePosition = ev => {
            setMousePosition({ x: ev.clientX, y: ev.clientY });
        };
        window.addEventListener('mousemove', updateMousePosition);
        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);
    return mousePosition;
};



function TrackMouseMovement() {
    const mousePosition = useMousePosition();

    return (
        <p>
            Your cursor position:
            <br />
            {JSON.stringify(mousePosition)}
        </p>
    );
}


function FaceTest() {
    const eyeball = (event) => {
        const eyes = document.querySelectorAll(".eye");
        eyes.forEach((eye) => {
            const x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
            const y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
            const radian = Math.atan2(event.pageX - x, event.pageY - y);
            const rot = (radian * (180 / Math.PI) * -1) + 270;
            eye.style.transform = `rotate(${rot}deg)`;
        });
    };

    useEffect(() => {
        document.body.addEventListener("mousemove", eyeball);

        return () => {
            document.body.removeEventListener("mousemove", eyeball);
        };
    }, []);

    return (
        <div className="App">
            <div className="face">
                <div className="eyes">
                    <div className="eye"></div>
                    <div className="eye"></div>
                </div>
            </div>
        </div>
    );
}

function DropDownMenu() {

    const [open, setOpen] = useState(false);
  
    const isOpen = ()=>{
      setOpen(true);
    }
  
    const closeMenu = ()=>{
      setOpen(false);
    }
  
    //lets start animation
    const item={
      exit:{
        opacity:0,
        height:0,
        transition:{
          ease:"easeInOut",
          duration:0.3,
          delay:1.2
        }
      }
    }
  
    return (
      <div className="DropDownMenuContainer">
        <header className="headerDropDown">
          <div className="menu" onClick={isOpen}>
            <i className="fa fa-bars"></i>
          </div>       
        </header>
        <AnimatePresence>
          {
            open &&(
              <motion.div className="menu_container"
                variants={item}
                initial={{height:0,opacity:0}}
                animate={{height:"100vh", opacity:1}}
                transition={{duration:.5}}
                exit="exit"
              >
                <div className="btn_close" onClick={closeMenu}>X</div>
                <motion.a href=""
                   initial={{y:80,opacity:0}}
                   animate={{y:0, opacity:1}}
                   transition={{delay:.8}}
                   exit={{
                    opacity:0,
                    y:90,
                      transition:{
                        ease:"easeInOut",
                        delay:1
                      }
                   }}
                >Home</motion.a>
                <motion.a href=""
                   initial={{y:80,opacity:0}}
                   animate={{y:0, opacity:1}}
                   transition={{delay:.7}}
                   exit={{
                    opacity:0,
                    y:90,
                      transition:{
                        ease:"easeInOut",
                        delay:.8
                      }
                   }}
                >About</motion.a>
                <motion.a href=""
                   initial={{y:80,opacity:0}}
                   animate={{y:0, opacity:1}}
                   transition={{delay:.6}}
                   exit={{
                    opacity:0,
                    y:90,
                      transition:{
                        ease:"easeInOut",
                        delay:.6
                      }
                   }}
                >Portfolio</motion.a>
                <motion.a href=""
                   initial={{y:80,opacity:0}}
                   animate={{y:0, opacity:1}}
                   transition={{delay:.5}}
                   exit={{
                    opacity:0,
                    y:90,
                      transition:{
                        ease:"easeInOut",
                        delay:.4
                      }
                   }}
                >Blog</motion.a>
                <motion.a href=""
                   initial={{y:80,opacity:0}}
                   animate={{y:0, opacity:1}}
                   transition={{delay:.4}}
                   exit={{
                    opacity:0,
                    y:90,
                      transition:{
                        ease:"easeInOut",
                        delay:.2
                      }
                   }}
                >Contact</motion.a>
              </motion.div>
            )
          }    
        </AnimatePresence>  
       <div className="content_wrapper">
        <p>Animated Navigation</p>
       </div>
      </div>
    );
  }


function MyName() {
    return (
        <div className="text-center homeHeadContainer blueBackgroundTest vertical-center">
            <div className="container">
                <div className="nameContainer vertical-center">


                    <div className="row">
                        <div className="col-12 col-md-6 p-5 desktopStartView">
                            <h1>Hello my name is</h1>
                            <h1>Gary Nguyen</h1>
                            <p>I'm an independent creative developer from Brisbane, Australia</p>
                        </div>
                        <div className="col-12 col-md-6 p-5">

                            <div className="eyesTest">
                                <div class="face">
                                    <div class="eyes">
                                        <div class="eye"></div>
                                        <div class="eye"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default function Home() {
    return (
        <div>
            <DropDownMenu/>
            <MyName />
            <TrackMouseMovement />
            <FaceTest />
        </div>
    )
}