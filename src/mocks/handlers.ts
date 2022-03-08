import { rest } from 'msw'
import {
  Employee,
  baseUrl,
  employeesUrl,
} from '../features/employee/employees-api'
import { EmployeesData } from './employees-data'
import { v4 as uuidv4 } from 'uuid'

const url = `${baseUrl}${employeesUrl}`

export const handlers = [
  rest.get<Employee[]>(url, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(EmployeesData))
  }),

  rest.get<Employee>(`${url}/:employeeId`, (req, res, ctx) => {
    const { employeeId } = req.params
    if (employeeId) {
      const employeeIndex = EmployeesData.findIndex(
        (employee) => employee.id === employeeId.toString()
      )
      if (employeeIndex !== -1) {
        return res(ctx.json(EmployeesData[employeeIndex]), ctx.status(200))
      } else {
        return res(ctx.status(404))
      }
    }
    return res(ctx.status(400))
  }),

  rest.post<Employee>(`${url}`, (req, res, ctx) => {
    if (req.body?.name) {
      const employee: Employee = {
        id: uuidv4(),
        ...req.body,
      }
      EmployeesData.push(employee)
      return res(ctx.status(201), ctx.json(employee))
    }
    return res(ctx.status(400))
  }),

  rest.delete(`${url}/:employeeId`, (req, res, ctx) => {
    const { employeeId } = req.params
    if (employeeId) {
      const employeeIndex = EmployeesData.findIndex(
        (employee) => employee.id === employeeId.toString()
      )
      if (employeeIndex !== -1) {
        EmployeesData.splice(employeeIndex, 1)
        return res(ctx.status(200))
      } else {
        return res(ctx.status(404))
      }
    }
    return res(ctx.status(400))
  }),

  rest.put<Employee>(`${url}/:employeeId`, (req, res, ctx) => {
    const { employeeId } = req.params
    if (employeeId) {
      const employeeIndex = EmployeesData.findIndex(
        (employee) => employee.id === employeeId.toString()
      )
      if (employeeIndex !== -1) {
        EmployeesData[employeeIndex] = { ...req.body }
        return res(ctx.status(200))
      } else {
        return res(ctx.status(404))
      }
    }
    return res(ctx.status(400))
  }),
]

export const getEmloyeesException = rest.get<Employee[]>(
  url,
  async (req, res, ctx) =>
    res(ctx.status(500), ctx.json({ message: 'Deliberately broken request' }))
)

