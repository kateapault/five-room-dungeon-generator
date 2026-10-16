
export function randomlySelectWeightedIndex(weights: Array<number>): number {
    const cumulativeSum = (sum => value => sum += value)(0);
    let cumulativeWeights = weights.map(cumulativeSum)

    let randInt = Math.random()
    let ind = 0
    while (ind < cumulativeWeights.length) {
        if (randInt <= cumulativeWeights[ind]) {
            break;
        }
        ind ++  
    }
    return ind
}

export function getRandInt(maxNonInclusive: number, startFromOne: boolean = false): number {
    if (startFromOne) {
        return Math.ceil(Math.random()*(maxNonInclusive+1))
    }
    return Math.floor(Math.random()*maxNonInclusive)
}

export function rollDice({dieValue, numRolls, addNum=0, multiplier=1}) {
    let rolledVal = 0
    for (let i = 0; i < numRolls; i++) {
        rolledVal += getRandInt(dieValue+1, true)
    }
    return (rolledVal + addNum) * multiplier
}