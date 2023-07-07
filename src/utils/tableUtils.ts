export const sumArray = (array: number[]) => array.reduce((sum, item) => sum += item, 0)
export const sumTwoDimensionalArray = (table: number[][]) => table.reduce((sum, row) => sum += sumArray(row), 0)
export const generateRandomNumber = () => Math.round(Math.random() * 1000)
export const generateTable = (size: number) => new Array(size).fill(null).map(() => generateTableRow(size))
export const generateTableRow = (size: number) => new Array(size).fill(null).map(generateRandomNumber)

export const expandTable = (currentTable: number[][]) => {
    const newSize = currentTable.length + 1
    const newTable = [...currentTable].map(row => [...row, generateRandomNumber()])
    newTable.push(generateTableRow(newSize))
    return newTable
}
export const shrinkTable = (currentTable: number[][]) => {
    const newSize = currentTable.length - 1
    const newTable = [...currentTable].slice(0, newSize).map(row => row.slice(0, newSize))
    return newTable
}
