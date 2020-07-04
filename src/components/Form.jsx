import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types'
import { uuid } from 'uuidv4';

const Form = ({ createAppointment }) => {
  const [appointment, setAppointment] = useState({
    pet: '',
    owner: '',
    date: '',
    hour: '',
    symptoms: ''
  });

  const [error, setError] = useState(false);

  const { pet, owner, date, hour, symptoms } = appointment;

  const updateState = e => {
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value
    })
  }
  const submitAppointment = e => {
    e.preventDefault();
    //validate
    if (pet.trim() === '' || owner.trim() === '' || date.trim() === '' || hour.trim() === '' || symptoms.trim() === '') {
      setError(true);
      return;
    }
    setError(false);
    //asing id
    appointment.id = uuid();
    //Create a appointment
    createAppointment(appointment)
    //Reset form
    setAppointment({
      pet: '',
      owner: '',
      date: '',
      hour: '',
      symptoms: ''
    })
  }

  return (
    <Fragment>
      <h2>Create appointment</h2>
      {error ? <p className="alert-error">All fields are required</p> : null}
      <form onSubmit={submitAppointment}>
        <label htmlFor="">Pet</label>
        <input type="text"
          name="pet"
          className="u-full-width"
          placeholder="Pet name"
          onChange={updateState}
          value={pet}
        />
        <label htmlFor="">Owner</label>
        <input type="text"
          name="owner"
          className="u-full-width"
          placeholder="Owner name"
          onChange={updateState}
          value={owner}
        />
        <label htmlFor="">Date</label>
        <input type="date"
          name="date"
          className="u-full-width"
          onChange={updateState}
          value={date}
        />
        <label htmlFor="">Hour</label>
        <input type="time"
          name="hour"
          className="u-full-width"
          onChange={updateState}
          value={hour}
        />
        <label htmlFor="">Symptoms</label>
        <textarea type="text"
          name="symptoms"
          className="u-full-width"
          placeholder="Symptoms"
          onChange={updateState}
          value={symptoms}
        ></textarea>
        <button type="submit" className="u-full-width button-primary">Add appointment</button>
      </form>
    </Fragment>
  )
}
Form.propTypes = {
  createAppointment: PropTypes.func.isRequired
}
export default Form;
