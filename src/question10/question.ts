import { sumItems } from "../helpers"


const partA = async (input: number[]) => {
  input.sort(function(a, b){return a-b})
  
  let total1s = 0
  let total3s = 1

  if (input[0] == 1) total1s++
  if (input[0] == 3) total3s++
  for (let index = 0; index < input.length; index++) {
    if (input[index] - input[index-1] == 3)
      total3s++
    if (input[index] - input[index-1] == 1)
      total1s++
  }

  return total3s * total1s
}

const partB = async (input: number[]) => {
  input.sort(function(a, b){return a-b})

  const counts: { [key: number]: number} = {
    0: 1
  }
  input.unshift(0)
  
  for (let index = 0; index < input.length; index++) {
    const applyCounts = (offset: number) => {
      const number = input[index]
      const offsetNumber = input[index + offset]
      if (index + offset < input.length && offsetNumber - number < 4) {
        if (offsetNumber in counts)
          counts[offsetNumber] += counts[number]
        else
          counts[offsetNumber] = counts[number]
      }
    }

    applyCounts(1)
    applyCounts(2)
    applyCounts(3)
  }

  return Math.max.apply(Math, Object.values(counts))
}

export default {
  partA,
  partB,
}