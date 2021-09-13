import { ApolloServer, gql } from 'apollo-server'
import { GraphQLScalarType } from 'graphql'
import { Kind } from 'graphql/language'

import { resolvers } from './resolvers'

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
  # This "AdminPanel" type defines the queryable fields for every policy in our data source.
  type AdminPanel {
    columns: [Column]
    policies: [Policy]
  }

  type Column {
    id: String
    title: String
    edit: String
  }

  type Policy {
    customer: Customer
    provider: String
    insuranceType: InsuranceType
    status: Status
    policyNumber: String
    startDate: Date
    endDate: Date
    createdAt: Date
  }

  type Customer {
    firstName: String
    lastName: String
    dateOfBirth: Date
  }

  type InsuranceType {
    insuranceName: String
  }

  type Status {
    statusName: String
  }

  input PolicyInput {
    firstName: String
    lastName: String
    dateOfBirth: Date
    provider: String
    insuranceName: String
    policyNumber: String
    statusName: String
    startDate: Date
    endDate: Date
    createdAt: Date
  }

  type Mutation {
    updatePolicy(
      firstName: String
      lastName: String
      dateOfBirth: Date
      provider: String
      insuranceName: String
      policyNumber: String
      statusName: String
      startDate: Date
      endDate: Date
      createdAt: Date
    ): Policy
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    adminPanel: AdminPanel
    columns: [Column]
    policies: [Policy]
    insuranceTypes: [InsuranceType]
    statuses: [Status]
    updatePolicy(input: PolicyInput): Policy
    customers: [Customer]
  }
  scalar Date

  type MyType {
    created: Date
  }
`
const resolverMap = {
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    parseValue(value) {
      return new Date(value) // value from the client
    },
    serialize(value) {
      return value.getTime() // value sent to the client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return new Date(ast.value) // ast value is always in string format
      }
      return null
    },
  }),
}

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers })

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
