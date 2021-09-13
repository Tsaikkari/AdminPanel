const adminPanel = {
  columns: [
    { id: 'customer', title: 'Customer' },
    { id: 'provider', title: 'Provider' },
    { id: 'insuranceType', title: 'Insurance Type' },
    { id: 'status', title: 'Policy Status' },
    { id: 'policyNumber', title: 'Policy Number' },
    { id: 'startDate', title: 'Start Date' },
    { id: 'endDate', title: 'End Date' },
    { id: 'createdAt', title: 'Created At' },
    { id: 'edit', title: 'Edit' },
  ],
  policies: [
    {
      customer: {
        firstName: 'Anthony',
        lastName: 'Hopkins',
        dateOfBirth: 'December 31, 1937',
      },
      provider: 'Alliance',
      insuranceType: {
        insuranceName: 'Liability',
      },
      status: {
        statusName: 'Active'
      },
      policyNumber: '23456222243',
      startDate: 'September 01, 2021',
      endDate: 'September 01, 2022',
      createdAt: 'August 08, 2021',
    },
    {
      customer: {
        firstName: 'Kirk',
        lastName: 'Hammett',
        dateOfBirth: 'November 18, 1962',
      },
      provider: 'AXA',
      insuranceType: {
        insuranceName: 'Household',
      },
      status: {
        statusName: 'Pending'
      },
      policyNumber: '2923457283',
      startDate: 'September 10, 2021',
      endDate: 'September 10, 2022',
      createdAt: 'September 02, 2021',
    },
    {
      customer: {
        firstName: 'Kirk',
        lastName: 'Hammett',
        dateOfBirth: 'November 18, 1962',
      },
      provider: 'Alliance',
      insuranceType: {
        insuranceName: 'Health',
      },
      status: {
        statusName: 'Active'
      },
      policyNumber: '2345676543',
      startDate: 'September 5, 2021',
      endDate: 'September 5, 2022',
      createdAt: 'August 30, 2021',
    },
    {
      customer: {
        firstName: 'Mary',
        lastName: 'Poppins',
        dateOfBirth: 'December 30, 1938',
      },
      provider: 'Alliance',
      insuranceType: {
        insuranceName: 'Health',
      },
      status: {
        statusName: 'Pending'
      },
      policyNumber: '2345676544',
      startDate: 'October 09, 2021',
      endDate: 'Oktober 09, 2022',
      createdAt: 'September 05, 2021',
    },
  ],
}

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves data from the "adminPanel".
export const resolvers = {
  Query: {
    adminPanel: () => adminPanel,
    //policies: () => policies,
    // findPolicyByType: (root: any, args: any) =>
    //   policies.find((p) => p.insuranceType.type === args.insuranceType),
  },
  Mutation: {
    updatePolicy: (root: any, args: any) => {
      const policy = adminPanel.policies.find(
        (p) => p.policyNumber === args.policyNumber
      )

      if (!policy) {
        return null
      }

      policy.customer.firstName = args.firstName
      policy.customer.lastName = args.lastName
      policy.customer.dateOfBirth = args.dateOfBirth
      policy.provider = args.provider
      policy.insuranceType.insuranceName = args.insuranceName
      policy.policyNumber = args.policyNumber
      policy.status.statusName = args.statusName
      policy.startDate = args.startDate
      policy.endDate = args.endDate
      policy.createdAt = args.createdAt
      return policy
    },
  },
}
