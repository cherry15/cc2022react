import '@testing-library/jest-dom'
import { server } from './test/server'

process.env.DEBUG_PRINT_LIMIT = '15000'

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
afterAll(() => server.close())
afterEach(() => server.resetHandlers())
