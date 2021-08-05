import React from 'react';

import error from '../images/Bug-fixing-bro.svg';

import './styles/NotFound.css';

const NotFound = () => {
  return (
    <div className="ErrorPage">
      <div>
        <h1>404: Not Found</h1>
      </div>
      <div>
        <img src={error} alt="" />
      </div>
    </div>
  );
};

export default NotFound;
