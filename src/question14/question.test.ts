import question from './question'
import { expect } from 'chai'
import { getInputGrid, getInputNumbers, getInputStrings } from '../helpers'

const questionNum = 14
describe(`Question ${questionNum}`, () => {
  it('part A sample 0', async () => {
    const input = await getInputStrings(questionNum, "sampleInput0")
    expect(await question.partA(input)).to.equal(165)
  })

  it('part A main', async () => {
    const input = await getInputStrings(questionNum, "input")
    //expect(await question.partA(input)).to.equal(undefined)
  })

  it('part B sample 0', async () => {
    const input = await getInputStrings(questionNum, "sampleInput1")
    expect(await question.partB(input)).to.equal(208)
  })

  it('part B main', async () => {
    const input = await getInputStrings(questionNum, "input")
    //expect(await question.partB(input)).to.equal(undefined)
  })
})
