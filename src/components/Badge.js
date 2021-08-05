import React from 'react';

import confLogo from '../images/badge-header.svg';

import './styles/Badge.css';
import Gravatar from './Gravatar';
/* class Badge extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div>
          <img src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar" />
          <h1>
            Richard <br /> Kaufman
          </h1>
        </div>

        <div>
          <p>Frontend Engineer</p>
          <p>@sparragus</p>
        </div>

        <div>#platziconf</div>
      </div>
    );
  }
} */

const Badge = (props) => {
  return (
    <div className="Badge">
      <div className="Badge__header">
        <img src={confLogo} alt="Logo de la conferencia" />
      </div>

      <div className="Badge__section-name">
        <Gravatar className="Badge__avatar" email={props.email} alt="Avatar" />
        <h1>
          {props.firstName} <br /> {props.lastName}
        </h1>
      </div>

      <div className="Badge__section-info">
        <h3>{props.jobTitle}</h3>
        <div>@{props.twitter}</div>
      </div>

      <div className="Badge__footer">#platziconf</div>
    </div>
  );
};

export default Badge;
