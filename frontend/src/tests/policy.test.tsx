import { MockedProvider } from '@apollo/client/testing'
import { mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { act } from 'react-dom/test-utils'
import wait from 'waait'
import { ADMIN_PANEL } from '../queries'
import Table from '../components/Table'
import TableRow from '../components/TableRow'

configure({ adapter: new Adapter() })

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

const mockTableData = {
  request: {
    query: ADMIN_PANEL,
  },
  result: {
    data: {
      adminPanel: {
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
              insuranceName: 'Liability'
            },
            status: {
              statusName: 'Active'
            },
            policyNumber: '2345676543',
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
              insuranceName: 'Household'
            },
            status: {
              statusName: 'Pending'
            },
            policyNumber: '2923457283',
            startDate: 'September 10, 2021',
            endDate: 'September 10, 2022',
            createdAt: 'September 02, 2021',
          },
        ],
      },
    },
  },
}

const { columns, policies }: any = mockTableData.result.data.adminPanel

describe('Table', () => {
  const colTable = columns.map(({ id, title }: any) => [id, title])

  describe('sorting', () => {
    //@ts-ignore
    describe.each(colTable)('column', (id, title) => {
      it('sorts a column', () => {
        let wrapper
        act(() => {
          wrapper = mount(
            <MockedProvider>
              <Table
                initSortColumn={id}
                initSortDirection='ascending'
                result={[mockTableData.result]}
                types={types}
              />
            </MockedProvider>
          )
        })
        //@ts-ignore
        const btn = wrapper.find('#btn')
        btn.simulate('click')

        expect(wrapper).toBeTruthy()
        expect(
          //@ts-ignore
          wrapper
            .find('#label')
            .text()
            .toBe(`Sorted by ${title} in ascending order`)
        )
      })
    })
  })
})

it('renders policy data', async () => {
  let wrapper
  await act(async () => {
    wrapper = mount(
      <MockedProvider>
        {policies.map((policy: any, index: number) => {
          return (
            <TableRow
              key={index}
              columns={columns}
              //@ts-ignore
              addTypename={false}
              mocks={[mockTableData]}
              policy={policy}
            />
          )
        })}
      </MockedProvider>
    )
  })

  await act(() => wait(0))
  //@ts-ignore
  wrapper.update()
  expect(wrapper).toBeTruthy()

  expect(
    //@ts-ignore
    wrapper.find('.provider').text()
  ).toBe(`${policies.provider}`)
})
