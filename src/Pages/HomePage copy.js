import { Link } from "react-router-dom";
import React, { useEffect } from 'react';
import techQuestions from './tech.json'
import mathQuestions from './math.json'
import countryQuestions from './country.json'


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
            <MyName />
            <TrackMouseMovement />
            <FaceTest/>
        </div>
    )
}