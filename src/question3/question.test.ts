import question from './question'
import { expect } from 'chai'
import { getInputStrings } from '../helpers'

describe('Question 3', () => {
  it('part A sample 0', async () => {
    const input = await getInputStrings(3, "sampleInput0")
    expect(await question.partA(input)).to.equal(7)
  })

  it('part A main', async () => {
    const input = await getInputStrings(3, "input")
    expect(await question.partA(input)).to.equal(167)
  })

  it('part B sample', async () => {
    const input = await getInputStrings(3, "sampleInput0")
    expect(await question.partB(input)).to.equal(336)
  })

  it('part B main', async () => {
    const input = await getInputStrings(3, "input")
    expect(await question.partB(input)).to.equal(736527114)
  })
})
