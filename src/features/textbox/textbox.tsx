import React from 'react'
import textboxStyles from './textbox.module.css'

const Textbox = ({
  label,
  value,
  onChange,
  id,
  type = 'text',
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
        value={value}
        onChange={onChange}
        placeholder={label}
      />
    </>
  )
}

export interface TextboxProps {
  label: string
  value: string
  id: string
  type?: string
  onChange(event: React.ChangeEvent<HTMLInputElement>): void
}

export default Textbox
