import React from "react";
import "./Footer.css";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Andriod and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="appstore" />
      </div>
      <div className="middleFooter">
        <h1>MyEcom</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2021 &copy; Amit Rawat</p>
      </div>
      <div className="rightFooter">
        <h4>Follow Us.</h4>
        <a href="http://instagram.com/meabhisingh">Instagram</a>
        <a href="http://youtube.com/6packprogramemr">Youtube</a>
        <a href="http://instagram.com/meabhisingh">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
