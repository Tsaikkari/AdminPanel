import { gql } from '@apollo/client'

const ADMIN_PANEL = gql`
  query {
    adminPanel {
      columns {
        id
        title
      }
      policies {
        customer {
          firstName
          lastName
          dateOfBirth
        }
        provider
        insuranceType {
          insuranceName
        }
        status {
          statusName
        }
        policyNumber
        startDate
        endDate
        createdAt
      }
    }
  }
`

const UPDATE_POLICY = gql`
  mutation updatePolicy(
    $firstName: String
    $lastName: String
    $dateOfBirth: Date
    $provider: String
    $insuranceName: String
    $policyNumber: String
    $statusName: String
    $startDate: Date
    $endDate: Date
    $createdAt: Date
  ) {
    updatePolicy(
      firstName: $firstName
      lastName: $lastName
      dateOfBirth: $dateOfBirth
      provider: $provider
      insuranceName: $insuranceName
      policyNumber: $policyNumber
      statusName: $statusName
      startDate: $startDate
      endDate: $endDate
      createdAt: $createdAt
    ) {
      customer {
        firstName
        lastName
        dateOfBirth
      }
      provider
      insuranceType {
        insuranceName
      }
      status {
        statusName
      }
      policyNumber
      startDate
      endDate
      createdAt
    }
  }
`
export { ADMIN_PANEL, UPDATE_POLICY }
