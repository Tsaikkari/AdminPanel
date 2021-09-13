import { useQuery } from '@apollo/client'

import Table from '../components/Table'
import { AdminPanelProps } from '../types'
import { ADMIN_PANEL } from '../queries'

const AdminPanel = ({ types }: AdminPanelProps) => {
  const result = useQuery(ADMIN_PANEL)

  if (result.loading) {
    return <div>Loading...</div>
  }
  if (result.error) {
    return <div>{result.error.message}</div>
  }

  return (
    <div className='min-h-screen bg-gray-100 text-gray-700'>
      <main className='max-w-12xl mx-auto px-4 sm:px-6 lg:px-8 pt-4'>
        <div className=''>
          <h1 className='text-xl font-bold'>Insurance Policies</h1>
        </div>
        <div className='mt-4'>
          <Table
            result={result}
            initSortColumn='customer'
            initSortDirection='ascending'
            types={types}
          />
        </div>
      </main>
    </div>
  )
}

export default AdminPanel
