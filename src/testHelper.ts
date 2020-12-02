import fs from 'fs'

const getInputNumbers = async (questionNum: number, filename: string) => {
  const inputFileContent = await fs.promises.readFile(
    `./src/question${questionNum}/inputs/${filename}`, `utf8`)
  return inputFileContent.split("\n").map(numberString => Number.parseInt(numberString))
}

const getInputStrings = async (questionNum: number, filename: string) => {
  const inputFileContent = await fs.promises.readFile(
    `./src/question${questionNum}/inputs/${filename}`, `utf8`)
  return inputFileContent.split("\n")
}

export default {
  getInputNumbers,
  getInputStrings,
}
