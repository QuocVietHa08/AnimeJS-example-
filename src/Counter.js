import React, { useState } from "react";
import ReactAnime from "react-animejs";
import Box from "./Box";

const Counter = () => {
  const [counter, setCounter] = useState(0)
  const handleClick = method => {
    method === 'inc' ? setCounter(counter + 1) : setCounter(counter - 1)
  }

  const { Anime, stagger } = ReactAnime;
  return (
    <div style={{ position: "relative" }}>
      <OnUnmountAnime count={counter}>
        <div
          id="BoxSlide"
          style={{ textAlign: "center", left: 0, height: 50, width: 50, background: "#d3d" }}
        >
          {counter}
        </div>
      </OnUnmountAnime>
      <div style={{ position: "absolute", top: 55, left: 95 }}>
        <div className="button" onClick={() => handleClick("dec")}>
          -
        </div>
        <div className="button" onClick={() => handleClick("inc")}>
          +
        </div>
      </div>
    </div>
  );
};

export default Counter;

const OnUnmountAnime = ({ children, count }) => {
  const { Anime, stagger } = ReactAnime;
  const animation = [
    {
      targets: "#BoxSlide",
      translateX: -100,
      duration: 0
    },
    {
      targets: "#BoxSlide",
      translateX: 100,
      easing: "easeInOutSine",
      duration: 1000
    }
  ];

  const unmountAnimation = [
    {
      targets: "#Ghost",
      translateX: 100,
      duration: 0
    },
    {
      targets: "#Ghost",
      translateX: 0,
      opacity: 0,
      easing: "easeInOutSine",
      duration: 1000
    },
    {
      targets: "#Ghost",
      zIndex: -1,
      opacity: 1,
      duration: 0,
      delay: 1000
    }
  ];

  return (
    <Anime
      style={{ fontSize: "2em", color: "#d3d3d3" }}
      id="self"
      initial={[{ targets: "#BoxSlide", translateX: -100 }]}
      _onUpdate={animation}
      _onUnmount={unmountAnimation}
    >
      {children}
      {/* <Ghost>{children}</Ghost> */}
    </Anime>
  );
};