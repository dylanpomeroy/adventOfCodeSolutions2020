import question from './question'
import { expect } from 'chai'
import { getInputStrings } from '../helpers'

describe('Question 6', () => {
  it('part A sample 0', async () => {
    const input = await getInputStrings(6, "sampleInput0")
    expect(await question.partA(input)).to.equal(6)
  })

  it('part A sample 1', async () => {
    const input = await getInputStrings(6, "sampleInput1")
    expect(await question.partA(input)).to.equal(11)
  })

  it('part A main', async () => {
    const input = await getInputStrings(6, "input")
    //expect(await question.partA(input)).to.equal(undefined)
  })

  it('part B sample 2', async () => {
    const input = await getInputStrings(6, "sampleInput2")
    expect(await question.partB(input)).to.equal(6)
  })

  it('part B main', async () => {
    const input = await getInputStrings(6, "input")
    //expect(await question.partB(input)).to.equal(undefined)
  })
})
