import question from './question'
import { expect } from 'chai'
import { getInputNumbers, getInputStrings } from '../helpers'

const questionNum = 10
describe(`Question ${questionNum}`, () => {
  it('part A sample 0', async () => {
    const input = await getInputNumbers(questionNum, "sampleInput0")
    expect(await question.partA(input)).to.equal(220)
  })

  it('part A main', async () => {
    const input = await getInputNumbers(questionNum, "input")
    expect(await question.partA(input)).to.equal(undefined)
  })

  it('part B sample 1', async () => {
    const input = await getInputNumbers(questionNum, "sampleInput0")
    expect(await question.partB(input)).to.equal(19208)
  })

  it('part B main', async () => {
    const input = await getInputNumbers(questionNum, "input")
    expect(await question.partB(input)).to.equal(3947645370368)
  })
})
