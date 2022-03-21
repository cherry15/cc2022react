import React, { ReactNode } from 'react'
import CustomButton from '../custom-button/custom-button'
import styles from './modal.module.css'

export interface ModalProps {
  children: ReactNode,
  modalTitle: string
  onCancel: React.MouseEventHandler
  onOK?: React.MouseEventHandler
  onSubmit?: React.MouseEventHandler
}

export const Modal: React.FC<ModalProps> = ({ modalTitle, onCancel, onOK, onSubmit, children }: ModalProps) => {

  return (
    <>
      <div className={styles.modalBackDrop} onClick={onCancel} aria-disabled></div>
      <div className={styles.modalWrapper}>
        <div className={styles.modalContent}>
          <h4 className={styles.modalHeader}>{modalTitle}</h4>
          <section className={styles.modalBody}>{children}</section>
          <div className={styles.modalFooter}>
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
