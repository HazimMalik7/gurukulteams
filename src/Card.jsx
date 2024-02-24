import Styles from "./Card.module.css";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { BsFillInfoSquareFill, BsLinkedin } from "react-icons/bs";


function Card({ data }) {
  const [show, setShow] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const props3 = useSpring({
    opacity: 1,
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show ? "0 20px 25px rgb(0 0 0 / 25%)" : "0 2px 10px rgb(0 0 0 / 8%)"
  });

  const infoProps = useSpring({
    opacity: showInfo ? 1 : 0,
    height: showInfo ? "auto" : 0,
    transform: showInfo ? "translateY(0)" : "translateY(100%)",
    config: { tension: 300, friction: 20 },
  });

  const openLinkedIn = (event, data) => {
    event.preventDefault();
    const linkedinUsername = data.linkedin
    const URL =  linkedinUsername ? "https://www.linkedin.com/in/"+ linkedinUsername : "https://www.linkedin.com/in/hazimmalik7/"
    window.open(URL, '_blank');
  }

  return (
    <animated.div
      className={Styles.card}
      style={props3}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onBlur={() => setShowInfo(false)}
    >
      <img src={data.image} alt="" />
      <h2>{data.name}</h2>
      <p className={Styles.position}>{data.position}</p>
      <p className={Styles.education}>{data.education}</p>
      <div className={Styles.btnn}>
        <button className={Styles.infoBtn} onMouseEnter={() => setShowInfo(true)}><BsFillInfoSquareFill/></button>
        <button className={Styles.infoBtn} variant="outline-success" onClick={(e) => openLinkedIn(e, data)}><BsLinkedin /></button>
      </div>
      {showInfo && (
        <div className={Styles.info} style={infoProps} onMouseLeave={() => setShowInfo(false)}>
          <div className={Styles.infoname} >{data.name}</div>
          <br/>
          {data.info}
        </div>
      )}
    </animated.div>
  );
}

export default Card;
