const partA = async (input: string[]) => {
  let correctCount = 0
  input.forEach(line => {
    const rangeString = line.split(' ')[0]
    const lowerRange = Number.parseInt(rangeString.split('-')[0])
    const upperRange = Number.parseInt(rangeString.split('-')[1])
    const characterEnforceed = line.split(' ')[1].charAt(0)
    const password = line.split(' ')[2]
    
    const numberOfChars = password.split(characterEnforceed).length - 1
    if (numberOfChars < lowerRange || numberOfChars > upperRange)
      return

    correctCount++
  })

  return correctCount
}

const partB = async (input: string[]) => {
  let correctCount = 0
  input.forEach(line => {
    const rangeString = line.split(' ')[0]
    const firstIndex = Number.parseInt(rangeString.split('-')[0]) - 1
    const secondIndex = Number.parseInt(rangeString.split('-')[1]) - 1
    const characterEnforceed = line.split(' ')[1].charAt(0)
    const password = line.split(' ')[2]
    
    if (password[firstIndex] == characterEnforceed && password[secondIndex] == characterEnforceed
      || password[firstIndex] != characterEnforceed && password[secondIndex] != characterEnforceed)
      return

    correctCount++
  })

  return correctCount
}

export default {
  partA,
  partB,
}