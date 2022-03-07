import React from 'react'
import { act } from '@testing-library/react'
import LoremIpsum from './lorem-ipsum'
import { render, unmountComponentAtNode } from 'react-dom'
import { loremIpsumSentences } from './lorem-ipsum'

describe('Lorem Ipsum feature', () => {
  let container: any = null

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    unmountComponentAtNode(container)
    container.remove()
    container = null
  })

  test('should show the default number of sentences when no props are passed in', () => {
    act(() => {
      render(<LoremIpsum />, container)
    })

    expect(container.textContent).toBe(loremIpsumSentences[0])
  })

  test('should show 3 sentences when 3 is passed in', () => {
    const max = 3

    act(() => {
      render(<LoremIpsum numberOfSentences={max} />, container)
    })

    const sentence = loremIpsumSentences.slice(0, max).join(' ')
    expect(container.textContent).toBe(sentence)
  })

  test('should show 1 sentence when too big a number is passed in', () => {
    const max = loremIpsumSentences.length

    act(() => {
      render(<LoremIpsum numberOfSentences={max} />, container)
    })

    expect(container.textContent).toBe(loremIpsumSentences[0])
  })
})
