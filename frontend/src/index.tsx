import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ApolloClient, HttpLink, InMemoryCache, gql, ApolloProvider } from '@apollo/client'

// create new client obj
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:4000',
  })
})

const query = gql`
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
//Send query to the server using the client obj
client.query({ query })
  .then((response) => {
    console.log('responsedata', response.data)
  })

ReactDOM.render(
  // make client accessible for all components
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
