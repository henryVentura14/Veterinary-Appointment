import React, { Fragment, useState, useEffect } from 'react'
import Form from './components/Form'
import Appointment from './components/Appointment'
import './App.css'

const App = () => {
  let initialAppointment = JSON.parse(localStorage.getItem('appointment'))
  if (!initialAppointment) {
    initialAppointment = []
  }

  const [appointments, saveAppointments] = useState(initialAppointment)

  useEffect(() => {
    let initialAppointment = JSON.parse(localStorage.getItem('appointment'))

    if (initialAppointment) {
      localStorage.setItem('appointment', JSON.stringify(appointments))
    } else {
      localStorage.setItem('appointment', JSON.stringify([]))
    }
  }, [appointments])

  const createAppointment = appointment => {
    saveAppointments([...appointments, appointment])
  }
  const deleteAppoint = id => {
    const newAppointments = appointments.filter(
      appointment => appointment.id !== id
    )
    saveAppointments(newAppointments)
  }
  const message =
    appointments.length === 0
      ? 'There are no appointments'
      : 'Manage your appointments'
  return (
    <Fragment>
      <h1>Patient manager</h1>
      <div className='container'>
        <div className='row'>
          <div className='one-half column'>
            <Form createAppointment={createAppointment} />
          </div>
          <div className='one-half column'>
            <h2>{message}</h2>
            {appointments.map(appointment => (
              <Appointment
                key={appointment.id}
                appointment={appointment}
                deleteAppoint={deleteAppoint}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default App
