const partA = async (input: number[], sumGoal: number = 2020) => {
  const inputDictionary: { [key: number]: number[] } = {}

  input.forEach((item, index) => {
    if (inputDictionary.hasOwnProperty(item))
      inputDictionary[item].push(index)
    else
      inputDictionary[item] = [index]
  })

  for (let item of input) {
    if (!inputDictionary.hasOwnProperty(sumGoal-item))
      continue
      
    const isSameInputNumber = (number: number) => {
      return item == sumGoal / 2 && inputDictionary[number].length == 1
    }  
    if (isSameInputNumber(item))
      continue
    
    return item * (sumGoal-item)
  }

  return null
}

const partB = async (input: number[]) => {
  for (let firstIndex = 0; firstIndex < input.length; firstIndex++) {
    const subResult = await partA(input, 2020-input[firstIndex])
    if (!subResult)
      continue
    
    return subResult * input[firstIndex]
  }

  return null
}

export default {
  partA,
  partB,
}