import question from './question'
import { expect } from 'chai'
import { getInputGrid, getInputNumbers, getInputStrings } from '../helpers'

const questionNum = 14
describe(`Question ${questionNum}`, () => {
  it('part A sample 0', async () => {
    const input = [0,3,6]
    expect(await question.partA(input)).to.equal(436)
  })

  it('part A sample 1', async () => {
    const input = [1,3,2]
    expect(await question.partA(input)).to.equal(1)
  })

  it('part A sample 2', async () => {
    const input = [2,1,3]
    expect(await question.partA(input)).to.equal(10)
  })

  it('part A sample 3', async () => {
    const input = [1,2,3]
    expect(await question.partA(input)).to.equal(27)
  })

  it('part A sample 4', async () => {
    const input = [2,3,1]
    expect(await question.partA(input)).to.equal(78)
  })

  it('part A sample 5', async () => {
    const input = [3,2,1]
    expect(await question.partA(input)).to.equal(438)
  })

  it('part A sample 6', async () => {
    const input = [3,1,2]
    expect(await question.partA(input)).to.equal(1836)
  })

  it('part A main', async () => {
    const input = [0,5,4,1,10,14,7]
    expect(await question.partA(input)).to.equal(9007186)
  })

  it('part B sample 0', async () => {
    const input = [0]
    expect(await question.partB(input)).to.equal(undefined)
  })

  it('part B main', async () => {
    const input = [0]
    expect(await question.partB(input)).to.equal(undefined)
  })
})
