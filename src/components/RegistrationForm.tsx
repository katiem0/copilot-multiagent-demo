import { useState } from 'react'
import type { Event, Registration } from '../types'

type RegistrationFormProps = {
  event: Event
  onSubmit: (registration: Registration) => void
}

export function RegistrationForm({ event, onSubmit }: RegistrationFormProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [seats, setSeats] = useState('1')
  const [updatesOptIn, setUpdatesOptIn] = useState(true)
  const [error, setError] = useState('')

  function handleSubmit(submitEvent: React.FormEvent<HTMLFormElement>) {
    submitEvent.preventDefault()

    if (!name || !email) {
      setError('Please complete the required fields.')
      return
    }

    const registration = {
      eventId: event.id,
      name,
      email,
      seats: Number(seats),
      updatesOptIn,
    }

    console.info('Registration submitted', registration)
    onSubmit(registration)
  }

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <p className="eyebrow">Register for</p>
      <h2 id="registration-title">{event.title}</h2>
      <p>{event.date} at {event.time} · {event.location}</p>

      {error && <div className="form-error">{error}</div>}

      <div className="form-field">
        <span>Your name</span>
        <input
          name="name"
          onChange={(changeEvent) => setName(changeEvent.target.value)}
          placeholder="Jordan Lee"
          value={name}
        />
      </div>

      <div className="form-field">
        <span>Email address</span>
        <input
          name="email"
          onChange={(changeEvent) => setEmail(changeEvent.target.value)}
          placeholder="jordan@example.com"
          value={email}
        />
      </div>

      <label className="form-field">
        <span>Number of spots</span>
        <select value={seats} onChange={(changeEvent) => setSeats(changeEvent.target.value)}>
          <option value="1">1 spot</option>
          <option value="2">2 spots</option>
          <option value="3">3 spots</option>
          <option value="4">4 spots</option>
        </select>
      </label>

      <label className="checkbox-field">
        <input
          checked={updatesOptIn}
          onChange={(changeEvent) => setUpdatesOptIn(changeEvent.target.checked)}
          type="checkbox"
        />
        <span>Email me about other Gatherly events</span>
      </label>

      <button className="button button-primary" type="submit">
        Confirm registration
      </button>
    </form>
  )
}
