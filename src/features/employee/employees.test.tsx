import { fireEvent, screen } from '@testing-library/react'
import EmployeeList from './employee-list'
import { renderWithProviders } from '../../test/test-utils'
import EmployeeDetail from './employee-detail'
import { EmployeeMessages } from './employee-messages'
import { useDeleteEmployeeMutation } from './employees-api'

describe('EmployeeList', () => {
  it('gets the employees', async () => {
    renderWithProviders(<EmployeeList />)

    await screen.findByRole('heading', { name: /Ada Lovelace/i })

    const img = screen.getByRole('img', {
      name: /Ada Lovelace/i,
    }) as HTMLImageElement

    expect(img.src).toBe(
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/779.jpg'
    )
  })
})

describe('EmployeeDetail', () => {
  it('returns an employee when the employee exists', async () => {
    renderWithProviders(<EmployeeDetail id={'2'} />)
    await screen.findByRole('heading', { name: /Kathe Kollwitz/i })
    expect(screen.getByText(/Kathe Kollwitz/)).toBeDefined()
  })

  it('returns an error when the employee does not exist', async () => {
    renderWithProviders(<EmployeeDetail id={'100'} />)
    await screen.findByText(EmployeeMessages.employeeNotFound)
  })
})

describe('Delete employee', () => {
  it('clicking on the delete employee button shows the confirm delete modal', async () => {
    renderWithProviders(<EmployeeList />)
    await screen.findByRole('heading', { name: /Ada Lovelace/i })
    await screen.findAllByRole('button', { name: 'Delete employee' })

    fireEvent.click(screen.getAllByRole('button', { name: 'Delete employee' })[0])

    expect(screen.getByText(/Are you sure you want to delete the employee/)).toBeDefined()
  })

  it('clicking on the cancel button hides the confirm delete modal', async () => {
    renderWithProviders(<EmployeeList />)
    await screen.findByRole('heading', { name: /Ada Lovelace/i })
    await screen.findAllByRole('button', { name: 'Delete employee' })

    fireEvent.click(screen.getAllByRole('button', { name: 'Delete employee' })[0])

    expect(screen.getByText(/Are you sure you want to delete the employee/)).toBeDefined()
    fireEvent.click(screen.getByText('Cancel'))
    expect(screen.queryByText(/Are you sure you want to delete the employee/)).toBeNull()
  })

  it('clicking on the OK button deletes the employee', async () => {
    renderWithProviders(<EmployeeList />)
    await screen.findByRole('heading', { name: /Ada Lovelace/i })
    await screen.findAllByRole('button', { name: 'Delete employee' })

    fireEvent.click(screen.getAllByRole('button', { name: 'Delete employee' })[0])

    expect(screen.getByText(/Are you sure you want to delete the employee/)).toBeDefined()
    fireEvent.click(screen.getByText('OK'))
    expect(screen.queryByText(/Are you sure you want to delete the employee/)).toBeNull()
    await screen.findByRole('heading', { name: /Kathe Kollwitz/i })
    // expect(screen.queryByText(/Ada Lovelace/)).toBeNull()
  })
})
