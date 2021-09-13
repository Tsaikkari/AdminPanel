import { useMemo } from 'react'

function useSortedData(
  data: any,
  sortColumn: any,
  sortDirection: string,
  types: any
) {
  return useMemo(() => {
    if (!sortColumn) {
      return data
    }
    
    // copy
    return [...data].sort((a, b) => {
      const aVal = a[sortColumn]
      const bVal = b[sortColumn]

      if (aVal == null && bVal == null) {
        return 0
      }

      if (aVal == null) {
        return sortDirection === 'ascending' ? 1 : -1
      }

      if (bVal == null) {
        return sortDirection === 'ascending' ? -1 : 1
      }

      if (types[sortColumn] === 'customer') {
        return sortDirection === 'ascending'
          ? String(a[sortColumn].lastName).localeCompare(String(b[sortColumn].lastName))
          : -1 * String(a[sortColumn].lastName).localeCompare(String(b[sortColumn].lastName))
      }

      if (types[sortColumn] === 'insuranceType') {
        return sortDirection === 'ascending'
          ? String(a[sortColumn].insuranceName).localeCompare(String(b[sortColumn].insuranceName))
          : -1 * String(a[sortColumn].insuranceName).localeCompare(String(b[sortColumn].insuranceName))
      }

      if (types[sortColumn] === 'status') {
        return sortDirection === 'ascending'
          ? String(a[sortColumn].statusName).localeCompare(String(b[sortColumn].statusName))
          : -1 * String(a[sortColumn].statusName).localeCompare(String(b[sortColumn].statusName))
      }

      if (types[sortColumn] === "number") {
        return sortDirection === "ascending"
          ? Number(a[sortColumn]) - Number(b[sortColumn])
          : Number(b[sortColumn]) - Number(a[sortColumn]);
      }

      if (types[sortColumn] === 'text') {
        return sortDirection === 'ascending'
          ? String(a[sortColumn]).localeCompare(String(b[sortColumn]))
          : -1 * String(a[sortColumn]).localeCompare(String(b[sortColumn]))
      }

      if (types[sortColumn] === 'date') {
        return sortDirection === 'ascending'
          ? compareDates(aVal, bVal)
          : -1 * compareDates(aVal, bVal)
      }

      return 0
    })
  }, [data, sortColumn, sortDirection, types])
}

function compareDates(a: any, b: any) {
  const aDate = parseDate(a)
  const bDate = parseDate(b)

  return aDate - bDate
}

function parseDate(value: any) {
  return Date.parse(value)
}

export default useSortedData
