import React from 'react'
import { render } from '@testing-library/react'
import TimerDisplay from './TimerDisplay'

test('<TimerDisplay />', () => {
    const { container, getByTestId } = render(<TimerDisplay />)

    // Take a snapshot
    expect(container.firstChild).toMatchSnapshot()

    // Get the initial time
    const initialTime = getByTestId('Timerdisplay-time')
    expect(initialTime.textContent).toBe(' : ')

    // Get the button
    const submitButton = getByTestId('button')
    expect(submitButton).toHaveProperty('type', 'button')

})