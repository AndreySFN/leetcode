import {createTest, testAll} from "../utils/tests.mjs";

var twoSum = function(nums, target) {
    const map = nums.reduce((acc, n, index) => {
        acc[n] ??= []
        acc[n].push(index)
        return acc
    }, {})
    const keys = Object.keys(map)
    for(let i = 0; i<keys.length; i++) {
        const firstIndex = map[keys[i]].pop()
        const secondIndex = map[target - keys[i]]?.pop()
        if(Number.isInteger(secondIndex)){
            return [firstIndex, secondIndex]
        }
        map[keys[i]].push(firstIndex)
    }
}

const test = createTest(twoSum)

testAll(
    test([1, 3], [1, 2, 0, 4, 0, 0], 6),
    test([1, 4], [0, 2, 0, 0, 5, 6], 7),
    test([0, 1], [2, 7, 11, 15], 9),
    test([1, 2], [3, 2, 4], 6),
    test([1, 0], [3, 3], 6),
)
