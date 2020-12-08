const partA = async (input: string[]) => {
  const runLines = new Set<number>()

  let accumulator = 0
  for (let lineNum = 0; lineNum < input.length;) {
    if (runLines.has(lineNum)) return accumulator
    runLines.add(lineNum)

    const line = input[lineNum]
    const op = line.split(' ')[0]
    const numSign = line.split(' ')[1].substring(0, 1)
    let num = Number.parseInt(line.split(' ')[1].substring(1))
    if (numSign === '-') num *= -1
    
    if (op === 'acc')
      accumulator += num
    
    if (op === 'jmp') {
      lineNum += num
    } else {
      lineNum ++
    }
  }
}

const partB = async (input: string[]) => {
  const runProgram = (programInput: string[]) => {
    const runLines = new Set<number>()

    let accumulator = 0
    for (let lineNum = 0; lineNum < input.length;) {
      if (runLines.has(lineNum)) return null
      runLines.add(lineNum)
  
      const line = input[lineNum]
      const op = line.split(' ')[0]
      const numSign = line.split(' ')[1].substring(0, 1)
      let num = Number.parseInt(line.split(' ')[1].substring(1))
      if (numSign === '-') num *= -1
      
      if (op === 'acc')
        accumulator += num
      
      if (op === 'jmp') {
        lineNum += num
      } else {
        lineNum ++
      }
    }

    return accumulator
  }

  for (let lineNum = 0; lineNum < input.length; lineNum++) {
    if (input[lineNum].split(' ')[0] == 'nop') {
      input[lineNum] = input[lineNum].replace('nop', 'jmp')
      
      const result = runProgram(input)
      if (result) return result
      
      input[lineNum] = input[lineNum].replace('jmp', 'nop')
    } else if (input[lineNum].split(' ')[0] == 'jmp') {
      input[lineNum] = input[lineNum].replace('jmp', 'nop')
      
      const result = runProgram(input)
      if (result) return result
      
      input[lineNum] = input[lineNum].replace('nop', 'jmp')
    }
  }

  return null
}

export default {
  partA,
  partB,
}