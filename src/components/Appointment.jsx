import React from 'react'
import PropTypes from 'prop-types'

const Appointment = ({ appointment, deleteAppoint }) =>
    (
        <div className="appointment">
            <p>Pet :
                <span> {appointment.pet}</span>
            </p>
            <p>Owner :
                <span> {appointment.owner}</span>
            </p>
            <p>Date :
                <span> {appointment.date}</span>
            </p>
            <p>Hour :
                <span> {appointment.hour}</span>
            </p>
            <p>Symptoms :
                <span> {appointment.symptoms}</span>
            </p>
            <button className="button delete u-full-width"
                onClick={() => deleteAppoint(appointment.id)}
            >
                Eliminar &times;
            </button>
        </div>
    )
Appointment.propTypes = {
    appointment: PropTypes.object.isRequired,
    deleteAppoint: PropTypes.func.isRequired
}

export default Appointment
