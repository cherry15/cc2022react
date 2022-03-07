import React from 'react'
import './custom-button.css'

export interface ButtonProps {
  onClick(event: React.MouseEvent<HTMLInputElement>): void
  buttonStyle?: 'default' | 'cancel' | 'delete' | 'ok'
  type?: string
  aria?: string
  value?: string
}

const CustomButton = ({ onClick, buttonStyle = 'default', type = 'button', aria, value }: ButtonProps) => {
  return (
    <input
      type={type}
      value={value}
      onClick={onClick}
      className={`button ${buttonStyle}`}
      aria-label={aria}
    />
  )
}

export default CustomButton
