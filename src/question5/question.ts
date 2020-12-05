const getSeatId = (boardingPass: string, rowCount: number = 127, columnCount: number = 8) => {
  let leftIndex = 0
  let rightIndex = 127
  let boardingPassIndex = 0
  while (boardingPassIndex < 7) {
    if (boardingPass[boardingPassIndex] == 'F')
      rightIndex = Math.floor((rightIndex + leftIndex) / 2)
    else
      leftIndex = Math.ceil((rightIndex + leftIndex) / 2)
    boardingPassIndex++
  }

  const row = leftIndex
  leftIndex = 0
  rightIndex = 7
  while (boardingPassIndex < 10) {
    if (boardingPass[boardingPassIndex] == 'L')
      rightIndex = Math.floor((rightIndex + leftIndex) / 2)
    else
      leftIndex = Math.ceil((rightIndex + leftIndex) / 2)
    boardingPassIndex++
  }

  const column = leftIndex

  return row * 8 + column
}

const partA = async (input: string[]) => {
  const seatIds = input.map(boardingPass => getSeatId(boardingPass))
  const highestSeatId = Math.max.apply(null, seatIds)
  return highestSeatId
}

const partB = async (input: string[]) => {
  const seatIdSet = new Set(input.map(boardingPass => getSeatId(boardingPass)))

  let seatId = 0

  let lastLastSeatIdTaken = false
  let lastSeatIdTaken = false
  let lastSeatId = 0
  while (seatId < 127 * 8 + 7) {
    const seatIdTaken = seatIdSet.has(seatId)
    if (lastLastSeatIdTaken && !lastSeatIdTaken && seatIdTaken) {
      return lastSeatId
    }

    lastLastSeatIdTaken = lastSeatIdTaken
    lastSeatIdTaken = seatIdTaken
    lastSeatId = seatId
    seatId++
  }

  return null
}

export default {
  getSeatId,
  partA,
  partB,
}