import { format } from "path"

const partA = async (input: string[]) => {
  const requiredKeys = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']

  let validPassports = 0
  let currentPassportData: { [key: string]: string } = {}
  input.forEach(line => {
    if (line == '') {
      if (requiredKeys.every(item => currentPassportData.hasOwnProperty(item))) {
        validPassports++
      }

      currentPassportData = {}
    } else {
      line.split(' ').forEach(kvp => {
        currentPassportData[kvp.split(':')[0]] = kvp.split(':')[1]
      })
    }
  })

  if (requiredKeys.every(item => currentPassportData.hasOwnProperty(item))) {
    validPassports++
  }

  return validPassports
}

const partB = async (input: string[]) => {
  const requiredKeys = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']

  const keyValidator: { [key: string]: any } = {
    'byr': byrValid,
    'iyr': iyrValid,
    'eyr': eyrValid,
    'hgt': hgtValid,
    'hcl': hclValid,
    'ecl': eclValid,
    'pid': pidValid,
  }

  let validPassports = 0
  let currentPassportData: { [key: string]: string } = {}
  input.forEach(line => {
    if (line == '') {

      if (requiredKeys.every(item =>
          currentPassportData.hasOwnProperty(item))) {
        let keyWrong = false
        requiredKeys.forEach(key => {
          if (!keyValidator[key](currentPassportData[key])) {
            keyWrong = true
          }
        })
        if (!keyWrong) {
          validPassports++
        }
      }

      currentPassportData = {}
    } else {
      line.split(' ').forEach(kvp => {
        currentPassportData[kvp.split(':')[0]] = kvp.split(':')[1]
      })
    }
  })

  if (requiredKeys.every(item =>
    currentPassportData.hasOwnProperty(item))) {
    let keyWrong = false
    requiredKeys.forEach(key => {
      if (!keyValidator[key](currentPassportData[key])) {
        keyWrong = true
      }
    })
    if (!keyWrong) {
      validPassports++
    }
  }

  return validPassports
}

const byrValid = (input: string) => {
  if (input == '' || !Number(input) || !Number.isInteger(Number(input))) return false
      const inputNum = Number.parseInt(input)
      return inputNum >= 1920 && inputNum <= 2002
}

const iyrValid = (input: string) => {
  if (input == '' || !Number(input) || !Number.isInteger(Number(input))) return false
  const inputNum = Number.parseInt(input)
  return inputNum >= 2010 && inputNum <= 2030
}

const eyrValid = (input: string) => {
  if (input == '' || !Number(input) || !Number.isInteger(Number(input))) return false
  const inputNum = Number.parseInt(input)
  return inputNum >= 2020 && inputNum <= 2030
}

const hgtValid = (input: string) => {
  if (!input.endsWith('in') && !input.endsWith('cm')) return false
  const inputStripped = input.substring(0, input.length - 2)
  if (inputStripped == '' || !Number(inputStripped) || !Number.isInteger(Number(inputStripped))) return false
  const inputNum = Number.parseInt(inputStripped)
  if (input.endsWith('in')) return inputNum >= 59 && inputNum <= 76
  else return inputNum >= 150 && inputNum <= 193
}

const hclValid = (input: string) => {
  if (!input.startsWith('#')) return false

  const symbolFormat = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
  const uppercaseFormat = /[A-Z]/
  const notHexLetterFormat = /[g-z]/
  let inputStripped = input.substring(1)
  if (inputStripped.length != 6 || symbolFormat.test(inputStripped) || uppercaseFormat.test(inputStripped) || notHexLetterFormat.test(inputStripped))
    return false
  return true
}

const eclValid = (input: string) => {
  return ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(input)
}

const pidValid = (input: string) => {
  if (input.length != 9) return false

  const symbolFormat = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
  const uppercaseFormat = /[A-Z]/
  const lowercaseFormat = /[a-z]/
  if (symbolFormat.test(input) || uppercaseFormat.test(input) || lowercaseFormat.test(input))
    return false
  return true
}

export default {
  partA,
  partB,
  byrValid,
  iyrValid,
  eyrValid,
  hgtValid,
  hclValid,
  eclValid,
  pidValid,
}