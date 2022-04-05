import React from "react";
import "./contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:mymailforabhi@gmail.com">
        <Button>Contact: arwtt55555@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;
