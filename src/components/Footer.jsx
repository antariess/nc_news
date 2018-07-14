import React from 'react';
import * as FA from 'react-icons/lib/fa';


const Footer = () => {
  return (
    <div>
      <div>
        <p>created by <strong>Vel Georgieva</strong>, as a part of <a href='https://northcoders.com/'><strong>Northcoders</strong></a> Developer Pathway</p>
        <p>
          find me on: 
          <a href='https://github.com/antariess'><FA.FaGithub/></a> 
          <a href='https://www.linkedin.com/in/vgeorgieva/'><FA.FaLinkedin/></a> 
          <a href='https://codepen.io/antariess/'><FA.FaCodepen/></a>
          <a href='https://twitter.com/antariess'><FA.FaTwitter/></a>
          </p>
      </div>
    </div>
  );
};

export default Footer;