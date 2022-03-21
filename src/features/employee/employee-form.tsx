import React from 'react'
import './employee-form.css'
import { useAddEmployeeMutation, Employee } from './employees-api'
import { show } from '../modal/modal-slice'
import { useAppDispatch } from '../../app/hooks'
import { useForm, SubmitHandler } from 'react-hook-form'
import { EmployeeMessages } from './employee-messages'
import { Modal } from '../modal/modal'

export const EmployeeForm = () => {
  const [addEmployee] = useAddEmployeeMutation()
  const dispatch = useAppDispatch()

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Employee>()

  const onSubmit: SubmitHandler<Employee> = (data: Employee) => {
    const employee: Employee = {
      name: data.name,
      jobType: data.jobType,
      email: data.email,
      imageUrl:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/311.jpg',
    }
    addEmployeeToStore(employee)
  }

  const addEmployeeToStore = async (employee: Employee) => {
    await addEmployee(employee)
    dispatch(show(false))
  }

  const cancelForm = (event: React.MouseEvent<HTMLInputElement>): void => {
    event.preventDefault()
    dispatch(show(false))
  }

  return (
    <Modal
      modalTitle={EmployeeMessages.addEmployee}
      onCancel={cancelForm}
      onSubmit={handleSubmit(onSubmit)}
    >
      <form onSubmit={handleSubmit(onSubmit)} className='employee-form'>
        <label className='label' htmlFor='name'>
          Name
        </label>
        <input
          className='input'
          id='name'
          autoFocus
          {...register('name', { required: true, maxLength: 20 })}
        />
        {errors.name && <span className='error'>Name is required</span>}
        <label className='label' htmlFor='jobType'>
          Job type
        </label>
        <input
          className='input'
          id='jobType'
          {...register('jobType', { pattern: /^[A-Za-z]+$/i })}
        />
        <label className='label' htmlFor='email'>
          Email
        </label>
        <input
          className='input'
          id='email'
          {...register('email', {
            required: true,
            maxLength: 50,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
        />
        {errors.email && (
          <span className='error'>Email is required and must be valid</span>
        )}
      </form>
    </Modal>
  )
}
