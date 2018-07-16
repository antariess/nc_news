import React from 'react';
import 'bulma/css/bulma.css'
import './Error.css'


const Error404 = () => {
  return (
    <div className='content box error'>
      <h4>Error 404!</h4>
      <p>We couldn't find what you are looking for!</p>
    </div>
  );
}

export default Error404;