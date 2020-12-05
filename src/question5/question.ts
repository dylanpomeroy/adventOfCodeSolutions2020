const getSeatId = (boardingPass: string) => {
  const binary = boardingPass
    .replace(/F/g, '0')
    .replace(/B/g, '1')
    .replace(/L/g, '0')
    .replace(/R/g, '1')

  return parseInt(binary, 2)
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