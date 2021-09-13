export type AdminPanelProps = {
  types: any
}

export type TableProps = {
  result: any
  initSortColumn: string
  initSortDirection: string
  types: any
}

export type TableHeaderProps = {
  columns: any
  sortDirection: string
  sortColumn: any
  handleSort: (id: string, sortDirection: string) => void
  handleFilter: any
  }

export type TableRowProps = {
  //policy: any
  policy: {
    customer: Customer
    provider: string
    insuranceType: InsuranceType
    status: Status
    policyNumber: string
    startDate: Date
    endDate: Date
    createdAt: Date
  }
  columns: any
  handleEditClick: any
  types: any
  
}

export type EditTableRowProps = {
  editPolicyData: any
  handleEditPolicyChange: React.ChangeEventHandler<HTMLInputElement> | undefined
}

export type PaginationProps = {
  policiesPerPage: number
  totalPolicies: number
  paginate: any
}

export type Policy = TableRowProps & {
  [key: string]: any
}

type Customer = {
  firstName: string
  lastName: string
  dateOfBirth: Date
}

type InsuranceType = {
  insuranceName: string
}

type Status = {
  statusName: string
}
