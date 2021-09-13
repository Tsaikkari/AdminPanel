import { EditTableRowProps } from '../types'

const EditTableRow = ({
  editPolicyData,
  handleEditPolicyChange,
}: EditTableRowProps) => {
  return (
    <tr
      className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'
      aria-label='table-row'
    >
      <td className='px-6 py-4 whitespace-nowrap'>
        <input
          type='text'
          placeholder='First Name'
          name='firstName'
          value={editPolicyData.firstName}
          onChange={handleEditPolicyChange}
        ></input>
        <input
          type='text'
          placeholder='Last Name'
          name='lastName'
          value={editPolicyData.lastName}
          onChange={handleEditPolicyChange}
        ></input>
        <input
          type='text'
          placeholder='Date of Birth'
          name='dateOfBirth'
          value={editPolicyData.dateOfBirth}
          onChange={handleEditPolicyChange}
        ></input>
      </td>
      <td className='px-6 py-4 whitespace-nowrap'>
        <input
          type='text'
          placeholder='Provider'
          name='provider'
          value={editPolicyData.provider}
          onChange={handleEditPolicyChange}
        ></input>
      </td>
      <td className='px-6 py-4 whitespace-nowrap'>
        <input
          type='text'
          placeholder='Insurance Type'
          name='type'
          value={editPolicyData.type}
          onChange={handleEditPolicyChange}
        ></input>
      </td>
      <td className='px-6 py-4 whitespace-nowrap'>
        <input
          type='text'
          placeholder='Status'
          name='status'
          value={editPolicyData.status}
          onChange={handleEditPolicyChange}
        ></input>
      </td>
      <td className='px-6 py-4 whitespace-nowrap'>
        <input
          type='text'
          placeholder='Policy Number'
          name='policyNumber'
          value={editPolicyData.policyNumber}
          onChange={handleEditPolicyChange}
        ></input>
      </td>
      <td className='px-6 py-4 whitespace-nowrap'>
        <input
          type='text'
          placeholder='Start Date'
          name='startDate'
          value={editPolicyData.startDate}
          onChange={handleEditPolicyChange}
        ></input>
      </td>
      <td className='px-6 py-4 whitespace-nowrap'>
        <input
          type='text'
          placeholder='End Date'
          name='endDate'
          value={editPolicyData.endDate}
          onChange={handleEditPolicyChange}
        ></input>
      </td>
      <td className='px-6 py-4 whitespace-nowrap'>
        <input
          type='text'
          placeholder='Created At'
          name='createdAt'
          value={editPolicyData.createdAt}
          onChange={handleEditPolicyChange}
        ></input>
      </td>
      <td>
        <button
          className='bg-indigo-400 px-3 py-1 rounded text-white ml-4'
          type='submit'
        >
          Save
        </button>
      </td>
    </tr>
  )
}

export default EditTableRow
