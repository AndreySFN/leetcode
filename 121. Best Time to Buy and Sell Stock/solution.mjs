import {createTest, testAll} from "../utils/tests.mjs";

const simplify = (arr) => {
    const simplePrices = [arr[0]]
    let isBear = arr[0] > arr[1]
    for(let i = 1; i<arr.length-1; i++) {
        if(isBear) {
            if(arr[i]<arr[i+1]) {
                simplePrices.push(arr[i])
                isBear = false
            }
        } else {
            if(arr[i]>arr[i+1]) {
                simplePrices.push(arr[i])
                isBear = true
            }
        }
    }
    simplePrices.push(arr[arr.length-1])
    return simplePrices
}
var maxProfit = function (prices) {
    const simplePrices = simplify(prices)
    let firstPointer = simplePrices[0] > simplePrices[1] ? 1 : 0
    let lowestPrice = Infinity
    let maxProfit = 0
    for(firstPointer; firstPointer<simplePrices.length; firstPointer+=2) {
        if(simplePrices[firstPointer] < lowestPrice) {
            for(let secondPointer = firstPointer+1; secondPointer<simplePrices.length; secondPointer+=2){
                const dif = simplePrices[secondPointer] - simplePrices[firstPointer]
                if(dif>maxProfit){
                    maxProfit = dif
                }
            }
            lowestPrice = simplePrices[firstPointer]
        }
    }
    return maxProfit
}

const test = createTest(maxProfit)

testAll(
    // test(5, [7,1,5,3,6,4]),
    // test(0, [7,6,4,3,1]),
    // test(6, [1,2,3,4,5,6,7]),
    test(4, [3,3,5,0,0,3,1,4])
);
