import {createTest, testAll} from "../utils/tests.mjs";

const flip = (arr, index1, index2) => {
    const temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
}
var rotate = function (nums, k) {
    const realK = k % nums.length
    if(realK===0)
        return nums
    if((nums.length-1)%realK !== 0){
        for(let i = 0; i<Math.ceil(nums.length/2); i++) {
            const nextIndex = (i + realK) % (nums.length)
            flip(nums, i, nextIndex)
        }
    }else {
        let lastIndex = 0
        let buffer = nums[lastIndex]
        for (let i = 0; i < nums.length; i++) {
            const nextIndex = (lastIndex + realK) % (nums.length)
            const temp = nums[nextIndex]
            nums[nextIndex] = buffer
            buffer = temp
            lastIndex = nextIndex
        }
    }
    return nums
}

const test = createTest(rotate)


testAll(
    test(
        [3,1,2], [1,2,3],4),
    test([-100,3,99,-1], [-1,-100,3,99],3),
    test([2, 1], [1, 2], 3),
    test([4, 5, 6, 1, 2, 3], [1, 2, 3, 4, 5, 6], 3),
    test([5, 6, 7, 1, 2, 3, 4], [1, 2, 3, 4, 5, 6, 7], 3),
    test([1], [1], 1),
    test([], [], 3),
    test([1, 2], [1, 2], 0),
    test([3, 99, -1, -100], [-1, -100, 3, 99], 2),
)
