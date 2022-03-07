import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface Employee {
  id?: string
  name: string
  jobType?: string
  email?: string
  address?: string
  imageUrl?: string
}

export const baseUrl = '/api'
export const employeesUrl = '/employees'
const employeeTag = 'Employee'

export const employeesApi = createApi({
  reducerPath: 'employeesApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: [employeeTag],

  endpoints: (builder) => ({
    employees: builder.query<Employee[], void>({
      query: () => employeesUrl,
      providesTags: [employeeTag],
    }),

    employee: builder.query<Employee, string>({
      query: (id) => `${employeesUrl}/${id}`,
    }),

    addEmployee: builder.mutation<void, Employee>({
      query: (employee) => ({
        url: employeesUrl,
        method: 'POST',
        body: employee,
      }),
      invalidatesTags: [employeeTag],
    }),

    updateEmployee: builder.mutation<void, Employee>({
      query: ({ id, ...rest }) => ({
        url: `${employeesUrl}/${id}`,
        method: 'PUT',
        body: rest,
      }),
      invalidatesTags: [employeeTag],
    }),

    deleteEmployee: builder.mutation<void, string>({
      query: (id) => ({
        url: `${employeesUrl}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [employeeTag],
    }),
  }),
})

export const {
  useEmployeesQuery,
  useEmployeeQuery,
  useAddEmployeeMutation,
  useUpdateEmployeeMutation,
  useDeleteEmployeeMutation,
} = employeesApi
