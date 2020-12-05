import question from './question'
import { expect } from 'chai'
import { getInputStrings } from '../helpers'

describe('Question 4', () => {
  it('part A sample 0', async () => {
    const input = await getInputStrings(4, "sampleInput0")
    expect(await question.partA(input)).to.equal(2)
  })

  it('part A main', async () => {
    const input = await getInputStrings(4, "input")
    expect(await question.partA(input)).to.equal(226)
  })

  it('part B sample 0', async () => {
    const input = await getInputStrings(4, "sampleInput1")
    expect(await question.partB(input)).to.equal(0)
  })

  it('part B sample 1', async () => {
    const input = await getInputStrings(4, "sampleInput2")
    expect(await question.partB(input)).to.equal(3)
  })

  it('part B sample 2', async () => {
    const input1 = await getInputStrings(4, "sampleInput1")
    const input2 = await getInputStrings(4, "sampleInput2")
    expect(await question.partB(input1.concat(input2))).to.equal(3)
  })

  it('part B main', async () => {
    const input = await getInputStrings(4, "input")
    expect(await question.partB(input)).to.equal(161)
  })
})
