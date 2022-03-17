import { fireEvent, screen } from '@testing-library/react'
import { Employee } from '../../features/employee/employees-api'
import { renderWithProviders } from '../../test/test-utils'
import Dashboard from './dashboard'

window.scrollTo = jest.fn()

afterAll(() => {
  jest.clearAllMocks()
})

describe('Dashboard', () => {
  test('gets the employees', async () => {
    renderWithProviders(<Dashboard />)

    await screen.findByRole('heading', { name: /Ada Lovelace/i })

    const img = screen.getByRole('img', {
      name: /Ada Lovelace/i,
    }) as HTMLImageElement

    expect(img.src).toBe(
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/779.jpg'
    )
  })

  test('clicking on the add employee button shows the add employee form', async () => {
    renderWithProviders(<Dashboard />)
    fireEvent.click(screen.getByText('Add employee'))

    expect(screen.getByLabelText(/Name/)).toBeDefined()
  })

  test('clicking on the cancel button hides the add employee form', async () => {
    renderWithProviders(<Dashboard />)
    fireEvent.click(screen.getByText('Add employee'))
    fireEvent.click(screen.getByText('Cancel'))

    expect(screen.queryByLabelText(/Name/)).toBeNull()
  })
})

describe('Adding an employee, happy path', () => {
  test('clicking on the OK button adds the employee', async () => {
    renderWithProviders(<Dashboard />)
    fireEvent.click(screen.getByText('Add employee'))
    const employee: Employee = {
      name: 'Jane Collier',
      jobType: 'Engineer',
      email: 't@test.com'
    }
    const nameInput = screen.getByLabelText(/name/i)
    fireEvent.change(nameInput, { target: { value: employee.name } })

    const jobTypeInput = screen.getByLabelText(/job type/i)
    fireEvent.change(jobTypeInput, { target: { value: employee.jobType } })

    const emailInput = screen.getByLabelText(/email/i)
    fireEvent.change(emailInput, { target: { value: employee.email } })

    expect(screen.getByDisplayValue(employee.name)).toBeInTheDocument()
    expect(screen.getByDisplayValue(employee.jobType)).toBeInTheDocument()
    expect(screen.getByDisplayValue(employee.email)).toBeInTheDocument()

    fireEvent.click(screen.getByText('OK'))

    const newEmployee = await screen.findByRole('heading', { name: employee.name })
    expect(newEmployee).toBeInTheDocument()
  })
})
