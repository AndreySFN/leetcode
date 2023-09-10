import {createTest, testAll} from "../utils/tests.mjs";

var removeElement = function (nums, val) {
    return nums.length - nums.reduce((acc, v, index) => {
        if (Number.isFinite(v)) {
            if(v===val) {
                acc++
                nums[index] = null
            } else {
                if(acc!==0) {
                    nums[index] = null
                }
                nums[index - acc] = v
            }
        }
        return acc
    }, 0)
};


const test = createTest(removeElement)

testAll(
    test(5, [0,1,2,2,3,0,4,2], 2),
    test(2, [3,2,2,3], 3),
)
