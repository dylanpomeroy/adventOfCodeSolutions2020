import question from './question'
import { expect } from 'chai'
import { getInputNumbers } from '../helpers'

describe('Question 1', () => {
  it('part A sample 0', async () => {
    const input = await getInputNumbers(1, "sampleInput0")
    expect(await question.partA(input)).to.equal(514579)
  })

  it('part A main', async () => {
    const input = await getInputNumbers(1, "input")
    //expect(await question.partA(input)).to.equal(undefined)
  })

  it('part B main', async () => {
    const input = await getInputNumbers(1, "input")
    //expect(await question.partB(input)).to.equal(undefined)
  })
})
