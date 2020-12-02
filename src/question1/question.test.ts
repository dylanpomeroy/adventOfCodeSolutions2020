import question from './question'
import { expect } from 'chai'
import testHelper from '../testHelper'

describe('Question 1', () => {
  it('part A sample 0', async () => {
    const input = await testHelper.getInputNumbers(1, "sampleInput0")
    expect(await question.partA(input)).to.equal(514579)
  })

  it('part A main', async () => {
    const input = await testHelper.getInputNumbers(1, "input")
    expect(await question.partA(input)).to.equal(1010299)
  })

  it('part B main', async () => {
    const input = await testHelper.getInputNumbers(1, "input")
    expect(await question.partB(input)).to.equal(42140160)
  })
})
