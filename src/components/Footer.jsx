import React from 'react';
import * as FA from 'react-icons/lib/fa';
import './Footer.css'


const Footer = () => {
  return (
    <div className='footer content has-text-centered'>
      <div>
        <h5>created by <strong className='has-text-danger'>Vel Georgieva</strong>, as a part of <a className='has-text-danger' href='https://northcoders.com/'><strong>Northcoders</strong></a> Developer Pathway</h5>
        <p>
          <a className='footerIcon has-text-danger' href='https://github.com/antariess'><FA.FaGithub size={32}/></a> 
          <a className='footerIcon has-text-danger' href='https://www.linkedin.com/in/vgeorgieva/'><FA.FaLinkedin size={32}/></a> 
          <a className='footerIcon has-text-danger' href='https://codepen.io/antariess/'><FA.FaCodepen size={32}/></a>
          <a className='footerIcon has-text-danger' href='https://twitter.com/antariess'><FA.FaTwitter size={32}/></a>
          </p>
      </div>
    </div>
  );
};

export default Footer;