import '@testing-library/jest-dom/vitest'
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { RegistrationForm } from './RegistrationForm'
import type { Event } from '../types'

const event: Event = {
  id: 'garden-supper',
  title: 'Garden Supper Club',
  date: 'Thursday, October 8',
  time: '6:30 PM',
  location: 'Juniper Community Garden',
  description: 'A neighborhood dinner.',
  capacity: 24,
  registered: 17,
  accent: '#e96638',
}

afterEach(cleanup)

describe('RegistrationForm', () => {
  it('submits a registration with the selected seat count', async () => {
    const user = userEvent.setup()
    const onSubmit = vi.fn()

    render(<RegistrationForm event={event} onSubmit={onSubmit} />)

    await user.type(screen.getByPlaceholderText('Jordan Lee'), 'Avery Kim')
    await user.type(screen.getByPlaceholderText('jordan@example.com'), 'avery@example.com')
    await user.selectOptions(screen.getByRole('combobox'), '2')
    await user.click(screen.getByRole('button', { name: 'Confirm registration' }))

    expect(onSubmit).toHaveBeenCalledWith({
      eventId: 'garden-supper',
      name: 'Avery Kim',
      email: 'avery@example.com',
      seats: 2,
      updatesOptIn: true,
    })
  })

  it('blocks an incomplete registration', async () => {
    const user = userEvent.setup()
    const onSubmit = vi.fn()

    render(<RegistrationForm event={event} onSubmit={onSubmit} />)
    await user.click(screen.getByRole('button', { name: 'Confirm registration' }))

    expect(screen.getByText('Please complete the required fields.')).toBeInTheDocument()
    expect(onSubmit).not.toHaveBeenCalled()
  })
})
