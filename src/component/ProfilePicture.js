import React from "react";
import picture from "./profile.jpg";

export default function Pp() {
  return (
    <div className="img-box">
      <img src={picture} alt="profilePicture" className="img" />
    </div>
  );
}
