import React from "react";

export default function Main() {
  return (
    <main className="main-container">
      <div className="profile-container">
        <h1 className="heading-primary">Drazen Simonovic</h1>
        <h2 className="heading-secondary">Frontend Developer</h2>
        <p className="profile-link">drazensimonovic18@gmail.com</p>
      </div>
      <div className="profile-buttons">
        <a href="#" className="btn btn-white">
          <ion-icon name="mail-outline"></ion-icon>
          Email
        </a>
        <a href="#" className="btn btn-blue">
          <ion-icon name="logo-linkedin"></ion-icon>
          Linkedin
        </a>
      </div>
      <div className="profile-main">
        <div className="profile-info">
          <h3 className="heading-tertiary">About</h3>
          <p className="profile-text">
            I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things to
            learn.
          </p>
        </div>
        <div className="profile-info">
          <h3 className="heading-tertiary">Interests</h3>
          <p className="profile-text">
            Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
            Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
          </p>
        </div>
      </div>
    </main>
  );
}
