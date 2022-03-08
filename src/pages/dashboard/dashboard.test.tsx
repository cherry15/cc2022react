import { fireEvent, screen } from '@testing-library/react'
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
