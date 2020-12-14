import { sumItems } from "../helpers"

const partA = async (input: string[]) => {
  const memory: { [address: number]: number} = {}
  let mask = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X'
  input.forEach(line => {
    if (line.startsWith("mask")) {
      mask = line.split(' = ')[1]
      return
    }

    const addressIndex = Number.parseInt(line.split('[')[1])
    const amount = Number.parseInt(line.split(' = ')[1])
    const amountBinary = (amount >>> 0).toString(2).padStart(36, '0')
    let maskedAmount = ''

    for (let index = 0; index < amountBinary.length; index++) {
      if (mask[index] == 'X')
        maskedAmount += amountBinary[index]
      else
        maskedAmount += mask[index]
    }

    memory[addressIndex] = Number.parseInt(maskedAmount, 2)
  })

  return sumItems(Object.values(memory))
}

const partB = async (input: string[]) => {
  const memory: { [address: number]: number } = {}
  let mask = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X'
  input.forEach(line => {
    if (line.startsWith("mask")) {
      mask = line.split(' = ')[1]
      return
    }

    const initialAddressIndex = Number.parseInt(line.split('[')[1])
    const initialAddressIndexBinary = (initialAddressIndex >>> 0).toString(2).padStart(36, '0')
    let maskedAddress = ''
    for (let index = 0; index < initialAddressIndexBinary.length; index++) {
      if (mask[index] == '0')
        maskedAddress += initialAddressIndexBinary[index]
      else
        maskedAddress += mask[index]  
    }

    const addresses: string[] = []
    const findAddresses = (addressDecisions: { [index: number]: number}) => {
      let newAddress = ''
      for (let index = 0; index < maskedAddress.length; index++) {
        if (maskedAddress[index] != 'X')
          newAddress += maskedAddress[index]
        else {
          if (index in addressDecisions) {
            newAddress += addressDecisions[index]
          } else {
            const addressDecisionsBranch = {...addressDecisions}
            addressDecisionsBranch[index] = 0
            findAddresses(addressDecisionsBranch)
  
            addressDecisions[index] = 1
            findAddresses(addressDecisions)
          }
        }
      }

      if (newAddress.length == 36)
        addresses.push(newAddress)
    }

    findAddresses({})

    const memoryValue = Number.parseInt(line.split(' = ')[1])
    addresses.forEach(addressBinary => {
      memory[Number.parseInt(addressBinary, 2)] = memoryValue
    })
  })

  return sumItems(Object.values(memory))
}

export default {
  partA,
  partB,
}