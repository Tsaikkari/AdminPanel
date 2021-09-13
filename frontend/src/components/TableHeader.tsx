import { TableHeaderProps } from '../types'

const TableHeader = ({
  columns,
  sortDirection,
  sortColumn,
  handleSort,
  handleFilter,
}: TableHeaderProps) => {
  return (
    <thead className='bg-gray-50'>
      <tr>
        {columns.map(({ id, title }: any) => (
          <th
            key={id}
            scope='col'
            className='px-6 py-3 text-left text-xl font-medium text-black-300 tracking-wider'
          >
            <button
              id='btn'
              onClick={() =>
                handleSort(
                  id,
                  sortDirection === 'ascending' ? 'descending' : 'ascending'
                )
              }
            >
              <label id='label' htmlFor={id} onClick={(event) => event.preventDefault()}>
                {title}
              </label>{' '}
              {sortColumn === id && sortDirection === 'ascending' && (
                <i
                  className='fas fa-arrow-alt-circle-up text-indigo-400'
                  aria-label={`Sorted by ${title} in ascending order`}
                ></i>
              )}
              {sortColumn === id && sortDirection === 'descending' && (
                <i
                  className='fas fa-arrow-alt-circle-down'
                  aria-label={`Sorted by ${title} in descending order`}
                ></i>
              )}
            </button>
          </th>
        ))}
      </tr>
      <tr>
        {columns.map(({ id, title }: any) =>
          id === 'edit' ? (
            <th
              key={id}
              className='px-6 py-3'
            ></th>
          ) : (
            <th
              key={id}
              className='px-6 py-3 text-left text-s font-medium'
            >
              <input
              className='py-2'
                type='text'
                id={id}
                placeholder={`Filter by ${title}`}
                onChange={(event) => handleFilter(id, event.target.value)}
              />
              {console.log('id', id)}
            </th>
          )
        )}
      </tr>
    </thead>
  )
}

export default TableHeader
