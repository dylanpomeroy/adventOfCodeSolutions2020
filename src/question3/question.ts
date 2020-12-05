import { multiplyItems } from "../helpers"

const runWithIncrements = (input: string[], horizontalIncrement: number, verticalIncrement: number) => {
  const inputMap = input.map(line => line.split(''))
  
  let horizontalIndex = 0
  let verticalIndex = 0
  let totalTrees = 0

  while (verticalIndex < inputMap.length - 1) {
    verticalIndex += verticalIncrement
    horizontalIndex += horizontalIncrement

    if (inputMap[verticalIndex][horizontalIndex % inputMap[0].length] == '#')
      totalTrees++
  }

  return totalTrees
}

const partA = async (input: string[]) => {
  return runWithIncrements(input, 3, 1)
}

const partB = async (input: string[]) => {
  const incrementsToRun = [
    [1, 1],
    [3, 1],
    [5, 1],
    [7, 1],
    [1, 2],
  ]
  
  const treeCounts = incrementsToRun
    .map(increment => runWithIncrements(input, increment[0], increment[1]))

  return multiplyItems(treeCounts)
}

export default {
  partA,
  partB,
}