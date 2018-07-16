import React from 'react';
import 'bulma/css/bulma.css'
import './Error.css'

const Error400 = () => {
  return (
    <div className='content box error'>
      <h4>Error 400!</h4>
      <p>We couldn't post that, sorry! Please log in, complete all fields and try again.</p>
    </div>
  );
}

export default Error400;