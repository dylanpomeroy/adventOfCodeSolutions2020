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

  const keyValidator: { [key: string]: RegExp } = {
    'byr': /^19[2-9][0-9]|200[0-2]$/,
    'iyr': /^20[1-2][0-9]|2030$/,
    'eyr': /^202[0-9]|2030$/,
    'hgt': /^59in|6[0-9]in|7[0-6]in|1[5-8][0-9]cm|19[0-3]cm$/,
    'hcl': /^#[a-f0-9]{6}$/,
    'ecl': /^amb|blu|brn|gry|grn|hzl|oth$/,
    'pid': /^[0-9]{9}$/,
  }

  let validPassports = 0
  const isValidPassport = (passport: { [key: string]: string}) => {
    return requiredKeys.every(key =>
      passport.hasOwnProperty(key)
      && keyValidator[key].test(passport[key])
    )
  }

  let currentPassportData: { [key: string]: string } = {}
  input.forEach(line => {
    if (line == '') {
      isValidPassport(currentPassportData) && validPassports++
      currentPassportData = {}
    } else {
      line.split(' ').forEach(kvp => {
        currentPassportData[kvp.split(':')[0]] = kvp.split(':')[1]
      })
    }
  })

  isValidPassport(currentPassportData) && validPassports++
  return validPassports
}

export default {
  partA,
  partB,
}