import React from 'react';
import { Link } from 'react-router-dom';

// Style
import './styles/BadgeDetails.css';
import confLogo from '../images/platziconf-logo.svg';

//Components
import Badge from '../components/Badge';
import DeleteBadgeModal from '../components/DeleteBadgeModal';

const BadgeDetails = (props) => {
  const data = props.data;
  return (
    <div>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={confLogo} alt="Logo de la conferencia" />
            </div>
            <div className="col-6 BadgeDetails__hero-attendant-name">
              <h1>
                {data.firstName} {data.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <Badge firstName={data.firstName} lastName={data.lastName} email={data.email} twitter={data.twitter} jobTitle={data.jobTitle} />
          </div>
          <div className="col">
            <h2>Actions</h2>
            <div>
              <div>
                <Link className="btn btn-primary mb-4" to={`/badges/${data.id}/edit`}>
                  Edit
                </Link>
              </div>
              <div>
                <button onClick={props.onOpenModal} className="btn btn-danger">
                  Delete
                </button>
                <DeleteBadgeModal isOpen={props.modalIsOpen} onClose={props.onCloseModal} onDeleteBadge={props.onDeleteBadge} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BadgeDetails;
