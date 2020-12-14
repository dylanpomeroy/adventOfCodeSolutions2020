const partA = async (input: string[]) => {
  const startTime = Number.parseInt(input[0])
  const busIds = input[1].split(',').map(id => Number.parseInt(id))

  const busNextArrivals: { [busid: number]: number} = {}
  busIds.forEach(busId => busNextArrivals[busId] = busId - (startTime % busId))
  
  let closestBus = busIds[0]
  Object.keys(busNextArrivals).forEach(busIdString => {
    const busId = Number.parseInt(busIdString)
    if (busNextArrivals[busId] < busNextArrivals[closestBus]) {
      closestBus = busId
    }
  })

  return closestBus * busNextArrivals[closestBus]
}

const partB = async (input: string[]) => {

}

export default {
  partA,
  partB,
}