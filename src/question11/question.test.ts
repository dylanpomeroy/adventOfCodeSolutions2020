import question from './question'
import { expect } from 'chai'
import { getInputGrid, getInputNumbers, getInputStrings } from '../helpers'

const questionNum = 11
describe(`Question ${questionNum}`, () => {
  it('part A sample 0', async () => {
    const input = await getInputGrid(questionNum, "sampleInput0")
    expect(await question.partA(input)).to.equal(37)
  })

  it('part A main', async () => {
    const input = await getInputGrid(questionNum, "input")
    expect(await question.partA(input)).to.equal(2472)
  })

  it('part B sample 1', async () => {
    const input = await getInputGrid(questionNum, "sampleInput0")
    expect(await question.partB(input)).to.equal(26)
  })

  it('part B main', async () => {
    const input = await getInputGrid(questionNum, "input")
    expect(await question.partB(input)).to.equal(undefined)
  })
})
