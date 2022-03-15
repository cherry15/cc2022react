import { fireEvent, screen, waitForElementToBeRemoved } from '@testing-library/react'
import EmployeeList from './employee-list'
import { renderWithProviders } from '../../test/test-utils'
import EmployeeDetail from './employee-detail'
import { EmployeeMessages } from './employee-messages'
import { server } from '../../mocks/server'
import { getEmloyeesException } from '../../mocks/handlers'

window.scrollTo = jest.fn()

afterAll(() => {
  jest.clearAllMocks()
})

describe('EmployeeList', () => {
  test('gets the employees', async () => {
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
  test('returns an employee when the employee exists', async () => {
    renderWithProviders(<EmployeeDetail id={'2'} />)
    await screen.findByRole('heading', { name: /Kathe Kollwitz/i })
    expect(screen.getByText(/Kathe Kollwitz/)).toBeDefined()
  })

  test('returns an error when the employee does not exist', async () => {
    renderWithProviders(<EmployeeDetail id={'100'} />)
    await screen.findByText(EmployeeMessages.employeeNotFound)
  })
})

describe('Delete employee modal', () => {
  test('clicking on the delete employee button shows the confirm delete modal', async () => {
    renderWithProviders(<EmployeeList />)
    await screen.findByRole('heading', { name: /Ada Lovelace/i })
    await screen.findAllByRole('button', { name: 'Delete employee' })

    fireEvent.click(
      screen.getAllByRole('button', { name: 'Delete employee' })[0]
    )

    expect(
      screen.getByText(/Are you sure you want to delete the employee/)
    ).toBeDefined()
  })

  test('clicking on the cancel button hides the confirm delete modal', async () => {
    renderWithProviders(<EmployeeList />)
    await screen.findByRole('heading', { name: /Ada Lovelace/i })
    await screen.findAllByRole('button', { name: 'Delete employee' })

    fireEvent.click(
      screen.getAllByRole('button', { name: 'Delete employee' })[0]
    )

    expect(
      screen.getByText(/Are you sure you want to delete the employee/)
    ).toBeDefined()

    fireEvent.click(screen.getByText('Cancel'))

    expect(
      screen.queryByText(/Are you sure you want to delete the employee/)
    ).toBeNull()
  })
})

describe('Delete employee', () => {
  test('clicking on the OK button deletes the employee', async () => {
    renderWithProviders(<EmployeeList />)
    await screen.findByRole('heading', { name: /ada lovelace/i })

    expect(screen.queryByText(/ada lovelace/i)).toBeInTheDocument()
    
    await screen.findAllByRole('button', { name: 'Delete employee' })

    fireEvent.click(
      screen.getAllByRole('button', { name: 'Delete employee' })[0]
    )

    fireEvent.click(await screen.findByText('OK'))
    await waitForElementToBeRemoved(() => screen.queryByRole('heading', { name: /ada lovelace/i }))

    expect(screen.queryByText(/ada lovelace/i)).toBeNull()
  })
})

describe('Bad network', () => {
  test('shows error', async () => {
    server.use(getEmloyeesException)
    renderWithProviders(<EmployeeList />)

    const errorDisplay = await screen.findByText(EmployeeMessages.serverError)
    expect(errorDisplay).toBeInTheDocument()

    const displayedEmployees = screen.queryAllByRole('heading')
    expect(displayedEmployees).toEqual([])
  })
})
