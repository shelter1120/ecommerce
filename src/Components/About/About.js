import React from "react";
import "../About/About.css"
import { FaFacebook, FaTwitter } from 'react-icons/fa';


const About = () => {
  return (
    <>
      <div>
        <h1 className="about">About us</h1>
        <img
           className="about-image"
          src="https://i.ytimg.com/vi/QUd3CbVyqfk/maxresdefault.jpg"
          alt="image"
        />
        <p className="about-inform">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
          consectetur itaque nobis officia voluptatibus, dolore excepturi saepe
          quidem laudantium libero ipsa repellendus delectus praesentium
          repellat consequuntur qui consequatur ex temporibus similique
          asperiores dolorem aperiam architecto sunt quam.Magni voluptates
          sapiente explicabo iste quisquam possimus quas eius! Eius reiciendis
          alias vitae.
        </p>
        <footer>
          <div className="about-icon">
            <a href="https://www.facebook.com/">
              <FaFacebook className="icon" />
            </a>
            <a href="https://www.instagram.com/">
              <FaTwitter className="icon" />
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};
export default About;
