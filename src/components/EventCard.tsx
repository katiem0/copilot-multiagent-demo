import type { Event } from '../types'

type EventCardProps = {
  event: Event
  onRegister: (event: Event) => void
}

export function EventCard({ event, onRegister }: EventCardProps) {
  const spotsLeft = event.capacity - event.registered

  return (
    <article className="event-card">
      <div className="event-accent" style={{ background: event.accent }} />
      <div className="event-content">
        <span className="event-meta">{event.date} · {event.time}</span>
        <h3>{event.title}</h3>
        <p>{event.description}</p>
        <div className="event-footer">
          <span>{spotsLeft} spots open</span>
          <button className="text-button" onClick={() => onRegister(event)}>
            Save my spot
          </button>
        </div>
      </div>
    </article>
  )
}
