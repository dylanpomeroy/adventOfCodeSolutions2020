import question from './question'
import { expect } from 'chai'
import testHelper from '../testHelper'

describe('Question 4', () => {
  it('part A sample 0', async () => {
    const input = await testHelper.getInputStrings(4, "sampleInput0")
    expect(await question.partA(input)).to.equal(2)
  })

  it('part A main', async () => {
    const input = await testHelper.getInputStrings(4, "input")
    expect(await question.partA(input)).to.equal(226)
  })

  it('part B sample 0', async () => {
    const input = await testHelper.getInputStrings(4, "sampleInput1")
    expect(await question.partB(input)).to.equal(0)
  })

  it('part B sample 1', async () => {
    const input = await testHelper.getInputStrings(4, "sampleInput2")
    expect(await question.partB(input)).to.equal(3)
  })

  it('part B sample 2', async () => {
    const input1 = await testHelper.getInputStrings(4, "sampleInput1")
    const input2 = await testHelper.getInputStrings(4, "sampleInput2")
    expect(await question.partB(input1.concat(input2))).to.equal(3)
  })

  it('part B main', async () => {
    const input = await testHelper.getInputStrings(4, "input")
    expect(await question.partB(input)).to.equal(161)
  })

  it('byr', () => {
    expect(question.byrValid('2002')).to.equal(true)
    expect(question.byrValid('2003')).to.equal(false)
  })

  it('hgt', () => {
    expect(question.hgtValid('60in')).to.equal(true)
    expect(question.hgtValid('190cm')).to.equal(true)
    expect(question.hgtValid('190in')).to.equal(false)
    expect(question.hgtValid('190')).to.equal(false)
  })

  it('hcl', () => {
    expect(question.hclValid('#123abc')).to.equal(true)
    expect(question.hclValid('#123abz')).to.equal(false)
    expect(question.hclValid('123abc')).to.equal(false)
  })

  it('ecl', () => {
    expect(question.eclValid('brn')).to.equal(true)
    expect(question.eclValid('wat')).to.equal(false)
  })

  it('pid', () => {
    expect(question.pidValid('000000001')).to.equal(true)
    expect(question.pidValid('0123456789')).to.equal(false)
  })
})
