import question from './question'
import { expect } from 'chai'
import { getInputGrid, getInputNumbers, getInputStrings } from '../helpers'

const questionNum = 13
describe(`Question ${questionNum}`, () => {
  it('part A sample 0', async () => {
    const input = await getInputStrings(questionNum, "sampleInput0")
    expect(await question.partA(input)).to.equal(295)
  })

  it('part A main', async () => {
    const input = await getInputStrings(questionNum, "input")
    //expect(await question.partA(input)).to.equal(undefined)
  })

  it('part B sample 0', async () => {
    const input = await getInputStrings(questionNum, "sampleInput0")
    expect(await question.partB(input)).to.equal(1068788)
  })

  it('part B sample 1', async () => {
    const input = await getInputStrings(questionNum, "sampleInput1")
    expect(await question.partB(input)).to.equal(3417)
  })

  it('part B sample 2', async () => {
    const input = await getInputStrings(questionNum, "sampleInput2")
    expect(await question.partB(input)).to.equal(754018)
  })

  it('part B sample 3', async () => {
    const input = await getInputStrings(questionNum, "sampleInput3")
    expect(await question.partB(input)).to.equal(779210)
  })

  it('part B sample 4', async () => {
    const input = await getInputStrings(questionNum, "sampleInput4")
    expect(await question.partB(input)).to.equal(1261476)
  })

  it('part B sample 5', async () => {
    const input = await getInputStrings(questionNum, "sampleInput5")
    expect(await question.partB(input)).to.equal(1202161486)
  })

  it('part B main', async () => {
    const input = await getInputStrings(questionNum, "input")
    //expect(await question.partB(input)).to.equal(undefined)
  })
})
