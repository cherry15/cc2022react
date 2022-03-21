import React from 'react'
import CustomButton from '../../features/custom-button/custom-button'
import { EmployeeForm } from '../../features/employee/employee-form'
import EmployeeList from '../../features/employee/employee-list'
import { show } from '../../features/modal/modal-slice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import './dashboard.css'

const Dashboard = () => {
  const showModal = useAppSelector((state) => state.showModal.isOpen)
  const dispatch = useAppDispatch()

  const onOpenModal = (event: React.MouseEvent): void => {
    event.preventDefault()
    window.scrollTo(0, 0)
    dispatch(show(true))
  }

  return (
    <>
      {showModal && ( <EmployeeForm /> )}
      {!showModal && (
        <div className='dashboard-button-container'>
          <CustomButton
            type='button'
            value='Add employee'
            onClick={onOpenModal}
          />
        </div>
      )}
      <EmployeeList />
    </>
  )
}

export default Dashboard
