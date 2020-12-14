import question from './question'
import { expect } from 'chai'
import { getInputStrings } from '../helpers'

describe('Question 5', () => {
  it('part A seat ID -1', async () => {
    const input = 'FBFBBFFRLR'
    expect(question.getSeatId(input)).to.equal(357)
  })

  it('part A seat ID 0', async () => {
    const input = 'BFFFBBFRRR'
    expect(question.getSeatId(input)).to.equal(567)
  })

  it('part A seat ID 1', async () => {
    const input = 'FFFBBBFRRR'
    expect(question.getSeatId(input)).to.equal(119)
  })

  it('part A seat ID 2', async () => {
    const input = 'BBFFBBFRLL'
    expect(question.getSeatId(input)).to.equal(820)
  })

  it('part A main', async () => {
    const input = await getInputStrings(5, "input")
    //expect(await question.partA(input)).to.equal(undefined)
  })

  it('part B main', async () => {
    const input = await getInputStrings(5, "input")
    //expect(await question.partB(input)).to.equal(undefined)
  })
})
