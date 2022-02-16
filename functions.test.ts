const {shuffleArray} = require('./utils')
const {bots} = require('./data')

describe('shuffleArray should', () => {
    // CODE HERE
    test('Returns an array', () => {
        expect(Array.isArray(shuffleArray(bots))).toBe(true)
    })
    test('Return array matching same length as input array', () => {
        expect(shuffleArray(bots)).toHaveLength(bots.length)
    })
    test('return array with all the same items', () => {
        expect(shuffleArray(bots)).toEqual(expect.arrayContaining(bots))
    })
    test('shuffle items around', () => {
        //function to check if two arrays have the same elements in the same order
        function areEqual(arr1, arr2) {
            arr1.every((elem, index) => elem === arr2[index])
        }
        expect(areEqual(bots, shuffleArray(bots))).not.toBe(true)
    })
})