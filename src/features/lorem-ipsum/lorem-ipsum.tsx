import React, { useEffect, useState } from 'react'

export interface LoremIpsumProps {
  numberOfSentences?: number
}

export const loremIpsumSentences: string[] = [
  `Lorem ipsum dolor sit amet.`,
  `At tellus at urna condimentum.`,
  `Consectetur adipiscing elit, sed do eiusmod tempor.`,
  `Incididunt ut labore et dolore magna aliqua.`,
  `Aliquet lectus proin nibh nisl condimentum id venenatis a condimentum.`,
  `Sed risus ultricies tristique nulla aliquet enim tortor .`,
  `Placerat vestibulum lectus mauris ultrices eros in cursus turpis massa.`,
  `Tellus orci ac auctor augue mauris augue neque gravida in.`,
  `Ligula ullamcorper malesuada proin libero nunc.`,
]

const maxSentences: number = loremIpsumSentences.length - 1

const LoremIpsum = (props: LoremIpsumProps) => {
  const [sentences, setSentences] = useState('')

  const createSentences = (numberOfSentences: number = 1) => {
    let sentence: string = ''

    if (numberOfSentences <= maxSentences) {
      sentence = loremIpsumSentences.slice(0, numberOfSentences).join(' ')
    } else {
      sentence = loremIpsumSentences[0]
    }

    setSentences(sentence)
  }

  useEffect(() => {
    createSentences(props.numberOfSentences)
  })

  return <>{sentences}</>
}

export default LoremIpsum
