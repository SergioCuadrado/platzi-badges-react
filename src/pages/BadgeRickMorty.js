import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';

import './styles/BadgeRickMorty.css';

const BadgeRickMorty = () => {
  const [data, setData] = useState([]);

  const [estado, setEstado] = useState({
    loading: false,
    error: false,
    page: 1,
  });

  let { loading, error, page } = estado;

  const consultarApi = async () => {
    try {
      setEstado({ loading: true, error: false });
      let response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
      let datos = await response.json();
      setData([...datos.results]);

      setEstado({ loading: false, page: page });
    } catch (err) {
      setEstado({ loading: false, error: true });
    }
  };

  useEffect(() => {
    consultarApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>Rick and Morty</h1>

      {error && <p>Error: {error.message}</p>}
      <ul className="list-unstyled ListRickMorty">
        {!loading && (
          <button type="button" className="btn btn-primary buttonRickMorty" onClick={() => consultarApi(page--)}>
            Hacia atrás
          </button>
        )}

        {!loading && (
          <button type="button" className="btn btn-primary buttonRickMorty" onClick={() => consultarApi(page++)}>
            Seguir
          </button>
        )}
        {data.map((personaje) => {
          return (
            <li key={personaje.id} className="BadgesRickMorty__item">
              <img src={personaje.image} alt="Avatar" className="BadgesRickMorty__avatar" />
              <div>
                <p className="BadgeRickMorty__name">{personaje.name || <Skeleton duration={5} />}</p>
                <p className="BadgeRickMorty__twitter">@{personaje.name || <Skeleton duration={5} />}</p>
                <p>{personaje.origin.name || <Skeleton duration={5} />}</p>
              </div>
            </li>
          );
        })}
      </ul>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default BadgeRickMorty;
