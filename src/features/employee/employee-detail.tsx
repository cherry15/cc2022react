import React from 'react'
import { useEmployeeQuery } from './employees-api'
import styles from '../../styles/container.module.css'
import Loading from '../loading/loading'
import { EmployeeMessages } from './employee-messages'

const EmployeeDetail = ({ id }: { id: string }) => {
  const { data, error, isLoading, isSuccess } = useEmployeeQuery(id)
  return (
    <>
      <h1>Employees</h1>
      {isLoading && <Loading />}
      {error && <>{EmployeeMessages.employeeNotFound}</>}
      {isSuccess && (
        <div className={styles.container}>
          return (
          <div>
            <h3>{data?.name}</h3>
            <img src={data?.imageUrl} alt={data?.name} />
          </div>
          );
        </div>
      )}
    </>
  )
}

export default EmployeeDetail
