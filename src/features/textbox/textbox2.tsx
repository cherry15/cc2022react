import React from 'react'
import textboxStyles from './textbox.module.css'

export interface TextboxProps {
  label: string
  id: string
  type?: string
}

const Textbox2 = ({
  label,
  id,
  type
}: TextboxProps) => {
  return (
    <>
      <label className={textboxStyles.label} htmlFor={id}>
        {label}
      </label>
      <input
        className={textboxStyles.input}
        id={id}
        type={type}
        placeholder={label}
      />
    </>
  )
}

export default Textbox2
