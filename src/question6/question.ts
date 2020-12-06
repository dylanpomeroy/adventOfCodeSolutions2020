const partA = async (input: string[]) => {
  let totalYesQuestions = 0
  const yesQuestions = new Set()
  for (let inputLine of input) {
    if (inputLine == '') {
      totalYesQuestions += yesQuestions.size
      yesQuestions.clear()
    }

    inputLine.split('').forEach(yesQuestions.add, yesQuestions)
  }

  totalYesQuestions += yesQuestions.size
  return totalYesQuestions
}

const partB = async (input: string[]) => {
  let totalYesQuestions = 0
  let yesQuestions: { [key: string]: number } = {}
  let groupSize = 0
  for (let inputLine of input) {
    if (inputLine == '') {
      totalYesQuestions += Object.keys(yesQuestions)
        .filter(questionKey => yesQuestions[questionKey] == groupSize)
        .length
      yesQuestions = {}
      groupSize = 0
    } else {
      inputLine.split('').forEach(char => {
        if (char in yesQuestions) yesQuestions[char]++
        else yesQuestions[char] = 1
      })
      groupSize++
    }
  }

  totalYesQuestions += Object.keys(yesQuestions)
    .filter(questionKey => yesQuestions[questionKey] == groupSize)
    .length
  return totalYesQuestions
}

export default {
  partA,
  partB,
}