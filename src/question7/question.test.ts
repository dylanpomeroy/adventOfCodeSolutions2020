import question from './question'
import { expect } from 'chai'
import { getInputStrings } from '../helpers'

describe('Question 7', () => {
  it('part A sample 0', async () => {
    const input = await getInputStrings(7, "sampleInput0")
    expect(await question.partA(input)).to.equal(4)
  })

  it('part A main', async () => {
    const input = await getInputStrings(7, "input")
    expect(await question.partA(input)).to.equal(185)
  })

  it('part B sample 1', async () => {
    const input = await getInputStrings(7, "sampleInput1")
    expect(await question.partB(input)).to.equal(126)
  })

  it('part B main', async () => {
    const input = await getInputStrings(7, "input")
    expect(await question.partB(input)).to.equal(89084)
  })
})
