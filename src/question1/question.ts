// https://adventofcode.com/2020/day/1

import fs from 'fs'

const partA = async (input: number[]) => {
  for (let firstIndex = 0; firstIndex < input.length; firstIndex++) {
    for (let secondIndex = firstIndex + 1; secondIndex < input.length; secondIndex++) {
      const firstNumber = input[firstIndex]
      const secondNumber = input[secondIndex]
      if (firstNumber + secondNumber != 2020)
        continue
      
      return firstNumber * secondNumber
    }
  }

  return null
}

const partB = async (input: number[]) => {
  for (let firstIndex = 0; firstIndex < input.length; firstIndex++) {
    for (let secondIndex = firstIndex + 1; secondIndex < input.length; secondIndex++) {
      for (let thirdIndex = secondIndex + 1; thirdIndex < input.length; thirdIndex++) {
        const firstNumber = input[firstIndex]
        const secondNumber = input[secondIndex]
        const thirdNumber = input[thirdIndex]
        if (firstNumber + secondNumber + thirdNumber != 2020)
          continue
        
        return firstNumber * secondNumber * thirdNumber
      }
    }
  }

  return null
}

export default {
  partA,
  partB,
}