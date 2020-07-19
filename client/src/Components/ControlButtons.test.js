import React from 'react'
import { render } from '@testing-library/react'
import ControlButtons from './ControlButtons'

test('<ControlButtons />', () => {
    const { container, getByTestId } = render(<ControlButtons />)

    // Take a snapshot
    expect(container.firstChild).toMatchSnapshot()

    // Get the 1X button
    const oneXButton = getByTestId('ControlButtons-oneX')
    expect(oneXButton).toHaveProperty('type', 'button')

    // Get the 1.5X button
    const onePointFiveXButton = getByTestId('ControlButtons-onePointFiveX')
    expect(onePointFiveXButton).toHaveProperty('type', 'button')

    // Get the 2X button
    const twoXButton = getByTestId('ControlButtons-twoX')
    expect(twoXButton).toHaveProperty('type', 'button')

})