import React from "react";
import "./style.css";

const Profile = ({
    background,
    picture,
    name,
    description
  }) => {
  return (
    <section className="profile">
      <div className="profile-background" style={{ backgroundImage: `url(${background})`}} />
      <img className="picture" src={picture} alt={`${name} profile`}/>
      <h1 className="name">{name}</h1>
      <h2 className="description">{description}</h2>
    </section>
  )
}

export default Profile;