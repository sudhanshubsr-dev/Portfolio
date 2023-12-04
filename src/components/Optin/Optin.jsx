
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

import "./Optin.css";

const Optin = () => {

  return (
    <div className="optin">
      <p>Please Connect With me On</p>
      <div className="social">
        <a href="https://www.github.com/sudhanshubsr-dev" target="_blank" rel="noreferrer">
          <IoLogoGithub size={33} style={{marginRight:"30px"}}/>
        </a>
        <a href="https://www.linkedin.com/in/sudhanshubsr-dev/" target="_blank" rel="noreferrer">
          <FaLinkedin size={33} style={{marginRight:"30px"}}/>
        </a>
        <a href="https://twitter.com/sudhanshubsr" target="_blank" rel="noreferrer">
          <FaTwitter size={33} />
        </a>
    </div>
    </div>
  );
}

export default Optin;
