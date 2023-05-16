import React from "react";
import Pp from "./component/ProfilePicture";
import Footer from "./component/FooterSection";
import Main from "./component/ProfileMainSection";

export default function BusinessCard() {
  return (
    <div className="outside">
      <div className="card">
        <Pp />
        <Main />
        <Footer />
      </div>
    </div>
  );
}
