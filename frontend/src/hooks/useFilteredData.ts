import { Policy } from '../types'

function useFilteredData(policies: any, filters: any) {
  return policies.filter((policy: Policy) =>
    Object.entries(filters).every(([column, filter]) => {
      switch (column) {
        case 'customer':
          return policy.customer.lastName === filter
        case 'provider': 
          return policy.provider === filter
        case 'insuranceType': 
          return policy.insuranceType.insuranceName === filter
        case 'status': 
          return policy.status.statusName === filter
        case 'policyNumber': 
          return policy.policyNumber === filter
        case 'startDate': 
          return policy.startDate === filter
        case 'endDate': 
          return policy.endDate === filter
        case 'createdAt': 
          return policy.createdAt === filter
        default: 
          return true
      }  
    })
  )
}

export default useFilteredData
