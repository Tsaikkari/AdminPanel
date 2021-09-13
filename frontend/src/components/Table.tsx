import { useState, useEffect } from 'react'
import { useMutation } from '@apollo/client'

import { UPDATE_POLICY } from '../queries'

import TableHeader from './TableHeader'
import TableRow from './TableRow'
import EditTableRow from './EditTableRow'
import Pagination from './Pagination'
import { TableProps } from '../types'
import useFilteredData from '../hooks/useFilteredData'
import useSortedData from '../hooks/useSortedData'

const Table = ({ result, initSortColumn, initSortDirection, types }: TableProps) => {
  const [columns, setColumns] = useState<any[]>([])
  const [policies, setPolicies] = useState<any[]>([])

  const [filters, setFilters] = useState({})
  const filteredData = useFilteredData(policies, filters)

  const [sortColumn, setSortColumn] = useState(initSortColumn)
  const [sortDirection, setSortDirection] = useState(initSortDirection)
  const sortedData = useSortedData(filteredData, sortColumn, sortDirection, types)

  const [editByPolicyNumber, setEditByPolicyNumber] = useState('')
  const [editPolicyData, setEditPolicyData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    provider: '',
    insuranceName: '',
    statusName: '',
    policyNumber: '',
    startDate: '',
    endDate: '',
    createdAt: '',
  })

  // pagination
  const [currentPage, setCurrentPage] = useState(1)
  const [policiesPerPage] = useState(3)

  useEffect(() => {
    if (result) {
      setColumns(result.data.adminPanel.columns)
      setPolicies(result.data.adminPanel.policies)
    }
  }, [result])

  const handleEditPolicyChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault()
    const { value, name } = event.target

    setEditPolicyData((prevValue: any) => {
      return {
        ...prevValue,
        [name]: value,
      }
    })
  }

  // click on edit button
  const handleEditClick = (event: any, policy: any) => {
    event.preventDefault()
    setEditByPolicyNumber(policy.policyNumber)

    const formData = {
      firstName: policy.customer.firstName,
      lastName: policy.customer.lastName,
      dateOfBirth: policy.customer.dateOfBirth,
      provider: policy.provider,
      insuranceName: policy.insuranceType.insuranceName,
      statusName: policy.status.statusName,
      policyNumber: policy.policyNumber,
      startDate: policy.startDate,
      endDate: policy.endDate,
      createdAt: policy.createdAt,
    }

    // pre-populate form
    setEditPolicyData(formData)
  }

  const [changePolicy] = useMutation(UPDATE_POLICY)

  // update policy
  const handleEditPolicySubmit = (event: any) => {
    event.preventDefault()

    changePolicy({
      variables: {
        firstName: editPolicyData.firstName,
        lastName: editPolicyData.lastName,
        dateOfBirth: editPolicyData.dateOfBirth,
        provider: editPolicyData.provider,
        insuranceName: editPolicyData.insuranceName,
        status: editPolicyData.statusName,
        policyNumber: editPolicyData.policyNumber,
        startDate: editPolicyData.startDate,
        endDate: editPolicyData.endDate,
        createdAt: editPolicyData.createdAt,
      },
    })

    setEditByPolicyNumber('')
  }

  const indexOfLastPolicy = currentPage * policiesPerPage
  const indexOfFirstPolicy = indexOfLastPolicy - policiesPerPage
  
  // current policies
  const currentPolicies = sortedData.slice(
    indexOfFirstPolicy,
    indexOfLastPolicy
  )

  // change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <div className='mt-2 flex flex-col'>
      <div className='-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8'>
        <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
          <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
            <form onSubmit={handleEditPolicySubmit}>
              <table className='min-w-full divide-y divide-gray-200'>
                <TableHeader
                  columns={columns}
                  sortColumn={sortColumn}
                  sortDirection={sortDirection}
                  handleSort={(column: any) => {
                    if (column === sortColumn) {
                      setSortDirection(
                        sortDirection === 'ascending'
                          ? 'descending'
                          : 'ascending'
                      )
                    } else {
                      setSortColumn(column)
                      setSortDirection('ascending')
                    }
                  }}
                  handleFilter={(id: string, value: any) =>
                    setFilters({ [id]: value })
                  }
                />
                <tbody>
                  {currentPolicies &&
                    currentPolicies.map((policy: any, index: number) => (
                      <>
                        {editByPolicyNumber === policy.policyNumber ? (
                          <EditTableRow
                            key={index}
                            editPolicyData={editPolicyData}
                            handleEditPolicyChange={handleEditPolicyChange}
                          />
                        ) : (
                          <TableRow
                            types={types}
                            policy={policy}
                            columns={columns}
                            handleEditClick={handleEditClick}
                          />
                        )}
                      </>
                    ))}
                </tbody>
              </table>
              <Pagination
                policiesPerPage={policiesPerPage}
                totalPolicies={sortedData.length}
                paginate={paginate}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table
