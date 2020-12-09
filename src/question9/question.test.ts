import question from './question'
import { expect } from 'chai'
import { getInputNumbers, getInputStrings } from '../helpers'

const questionNum = 9
describe(`Question ${questionNum}`, () => {
  it('part A sample 0', async () => {
    const input = await getInputNumbers(questionNum, "sampleInput0")
    expect(await question.partA(input, 5)).to.equal(127)
  })

  it('part A main', async () => {
    const input = await getInputNumbers(questionNum, "input")
    expect(await question.partA(input)).to.equal(257342611)
  })

  it('part B sample 1', async () => {
    const input = await getInputNumbers(questionNum, "sampleInput0")
    expect(await question.partB(input, 5)).to.equal(62)
  })

  it('part B main', async () => {
    const input = await getInputNumbers(questionNum, "input")
    expect(await question.partB(input)).to.equal(35602097)
  })
})
