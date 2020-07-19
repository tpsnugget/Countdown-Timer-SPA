import React from 'react'
import { render } from '@testing-library/react'
import Input from './Input'

test('<Input />', () => {
    const { container, getByTestId } = render(<Input />)

    // Take a snapshot
    expect(container.firstChild).toMatchSnapshot()

    // Get the Countdown: text
    const countDownText = getByTestId('Input-countdown-text')
    expect(countDownText.textContent).toBe('Countdown:')

    // Get the TextField input box
    const textField = getByTestId('Input-textfield-input')
    expect(textField.firstChild.firstChild.textContent).toBe('(Min)')

    // Get the button
    const submitButton = getByTestId('button')
    expect(submitButton).toHaveProperty('type', 'button')
})