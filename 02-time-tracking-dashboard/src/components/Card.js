import React from "react";
import CardInfo from "./CardInfo";
import Play from "../assets/icon-play.svg";
import Work from "../assets/icon-work.svg";
import Study from "../assets/icon-study.svg";
import Social from "../assets/icon-social.svg";
import Exercise from "../assets/icon-exercise.svg";
import SelfCare from "../assets/icon-self-care.svg";

const getImg = src => {
  switch (src) {
    case "Work":
      return Work;
    case "Play":
      return Play;
    case "Study":
      return Study;
    case "Social":
      return Social;
    case "Exercise":
      return Exercise;
    case "Self Care":
      return SelfCare;
    default:
      return "";
  }
};

const Card = ({ data, showPage }) => {
  return (
    <div className={`card ${data.title}`}>
      <div className="card-image">
        <img src={getImg(data.title)} alt={data.title} />
      </div>

      <CardInfo info={data} showPage={showPage} />
    </div>
  );
};

export default Card;
