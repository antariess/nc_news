import React from 'react';
import 'bulma/css/bulma.css'
import './Error.css'



const Error401 = () => {
  return (
    <div className='content box error'>
      <h4>User not found!</h4>
      <p>Please choose a username from the followong: 'jessjelly', 'tickle122', 'grumpy19', 'happyamy2016' or 'cooljmessy'</p>
    </div>
  );
}

export default Error401;