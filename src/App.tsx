import { useState } from 'react'
import './App.css'
import { EventCard } from './components/EventCard'
import { RegistrationForm } from './components/RegistrationForm'
import { events } from './data/events'
import type { Event, Registration } from './types'

export default function App() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const [registration, setRegistration] = useState<Registration | null>(null)

  function openRegistration(event: Event) {
    setRegistration(null)
    setSelectedEvent(event)
  }

  function completeRegistration(details: Registration) {
    setRegistration(details)
    setSelectedEvent(null)
  }

  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="#events" aria-label="Gatherly home">
          <span className="brand-mark">G</span>
          Gatherly
        </a>
        <nav aria-label="Primary navigation">
          <a href="#events">Find an event</a>
          <a href="#how-it-works">How it works</a>
        </nav>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div>
            <p className="eyebrow">Make time for your community</p>
            <h1 id="hero-title">Good plans start with a simple yes.</h1>
            <p className="hero-copy">
              Find a local event, save your spot, and spend less time
              coordinating.
            </p>
            <a className="button button-primary" href="#events">
              Browse upcoming events
            </a>
          </div>
          <div className="hero-art" aria-hidden="true">
            <span className="hero-date">12</span>
            <span className="hero-note">neighbors are joining this week</span>
          </div>
        </section>

        <section className="events-section" id="events" aria-labelledby="events-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Around the neighborhood</p>
              <h2 id="events-title">Pick your next plan</h2>
            </div>
            <p>Friendly gatherings. Clear details. No group-chat archaeology.</p>
          </div>

          <div className="event-grid">
            {events.map((event) => (
              <EventCard
                event={event}
                key={event.id}
                onRegister={openRegistration}
              />
            ))}
          </div>
        </section>

        <section className="how-it-works" id="how-it-works" aria-labelledby="how-title">
          <p className="eyebrow">Three easy steps</p>
          <h2 id="how-title">From maybe to marked on the calendar</h2>
          <ol>
            <li><span>01</span>Choose something that sounds fun.</li>
            <li><span>02</span>Tell the host who is coming.</li>
            <li><span>03</span>Get the details and show up.</li>
          </ol>
        </section>

        {registration && (
          <section className="success-card" aria-live="polite">
            <p className="eyebrow">You are on the list</p>
            <h2>See you there, {registration.name}!</h2>
            <p>
              We saved {registration.seats} {registration.seats === 1 ? 'spot' : 'spots'}.
              Event details are headed to {registration.email}.
            </p>
            <button className="text-button" onClick={() => setRegistration(null)}>
              Dismiss
            </button>
          </section>
        )}
      </main>

      <footer>
        <span>Gatherly</span>
        <p>Small events. Stronger communities.</p>
      </footer>

      {selectedEvent && (
        <div className="modal-backdrop">
          <div className="modal" role="dialog" aria-modal="true" aria-labelledby="registration-title">
            <button
              className="close-button"
              aria-label="Close registration"
              onClick={() => setSelectedEvent(null)}
            >
              ×
            </button>
            <RegistrationForm event={selectedEvent} onSubmit={completeRegistration} />
          </div>
        </div>
      )}
    </div>
  )
}
