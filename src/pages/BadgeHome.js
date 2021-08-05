import React from 'react';
import { Link } from 'react-router-dom';

import './styles/BadgeHome.css';
import astro from '../images/astronauts.svg';
import logo from '../images/platziconf-logo.svg';

const BadgeHome = () => {
  return (
    <div className="Home">
      <div className="col-text">
        <img src={logo} alt="Platzi conf logo" />
        <p>
          <h1>BADGE MANAGEMENT SYSTEM</h1>
          <Link className="btn btn-primary" to="/badges">
            Start
          </Link>
        </p>
      </div>
      <div className="col-img">
        <img src={astro} alt="Astronauta" />
      </div>
    </div>
  );
};

export default BadgeHome;
