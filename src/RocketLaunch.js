import React, { useState, useEffect, useRef } from "react";
import "./Rocket.css";

function Rocket() {
  const [currentState, setCurrentState] = useState(1);
  const [countdownNumber, setCountdownNumber] = useState(10);
  const [nervousTxtVisible, setNervousTxtVisible] = useState(false);
  const [cantwaitTxtVisible, setCantwaitTxtVisible] = useState(false);
  const timerRef = useRef(null); // Using useRef for timer reference

  useEffect(() => {
    return () => {
      clearInterval(timerRef.current); // Clear interval on component unmount
    };
  }, []);

  const changeState = (state) => {
    clearInterval(timerRef.current);
    setCurrentState(state);
    setCountdownNumber(10);
    setNervousTxtVisible(false);
    setCantwaitTxtVisible(false);
    // Reset rocket to initial state if going back to state 1
    if (state === 1) {
      // Resetting rocket state to the initial image
      const rocket = document.querySelector('.rocket');
      rocket.style.transition = 'none'; // Disable transition temporarily
      rocket.style.bottom = '200%'; // Reset position
      rocket.style.backgroundImage = "url('./Rocket/rocket-state1.png')"; // Reset to initial image

      setTimeout(() => {
          rocket.style.transition = ''; // Re-enable transitions after reset
      }, 50); // Delay to allow for the reset position to take effect
  }
    if (state === 2) {
        timerRef.current = setInterval(() => {
            setCountdownNumber((prevCount) => {
                if (prevCount > 4 && prevCount <= 7) {
                    setNervousTxtVisible(true);
                } else {
                    setNervousTxtVisible(false);
                }

                if (prevCount > 1 && prevCount <= 4) {
                    setCantwaitTxtVisible(true);
                } else {
                    setCantwaitTxtVisible(false);
                }

                if (prevCount <= 1) {
                    clearInterval(timerRef.current);
                    // Move rocket before transitioning to lift-off state
                    const rocketElement = document.querySelector('.rocket');
                    if (rocketElement) {
                        rocketElement.classList.add('lift-off'); // Add lift-off class
                    }
                    setTimeout(() => changeState(3), 3000); // Wait for lift-off transition
                }
                return prevCount - 1;
            });
        }, 500);
    } else if (state === 3) {
        setTimeout(() => {
            const randomNumber = Math.round(Math.random() * 10);

            if (randomNumber > 2) {
                changeState(4); // launch success state
            } else {
                changeState(5); // launch failed state
            }
        }, 2000);
    }
};
const resetRocket = () => {
  setCurrentState(1); // Reset to initial state
  setCountdownNumber(10); // Reset countdown
  setNervousTxtVisible(false); // Reset nervous text visibility
  setCantwaitTxtVisible(false); // Reset cant wait text visibility
};
  return (
    <div className={`body-state${currentState}`}>
        <div className="interface state1">
            <a href="#" className="buttons" onClick={() => changeState(2)}>
                Launch!
            </a>
        </div>

        <div className="interface state2">
            <h1 id="countdown">{countdownNumber}</h1>
            <a href="#" onClick={() => changeState(1)}>
                Abort!
            </a>
        </div>

        <div className="interface state3">
            <h1>Lift Off!</h1>
        </div>

        <div className="interface state4">
            <h1>Well done!</h1>
            <div className="button-container">
                <a href="#" className="button" onClick={resetRocket}>
                    Do it again!
                </a>
            </div>
        </div>

      <div className="interface state5">
            <h1>Oh No!!!!</h1>
            <div className="button-container">
                <a href="#" className="button" onClick={resetRocket}>
                    Try again!
                </a>
            </div>
        </div>

        <div className="ground"></div>
        <div className="rocket"></div>

        <div className={`txt-1 ${nervousTxtVisible ? "show" : ""}`} id="txt-1"></div>
        <div className={`txt-2 ${cantwaitTxtVisible ? "show" : ""}`} id="txt-2"></div>
    </div>
  );
}

export default Rocket;