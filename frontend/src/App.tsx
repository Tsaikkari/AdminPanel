import AdminPanel from './screens/AdminPanel'
import "./index.css";

const types = {
  customer: 'customer',
  title: 'text',
  provider: 'text',
  insuranceType: 'insuranceType',
  status: 'status',
  policyNumber: 'number',
  dateOfBirth: 'date',
  startDate: 'date',
  endDate: 'date',
  createdAt: 'date'
};

const App = () => {
  return (
    <div>
      <AdminPanel types={types} />
    </div>
  )
}

export default App;
