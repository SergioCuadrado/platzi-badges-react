import React from 'react';

const BadgeForm = (props) => {
  //Evento para el boton
  const handleClick = (e) => {
    console.log('Button was click!');
  };

  // Para que no se recargue la pagina, tambien se podria hacer escribiendo en el boton "type="button""
  /* const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form was submitted!');
    // Mostar en consola todos los valores del formulario
    console.log(props.formValues);
  }; */

  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input onChange={props.onChange} className="form-control" type="text" name="firstName" value={props.formValues.firstName} />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input onChange={props.onChange} className="form-control" type="text" name="lastName" value={props.formValues.lastName} />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input onChange={props.onChange} className="form-control" type="email" name="email" value={props.formValues.email} />
        </div>

        <div className="form-group">
          <label>Job Title</label>
          <input onChange={props.onChange} className="form-control" type="text" name="jobTitle" value={props.formValues.jobTitle} />
        </div>

        <div className="form-group">
          <label>Twitter</label>
          <input onChange={props.onChange} className="form-control" type="text" name="twitter" value={props.formValues.twitter} />
        </div>

        <button onClick={handleClick} className="btn btn-primary">
          Save
        </button>

        {props.error && <p className="text-danger">{props.error.message}</p>}
      </form>
    </div>
  );
};

export default BadgeForm;
