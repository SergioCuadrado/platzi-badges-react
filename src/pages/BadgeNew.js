import React, { useState } from 'react';

import './styles/BadgeNew.css';

//Components
import header from '../images/platziconf-logo.svg';
import BadgeForm from '../components/BadgeForm';
import Badge from '../components/Badge';
import api from '../api';
import PageLoading from '../components/PageLoading';

const BadgeNew = (props) => {
  // Inicializando el Hook, si le das un valor por defecto entonces se mostara directamente en el DOM, por que en el form en cada uno tiene un 'value'.
  const [form, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    twitter: '',
    gravatar: 'http://1.gravatar.com/avatar/2ddc4c2c1a65a00f8a9ec1019feb8d21',
  });

  const [estado, setEstado] = useState({
    loading: false,
    error: null,
  });

  const handleChange = (e) => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEstado({ loading: true, error: null });

    try {
      await api.badges.create(form);
      setEstado({ loading: false });

      props.history.push('/badges');
    } catch (err) {
      setEstado({ loading: false, error: err });
    }
  };

  if (estado.loading) {
    return <PageLoading />;
  }
  return (
    <React.Fragment>
      <div className="BadgeNew__hero">
        <img className="BadgeNew__hero-image img-fluid" src={header} alt="Logo" />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-6">
            <Badge
              firstName={form.firstName || 'FIRST_NAME'}
              lastName={form.lastName || 'LAST_NAME'}
              jobTitle={form.jobTitle || 'JOB_TITLE'}
              twitter={form.twitter || 'TWITTER'}
              email={form.email || 'EMAIL'}
              avatarUrl={form.gravatar}
            />
          </div>

          <div className="col-6">
            <h1>New Attendant</h1>

            <BadgeForm onChange={handleChange} onSubmit={handleSubmit} formValues={form} error={estado.error} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BadgeNew;
