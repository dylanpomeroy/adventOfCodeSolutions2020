const partA = async (input: string[]) => {
  const inputMap = input.map(line => line.split(''))
  let horizontalIndex = 0
  let verticalIndex = 0
  let totalTrees = 0

  while (verticalIndex < inputMap.length - 1) {
    verticalIndex++
    horizontalIndex += 3

    if (inputMap[verticalIndex][horizontalIndex % inputMap[0].length] == '#')
      totalTrees++
  }

  return totalTrees
}

const partB = async (input: string[]) => {
  const inputMap = input.map(line => line.split(''))

  const runWithIncrements = (map: string[][], horizontalIncrement: number, verticalIncrement: number) => {
    let horizontalIndex = 0
    let verticalIndex = 0
    let totalTrees = 0

    while (verticalIndex < map.length - 1) {
      verticalIndex += verticalIncrement
      horizontalIndex += horizontalIncrement

      if (inputMap[verticalIndex][horizontalIndex % inputMap[0].length] == '#')
        totalTrees++
    }

    return totalTrees
  }

  const treeTotals = [
    runWithIncrements(inputMap, 1, 1),
    runWithIncrements(inputMap, 3, 1),
    runWithIncrements(inputMap, 5, 1),
    runWithIncrements(inputMap, 7, 1),
    runWithIncrements(inputMap, 1, 2),
  ]

  let result = 1
  treeTotals.forEach(trees => result *= trees)

  return result
}

export default {
  partA,
  partB,
}