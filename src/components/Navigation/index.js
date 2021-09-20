import React from "react";
import "./style.css";
import emailIcon from "../../assets/gmail.svg";
import githubIcon from "../../assets/github1.svg";
import linkedinIcon from "../../assets/linkedin.svg";

const Navigation = ({
  linkedin,
  github,
  email
}) => {
  return (
    <section className="navigation">
      <div className="float">
        <a className="link" href={`https://wa.me/${linkedin}`}>
         <img className="icon" src={linkedinIcon} alt="linkedin"/>
          <span className="text">LinkedIn</span>
        </a>
        <a className="link" href={`tel:${github}`}>
          <img className="icon" src={githubIcon} alt="github"/>
          <span className="text">Github</span>
        </a>
        <a className="link" href={`mailto:${email}`}>
          <img className="icon" src={emailIcon} alt="Email"/>
          <span className="text">Email</span>
        </a>
      </div>
    </section>
  );
}

export default Navigation;