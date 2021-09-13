import { PaginationProps } from '../types'

const Pagination = ({ policiesPerPage, totalPolicies, paginate }: PaginationProps) => {
  const pageNums = []

  for (let i = 1; i <= Math.ceil(totalPolicies / policiesPerPage); i++) {
    pageNums.push(i)
  }
  return (
    <div className='flex'>
      <ul className='pagination'>
        {pageNums.map((num) => (
          <button
            key={num}
            onClick={() => paginate(num)}
            className='bg-indigo-400 px-4 rounded'
          >
            <span className='text-white'>{num}</span>
          </button>
        ))}
      </ul>
    </div>
  )
}

export default Pagination
