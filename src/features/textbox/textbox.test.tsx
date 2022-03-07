import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Textbox from './textbox'
import userEvent from '@testing-library/user-event'

describe('When everything is OK', () => {
  const onChange = jest.fn()

  test('should select an element by its label', async () => {
    render(<Textbox label='test' value='' id='' onChange={onChange} />)
    screen.getByLabelText('test')
    expect(screen.getByLabelText('test')).toBeDefined()
  })

  test('should call the onChange callback handler when using the fireEvent function', async () => {
    render(<Textbox label='test' value='' id='test' onChange={onChange} />)
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'Cheryl' },
    })
    expect(onChange).toHaveBeenCalledTimes(1)
  })

  test('should call the onChange callback handler when using the userEvent API', async () => {
    render(<Textbox label='test' value='' id='test' onChange={onChange} />)
    userEvent.type(screen.getByRole('textbox'), 'Cheryl')
    expect(onChange).toHaveBeenCalledTimes(6)
  })
})
