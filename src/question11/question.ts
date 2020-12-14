const partA = async (input: string[][]) => {
  const countAdjacentSeats = (row: number, column: number, seats: string[][]) => {
    let seatsFilled = 0
    
    for (let rowIndex = row-1; rowIndex <= row + 1; rowIndex++) {
      for (let columnIndex = column-1; columnIndex <= column + 1; columnIndex++) {
        if (rowIndex < 0 || rowIndex > seats.length - 1
          || columnIndex < 0 || columnIndex > seats[0].length - 1
          || (rowIndex == row && columnIndex == column))
          continue
        
        if (seats[rowIndex][columnIndex] == '#')
          seatsFilled++
      }
    }

    return seatsFilled
  }

  let seatsChanged = true
  let seats = input
  let iterations = 0
  while (seatsChanged) {
    iterations++
    seatsChanged = false
    const nextSeats = seats.map(row => row.slice())
    for (let rowIndex = 0; rowIndex < seats.length; rowIndex++) {
      for (let columnIndex = 0; columnIndex < seats[0].length; columnIndex++) {
        const seat = seats[rowIndex][columnIndex]
        if (seat == '.')
          continue
        
        const adjacentSeatCount = countAdjacentSeats(rowIndex, columnIndex, seats)
        if (adjacentSeatCount >= 4 && seat == '#') {
          nextSeats[rowIndex][columnIndex] = 'L'
          seatsChanged = true
        }
        else if (adjacentSeatCount == 0 && seat == 'L') {
          nextSeats[rowIndex][columnIndex] = '#'
          seatsChanged = true
        }
      }
    }

    seats = nextSeats
  }

  let seatCount = 0 
  seats.forEach(row => row.forEach(seat => {
    if (seat == '#')
      seatCount++
  }))

  return seatCount
}

const partB = async (input: string[][]) => {
  const countVisibleSeats = (row: number, column: number, seats: string[][]) => {
    const isSeatVisibleInDirection = (row: number, column: number, direction: number[], seats: string[][]) => {
      let rowIndex = row + direction[0]
      let columnIndex = column + direction[1]
      while (
        rowIndex >= 0 && rowIndex < seats.length
        && columnIndex >= 0 && columnIndex < seats[0].length) {
        
        const seat = seats[rowIndex][columnIndex]
        if (seat == 'L') return false
        if (seat == '#') return true

        rowIndex += direction[0]
        columnIndex += direction[1]
      }

      return false
    }

    return [
      [0, 1], [0, -1], [1, 0], [-1, 0], // verticals + horizontals
      [-1, -1], [-1, 1], [1, -1], [1, 1], // diagonals
    ].map(direction => isSeatVisibleInDirection(row, column, direction, seats))
      .filter(isSeatVisible => isSeatVisible).length
  }

  let seatsChanged = true
  let seats = input
  let iterations = 0
  while (seatsChanged) {
    iterations++
    seatsChanged = false
    const nextSeats = seats.map(row => row.slice())
    for (let rowIndex = 0; rowIndex < seats.length; rowIndex++) {
      for (let columnIndex = 0; columnIndex < seats[0].length; columnIndex++) {
        const seat = seats[rowIndex][columnIndex]
        if (seat == '.')
          continue
        
        const visibleSeatCount = countVisibleSeats(rowIndex, columnIndex, seats)
        if (visibleSeatCount >= 5 && seat == '#') {
          nextSeats[rowIndex][columnIndex] = 'L'
          seatsChanged = true
        }
        else if (visibleSeatCount == 0 && seat == 'L') {
          nextSeats[rowIndex][columnIndex] = '#'
          seatsChanged = true
        }
      }
    }

    seats = nextSeats
  }

  let seatCount = 0 
  seats.forEach(row => row.forEach(seat => {
    if (seat == '#')
      seatCount++
  }))

  return seatCount
}

export default {
  partA,
  partB,
}