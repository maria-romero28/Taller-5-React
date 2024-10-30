import React from "react";
import "../styles/ProfileCard.css";
import image from "../assets/Yo.jpg";

function ProfileCard({ name, description }) {
  return (
    <div className="profile-card">
      <div className="profile-image-container">
        <img src={image} alt={name} className="profile-image" />
      </div>
      <h2 className="profile-name">{name}</h2>
      <p className="profile-description">{description}</p>
    </div>
  );
}

export default ProfileCard;
