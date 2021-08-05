import React, { useState, useEffect } from 'react';

import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';

import api from '../api';
import BadgeDetails from './BadgeDetails';

const BadgeDetailsContainer = (props) => {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    twitter: '',
    gravatar: 'http://1.gravatar.com/avatar/2ddc4c2c1a65a00f8a9ec1019feb8d21',
  });

  const [estado, setEstado] = useState({
    loading: true,
    error: null,
  });

  const [showModal, setShowModal] = useState(false);

  const [deleteBadge, setDelete] = useState({ loading: false, error: null });

  const fetchData = async () => {
    setEstado({ loading: true, error: null });
    try {
      const datos = await api.badges.read(props.match.params.badgeId);
      setEstado({ loading: false });
      setData(datos);
    } catch (err) {
      setEstado({ loading: false, error: err });
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCloseModal = (e) => {
    setShowModal(false);
  };

  const handleOpenModal = (e) => {
    setShowModal(true);
  };

  const handleDeleteBadge = async (e) => {
    setDelete({ loading: true, error: null });

    try {
      await api.badges.remove(props.match.params.badgeId);

      setDelete({ loading: false });

      props.history.push('/badges');
    } catch (err) {
      setDelete({ loading: false, error: err });
    }
  };

  if (estado.loading) {
    return <PageLoading />;
  }
  if (estado.error) {
    return <PageError />;
  }
  return (
    <BadgeDetails
      onCloseModal={handleCloseModal}
      onOpenModal={handleOpenModal}
      modalIsOpen={showModal}
      onDeleteBadge={handleDeleteBadge}
      data={data}
    />
  );
};

export default BadgeDetailsContainer;
