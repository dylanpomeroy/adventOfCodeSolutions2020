import { Z_ASCII } from "zlib"
import { sumItems } from "../helpers"

const partA = async (input: number[]) => {
  const firstSpokenOn: { [key: number]: number } = {}
  const lastSpokeOn: { [key: number]: number } = {}
  let previousPreviousNumber = -1
  let previousNumber = -1
  for (let index = 0; index < 30000000; index++) {
    if (index % 1000000 == 0) console.log(`on iteration ${index}`)
    let number = 0
    if (previousPreviousNumber != -1)
      lastSpokeOn[previousPreviousNumber] = index - 2

    if (index < input.length) {
      // still part of the first numbers
      number = input[index]
    } else if (firstSpokenOn[previousNumber] == index - 1)
      // first spoken in last turn
      number = 0
    else {
      // spoken before the last turn
      const previousLastSpokeOn = lastSpokeOn[previousNumber]
      number = index - (previousLastSpokeOn + 1)
    }

    if (!(number in firstSpokenOn))
      firstSpokenOn[number] = index

    previousPreviousNumber = previousNumber
    previousNumber = number
  }

  return previousNumber
}

const partB = async (input: number[]) => {
  
}

export default {
  partA,
  partB,
}