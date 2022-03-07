import React, { useState } from 'react'
import Loading from '../loading/loading'
import styles from '../../styles/container.module.css'
import { Employee, useDeleteEmployeeMutation, useEmployeesQuery } from './employees-api'
import { EmployeeMessages } from './employee-messages'
import CustomButton from '../custom-button/custom-button'
import { Modal } from '../modal/modal'

const EmployeeList = () => {
  const { data, error, isLoading, isSuccess } = useEmployeesQuery()
  const [showModal, setShowModal] = useState(false)
  const [selectedEmployee, setSelectedEmployee] = useState(null)
  const [deleteEmployee] = useDeleteEmployeeMutation()

  const onOpenModal = (event: React.MouseEvent<HTMLInputElement>, employee: Employee): void => {
    event.preventDefault()
    window.scrollTo(0, 0)
    setSelectedEmployee(employee)
    setShowModal(true)
  }

  const onCloseModal = (event: React.MouseEvent<HTMLInputElement>): void => {
    event.preventDefault()
    setSelectedEmployee(null)
    setShowModal(false)
  }

  const onDeleteEmployee = async (event: React.MouseEvent<HTMLInputElement>): Promise<void> => {
    event.preventDefault()
    setShowModal(false)
    await deleteEmployee(selectedEmployee.id)
    setSelectedEmployee(null)
  }

  return (
    <>
    {showModal && <Modal modalTitle={EmployeeMessages.delete} onCancel={onCloseModal} onOK={onDeleteEmployee} >
    {`${EmployeeMessages.confirmDelete} ${selectedEmployee.name}?`}
    </Modal>}
      {isLoading && <Loading />}
      {error && <>{EmployeeMessages.serverError}</>}
      {isSuccess && (  
        <div className={styles.container}>
          {data?.map((employee: Employee) => {
            return (
              <div key={employee.id}>
                <CustomButton type="button" buttonStyle="delete" aria="Delete employee" onClick={(event) => onOpenModal(event, employee)} />
                <img src={employee.imageUrl} alt={employee.name} />
                <h3>{employee.name}</h3>
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}

export default EmployeeList
