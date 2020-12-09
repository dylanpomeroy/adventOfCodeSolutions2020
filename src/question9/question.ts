import { sumItems } from "../helpers"


const partA = async (input: number[], preambleLength: number = 25) => {
  const getSumsOfPreviousNumbers = (previousNumbers: number[]) => {
    const sums = []
    for (let firstIndex = 0; firstIndex < previousNumbers.length; firstIndex++) {
      for (let secondIndex = firstIndex + 1; secondIndex < previousNumbers.length; secondIndex++) {
        sums.push(previousNumbers[firstIndex] + previousNumbers[secondIndex])
      }
    }

    return sums
  }

  for (let index = preambleLength; index < input.length; index++) {
    const previousNumbers = input.slice(index-preambleLength, index)
    const previousSums = getSumsOfPreviousNumbers(previousNumbers)
    if (!previousSums.includes(input[index]))
      return input[index]
  }

  return null
}

const partB = async (input: number[], preambleLength: number = 25) => {
  const invalidNumber = await partA(input, preambleLength)
  if (invalidNumber == null) return null

  let pointerLow = 0
  let pointerHigh = 1
  while (pointerLow < input.length && pointerHigh < input.length) {
    const preambleNumbers = input.slice(pointerLow, pointerHigh + 1)
    const summedList = sumItems(preambleNumbers)
    if (summedList == invalidNumber) {
      return Math.min.apply(Math, preambleNumbers) + Math.max.apply(Math, preambleNumbers)
    }
    if (summedList < invalidNumber)
      pointerHigh++
    if (summedList > invalidNumber)
      pointerLow++
  }

  return null
}

export default {
  partA,
  partB,
}