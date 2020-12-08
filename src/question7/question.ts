import { SSL_OP_CIPHER_SERVER_PREFERENCE } from "constants"

interface BagGroup {
  bag: Bag,
  amount: number,
}

interface Bag {
  type: string,
  heldIn: string[]
}

interface Bag2 {
  type: string,
  holds?: BagGroup2[],
}

interface BagGroup2 {
  bag: Bag,
  amount: number,
}

const partA = async (input: string[]) => {
  const bagsDict: { [name: string]: Bag } = {}
  input.forEach(line => {
    const parentBag = line.split('s contain ')[0]
    const bagGroupStrings = line.split(' contain ')[1].split(', ')
    bagGroupStrings.forEach(bagGroupString => {
      let type = bagGroupString.split(' ').slice(1).join(' ')
      if (type.charAt(type.length-1) == '.') type = type.substring(0, type.length-1)
      if (type.charAt(type.length-1) == 's') type = type.substring(0, type.length-1)
      

      if (type in bagsDict) {
        bagsDict[type].heldIn.push(parentBag)
      } else {
        bagsDict[type] = {
          type,
          heldIn: [parentBag]
        }
      }
    })
  })

  const bagsThatCanHoldShinyGold = new Set<string>()
  const addEligeableBagsIn = (type: string) => {
    bagsDict[type].heldIn.forEach(bag => {
      bagsThatCanHoldShinyGold.add(bag)

      if (bag in bagsDict) addEligeableBagsIn(bag)
    })
  }

  addEligeableBagsIn('shiny gold bag')

  return bagsThatCanHoldShinyGold.size
}

const partB = async (input: string[]) => {
  const bagsDict: { [name: string]: Bag2 } = {}
  input.forEach(line => {
    const parentBag = line.split('s contain ')[0]
    const bagGroupStrings = line.split(' contain ')[1].split(', ')
    const bagGroups: BagGroup2[] = bagGroupStrings.map(bagGroupString => {
      let type = bagGroupString.split(' ').slice(1).join(' ')
      if (bagGroupString == 'no other bags') return undefined
      if (type.charAt(type.length-1) == '.') type = type.substring(0, type.length-1)
      if (type.charAt(type.length-1) == 's') type = type.substring(0, type.length-1)
      let amount = Number.parseInt(bagGroupString.split(' ')[0])

      return {
        bag: {
          type,
        },
        amount,
      } as BagGroup2
    }).filter(bagGroup => bagGroup != undefined) as BagGroup2[]

    if (parentBag in bagsDict) {
      bagsDict[parentBag].holds?.push(...bagGroups)
    } else {
      bagsDict[parentBag] = {
        type: parentBag,
        holds: bagGroups
      }
    }
  })

  let totalBagCount = -1
  const addBagsHoldingToBagCount = (type: string, multiplier: number) => {
    totalBagCount += multiplier

    bagsDict[type].holds?.forEach(bagGroup => {
      if (!isNaN(bagGroup.amount))
        addBagsHoldingToBagCount(bagGroup.bag.type, multiplier * bagGroup.amount)
    })
  }

  addBagsHoldingToBagCount('shiny gold bag', 1)

  return totalBagCount
}

export default {
  partA,
  partB,
}