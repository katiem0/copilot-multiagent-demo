export type Event = {
  id: string
  title: string
  date: string
  time: string
  location: string
  description: string
  capacity: number
  registered: number
  accent: string
}

export type Registration = {
  eventId: string
  name: string
  email: string
  seats: number
  updatesOptIn: boolean
}
