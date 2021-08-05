import React, { useState, useEffect } from 'react';

import './styles/BadgeEdit.css';

//Components
import header from '../images/platziconf-logo.svg';
import BadgeForm from '../components/BadgeForm';
import Badge from '../components/Badge';
import api from '../api';
import PageLoading from '../components/PageLoading';

const BadgeEdit = (props) => {
  const [form, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    twitter: '',
  });

  const [estado, setEstado] = useState({
    loading: true,
    error: null,
  });

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async (e) => {
    setEstado({ loading: true, error: null });

    try {
      const data = await api.badges.read(props.match.params.badgeId);

      setEstado({ loading: false });
      setValues(data);
    } catch (err) {
      setEstado({ loading: false, error: err });
    }
  };

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
      await api.badges.update(props.match.params.badgeId, form);
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
      <div className="BadgeEdit__hero">
        <img className="BadgeEdit__hero-image img-fluid" src={header} alt="Logo" />
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
            <h1>Edit Attendant</h1>
            <BadgeForm onChange={handleChange} onSubmit={handleSubmit} formValues={form} error={estado.error} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BadgeEdit;
