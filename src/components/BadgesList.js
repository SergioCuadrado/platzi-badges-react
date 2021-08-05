import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

import './styles/BadgeList.css';
import Gravatar from './Gravatar';

import modifier_logo from '../images/modifier-icon.png';

function useSearchBadges(props) {
  const [query, setQuery] = useState('');
  const [filteredBadges, setFilterBadges] = useState(props.badges);

  //useMemo es un hook de React en este caso es para que no se cree un cuello de botella en que funciona que la primera vez correra la funcion y la siguiente que vez que devuelva el mismo valor entonces no hara la busqueda sino que lo tendra guardado en memoria, el segundo valor es [props.badges,query]
  useMemo(() => {
    const result = props.badges.filter((badge) => {
      return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase());
    });

    setFilterBadges(result);
  }, [props.badges, query]);

  return { query, setQuery, filteredBadges };
}

const BadgesList = (props) => {
  const { query, setQuery, filteredBadges } = useSearchBadges(props);

  if (filteredBadges.length === 0) {
    return (
      <div>
        <div className="form-group">
          <label>Filter Badges</label>
          <input type="text" className="form-control" value={query} onChange={(e) => setQuery(e.target.value)} />
        </div>
        <h3>No badges were found</h3>
        <Link className="btn btn-primary" to="/badges/new">
          Create new badge
        </Link>
      </div>
    );
  }
  return (
    <div className="BadgeList">
      <div className="form-group">
        <label>Filter Badges</label>
        <input type="text" className="form-control" value={query} onChange={(e) => setQuery(e.target.value)} />
      </div>
      <ul className="list-unstyled Badge_list">
        {filteredBadges.map((badge) => {
          return (
            <li key={badge.id} className="BadgesList__item">
              <Gravatar email={badge.email} alt="Avatar" className="BadgesList__avatar" />
              <div>
                <p className="BadgeList__name">
                  {badge.firstName} {badge.lastName}
                </p>
                <p className="BadgeList__twitter">@{badge.twitter}</p>
                <p>{badge.jobTitle}</p>
              </div>
              <Link className="text-reset text-decoration-none BadgeList__icon-modifier" to={`/badges/${badge.id}`}>
                <img src={modifier_logo} alt="" />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BadgesList;
