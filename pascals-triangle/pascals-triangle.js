//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


export const rows = (rows) => {

  if (rows <= 0) return []
  
  const triangle = [[1]]

  for (let rowIndex = 1; rowIndex < rows; rowIndex++){
    const prevRow = triangle[rowIndex - 1]
    const currRow = [1]
    for (let col = 1; col < rowIndex; col++){
      currRow[col] = prevRow[col - 1] + prevRow[col]

    }
    currRow.push(1)
    triangle.push(currRow)
  }
  return triangle

};
