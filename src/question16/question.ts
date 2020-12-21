import { SSL_OP_CISCO_ANYCONNECT } from "constants"
import { sumItems } from "../helpers"

const partA = async (input: string[]) => {
  const rangeRules: [number, number][] = []
  let index = 0
  while (input[index] != '') {
    const rangeStrings = input[index].split(': ')[1].split(' or ')
    for (let rangeString of rangeStrings) {
      const lowerRange = Number.parseInt(rangeString.split('-')[0])
      const upperRange = Number.parseInt(rangeString.split('-')[1])
      rangeRules.push([lowerRange, upperRange])
    }

    index++
  }

  while(input[index] != 'nearby tickets:')
    index++
  index++

  const invalidNumbers: number[] = []
  while (index < input.length) {
    const ticketNumbers = input[index].split(',').map(numberString => Number.parseInt(numberString))
    for (let ticketNumber of ticketNumbers) {
      const rangeRulePassed = rangeRules.some(range => {
        return ticketNumber >= range[0] && ticketNumber <= range[1]
      })
      if (!rangeRulePassed) invalidNumbers.push(ticketNumber)
    }

    index++
  }

  return sumItems(invalidNumbers)
}

const partB = async (input: string[]) => {
  const getValidNearbyTickets = () => {
    const rangeRules: [number, number][] = []
    let index = 0
    while (input[index] != '') {
      const rangeStrings = input[index].split(': ')[1].split(' or ')
      for (let rangeString of rangeStrings) {
        const lowerRange = Number.parseInt(rangeString.split('-')[0])
        const upperRange = Number.parseInt(rangeString.split('-')[1])
        rangeRules.push([lowerRange, upperRange])
      }

      index++
    }

    while(input[index] != 'nearby tickets:')
      index++
    index++

    const validTickets: number[][] = []
    while (index < input.length) {

      const ticketNumbers = input[index].split(',').map(numberString => Number.parseInt(numberString))
      let ticketInvalid = false
      for (let ticketNumber of ticketNumbers) {
        const rangeRulePassed = rangeRules.some(range => {
          return ticketNumber >= range[0] && ticketNumber <= range[1]
        })
        if (!rangeRulePassed) {
          ticketInvalid = true
          break;
        }
      }
      if (!ticketInvalid) validTickets.push(ticketNumbers)
      index++
    }

    return validTickets
  }

  const validNearbyTickets = getValidNearbyTickets()
  
  const orderedLabels = 0
  for (let columnIndex = 0; columnIndex < validNearbyTickets[0].length; columnIndex++) {

  }
}

export default {
  partA,
  partB,
}