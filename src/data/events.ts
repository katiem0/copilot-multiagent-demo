import type { Event } from '../types'

export const events: Event[] = [
  {
    id: 'garden-supper',
    title: 'Garden Supper Club',
    date: 'Thursday, October 8',
    time: '6:30 PM',
    location: 'Juniper Community Garden',
    description: 'Bring a dish, meet a neighbor, and share dinner under the string lights.',
    capacity: 24,
    registered: 17,
    accent: '#e96638',
  },
  {
    id: 'repair-cafe',
    title: 'Saturday Repair Café',
    date: 'Saturday, October 10',
    time: '10:00 AM',
    location: 'Northside Library',
    description: 'Bring one wobbly, torn, or temperamental thing. Volunteer fixers will help.',
    capacity: 18,
    registered: 14,
    accent: '#d8f16a',
  },
  {
    id: 'sunset-walk',
    title: 'Riverside Sunset Walk',
    date: 'Tuesday, October 13',
    time: '5:45 PM',
    location: 'Mill Street Footbridge',
    description: 'An easy-paced walk with good views, good company, and no agenda.',
    capacity: 30,
    registered: 11,
    accent: '#87a6d5',
  },
]
