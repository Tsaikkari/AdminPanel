import { TableRowProps } from '../types'

const TableRow = ({
  policy,
  columns,
  handleEditClick,
  types
}: TableRowProps) => {
  return (
    <tr
      className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'
      aria-label='table-row'
    >
      {/* {columns.map(({ id }: any) =>
        id === policy.customer ? (
          Object.entries(policy.customer).map((c) => <td key={id}><p> {c[1]}</p></td>)
        ) : id === policy.status ? (
          Object.entries(policy.insuranceType).map((s) => <td key={id}><p> {s[1]}</p></td>)
        ) : id === policy.status ? (
            Object.entries(policy.status).map((s) => <td key={id}><p> {s[1]}</p></td>)
        ) : (
          <td key={id}>{policy}</td>
        )
      )} */}
        <>
          <td className='px-6 py-4 whitespace-nowrap'>
            <p className='text-s'>
              {policy?.customer.firstName} {policy?.customer.lastName}
            </p>
            <p className='text-s'>
              Date of Birth: {policy?.customer.dateOfBirth}
            </p>
          </td>
          <td className='px-6 py-4 whitespace-nowrap'>
            <p className='text-s provider'>{policy.provider}</p>
          </td>
          <td className='px-6 py-4 whitespace-nowrap'>
            {policy.insuranceType.insuranceName === 'Liability' ? (
              <p className='text-s health'>Liability</p>
            ) : policy.insuranceType.insuranceName === 'Household' ? (
              <p className='text-s'>Household</p>
            ) : (
              <p className='text-s'>Health</p>
            )}
          </td>
          <td className='px-6 py-4 whitespace-nowrap'>
            {policy.status.statusName === 'Active' ? (
              <p className='text-s'>Active</p>
            ) : policy?.status.statusName === 'Pending' ? (
              'Pending'
            ) : policy?.status.statusName === 'Cancelled' ? (
              'Cancelled'
            ) : (
              'Dropped out'
            )}
          </td>
          <td className='px-6 py-4 whitespace-nowrap'>
            <p className='text-s'>{policy?.policyNumber}</p>
          </td>
          <td className='px-6 py-4 whitespace-nowrap'>
            <p className='text-s'>{policy?.startDate}</p>
          </td>
          <td className='px-6 py-4 whitespace-nowrap'>
            <p className='text-s'>{policy?.endDate}</p>
          </td>
          <td className='px-6 py-4 whitespace-nowrap'>
            <p className='text-s'>{policy?.createdAt}</p>
          </td>
          <td className='px-6 py-4 whitespace-nowrap'>
            <button
              className='px-6 py-4 whitespace-nowrap'
              type='button'
              onClick={(event) => handleEditClick(event, policy)}
            >
              <i className='fas fa-edit'></i>
            </button>
          </td>
        </>
    </tr>
  )
}

export default TableRow
