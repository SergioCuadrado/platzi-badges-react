import React from 'react';

import './styles/PageError.css';

import ErrorLogo from '../images/503-Error.svg';
const PageError = (props) => {
  return (
    <div className="PageError">
      <img className="PageError__img" src={ErrorLogo} alt="" />
      {props.error.message}
    </div>
  );
};

export default PageError;
