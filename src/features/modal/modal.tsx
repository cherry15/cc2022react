import React, { ReactNode } from 'react'
import CustomButton from '../custom-button/custom-button'
import styles from './modal.module.css'

export interface ModalProps {
  children: ReactNode,
  modalTitle: string
  onCancel?: (event: React.MouseEvent<HTMLInputElement>) => void
  onOK?: (event: React.MouseEvent<HTMLInputElement>) => void
  onSubmit?: (event: React.MouseEvent<HTMLInputElement>) => void
}

export const Modal: React.FC<ModalProps> = ({ modalTitle, onCancel, onOK, onSubmit, children }: ModalProps) => {

  return (
    <>
      <div className={styles.backDrop} onClick={onCancel}></div>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h4>{modalTitle}</h4>
          <section>{children}</section>
          <div className={styles.buttonContainer}>
          { onOK && <CustomButton
              type="button"
              value="OK"
              buttonStyle="ok"
              onClick={onOK}
            /> }
             { onSubmit && <CustomButton
              type="submit"
              value="OK"
              buttonStyle="ok"
              onClick={onSubmit}
            /> }
            { onCancel && <CustomButton
              type="button"
              value="Cancel"
              buttonStyle="cancel"
              onClick={onCancel}
            /> }
          </div>
        </div>
      </div>
    </>
  )
}
