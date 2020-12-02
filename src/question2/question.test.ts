import question from './question'
import { expect } from 'chai'
import testHelper from '../testHelper'

describe('Question 2', () => {
  it('part A sample 0', async () => {
    const input = await testHelper.getInputStrings(2, "sampleInput0")
    expect(await question.partA(input)).to.equal(2)
  })

  it('part A main', async () => {
    const input = await testHelper.getInputStrings(2, "input")
    expect(await question.partA(input)).to.equal(477)
  })

  it('part B sample', async () => {
    const input = await testHelper.getInputStrings(2, "sampleInput0")
    expect(await question.partB(input)).to.equal(1)
  })

  it('part B main', async () => {
    const input = await testHelper.getInputStrings(2, "input")
    expect(await question.partB(input)).to.equal(686)
  })
})
