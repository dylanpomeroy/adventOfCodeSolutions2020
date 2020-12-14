import question from './question'
import { expect } from 'chai'
import { getInputStrings } from '../helpers'

describe('Question 2', () => {
  it('part A sample 0', async () => {
    const input = await getInputStrings(2, "sampleInput0")
    expect(await question.partA(input)).to.equal(2)
  })

  it('part A main', async () => {
    const input = await getInputStrings(2, "input")
    //expect(await question.partA(input)).to.equal(undefined)
  })

  it('part B sample', async () => {
    const input = await getInputStrings(2, "sampleInput0")
    expect(await question.partB(input)).to.equal(1)
  })

  it('part B main', async () => {
    const input = await getInputStrings(2, "input")
    //expect(await question.partB(input)).to.equal(undefined)
  })
})
