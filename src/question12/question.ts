const partA = async (input: string[]) => {
  let direction = 0 // east
  let positionX = 0
  let positionY = 0
  input.forEach(instruction => {
    const type = instruction.slice(0, 1)
    const amount = Number.parseInt(instruction.slice(1))

    const updatePositionHandler: { [key: string]: () => void } = {
      'N': () => positionY += amount,
      'S': () => positionY -= amount,
      'E': () => positionX += amount,
      'W': () => positionX -= amount,
      'R': () => direction = (direction + amount) % 360,
      'L': () => direction = (((direction - amount) % 360) + 360) % 360,
      'F': () => ({
          0: () => positionX += amount,
          90: () => positionY -= amount,
          180: () => positionX -= amount,
          270: () => positionY += amount,
        } as { [key: number]: () => void })[direction](),
      'B': () => ({
          0: () => positionX -= amount,
          90: () => positionY += amount,
          180: () => positionX += amount,
          270: () => positionY -= amount,
        } as { [key: number]: () => void })[direction](),
    }

    updatePositionHandler[type]()
  })

  return Math.abs(positionX) + Math.abs(positionY)
}

const partB = async (input: string[]) => {
  let waypointOffsetX = 10
  let waypointOffsetY = 1
  let shipPositionX = 0
  let shipPositionY = 0
  input.forEach(instruction => {
    const type = instruction.slice(0, 1)
    const amount = Number.parseInt(instruction.slice(1))

    if (type == 'N')
      waypointOffsetY += amount
    else if (type == 'S')
      waypointOffsetY -= amount
    else if (type == 'E')
      waypointOffsetX += amount
    else if (type == 'W')
      waypointOffsetX -= amount
    
    else if (type == 'F') {
      shipPositionX += amount * waypointOffsetX
      shipPositionY += amount * waypointOffsetY
    }
    else if (type == 'R'){
      const fixedAmount = (((amount / 90) % 4) + 4) % 4 // 1, 2, 3 or 4
      for (let rotation = 0; rotation < fixedAmount; rotation++) {
        const swap = waypointOffsetX
        waypointOffsetX = waypointOffsetY
        waypointOffsetY = swap
        waypointOffsetY *= -1
      }
    }
    else if (type == 'L') {
      const fixedAmount = (((-1 * amount / 90) % 4) + 4) % 4 // 1, 2, 3 or 4
      for (let rotation = 0; rotation < fixedAmount; rotation++) {
        const swap = waypointOffsetX
        waypointOffsetX = waypointOffsetY
        waypointOffsetY = swap
        waypointOffsetY *= -1
      }
    }
  })

  return Math.abs(shipPositionX) + Math.abs(shipPositionY)
}

export default {
  partA,
  partB,
}