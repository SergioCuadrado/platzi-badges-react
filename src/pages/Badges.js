import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './styles/Badges.css';
import confLogo from '../images/badge-header.svg';
//Components
import BadgesList from '../components/BadgesList';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';

import api from '../api';

const Badges = () => {
  const [data, setData] = useState([]);

  const [estado, setEstado] = useState({
    loading: true,
    error: null,
  });
  // Equivale a la combinacion de: componentDidMount y componentDidUpdate y componentWillUnmount, las tres etapas que tiene un componente, crear, actualizar y desmontarse

  const fetchData = async () => {
    try {
      let datos = await api.badges.list();
      setData([...datos]);
      setEstado({ loading: false });
    } catch (err) {
      setEstado({ loading: false, error: err });
    }
  };

  useEffect(() => {
    setData(fetchData);
  }, []);

  // NO ME FUNCIONA AHORA MISMO
  // Actualizacion automatica usando 'Polling' (es una mala practica usar 'polling'), consiste en cada cierto tiempo busque los datos y los actualize automaticamente
  /* const [intervalId, setIntervalID] = useState();
  useEffect(() => {
    fetchData();
    const interv = setInterval(fetchData, 5000);
    setIntervalID(interv);
    return function cleanup() {
      clearInterval(intervalId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); */

  // Manejando los datos, si aun no han llegado los mensajes sale en el DOM un loading
  if (estado.loading === true) {
    return <PageLoading />;
  }

  // Manejando los errores, si sale un error no se envia los datos y sale en el DOM un error
  if (estado.error) {
    return <PageError error={estado.error} />;
  }
  return (
    <React.Fragment>
      <div className="Badges">
        <div className="Badges__hero">
          <div className="Badges__container">
            <img className="Badges_conf-logo" src={confLogo} alt="Conf logo" />
          </div>
        </div>
      </div>

      <div className="Badge__container">
        <div className="Badges__buttons">
          <Link to="/badges/new" className="btn btn-primary">
            New Badge
          </Link>
        </div>
      </div>

      <div className="Badges__list">
        <div className="Badges__container">
          <BadgesList badges={data} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Badges;
