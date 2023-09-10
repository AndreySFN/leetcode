import {createTest, testAll} from "../utils/tests.mjs";

var removeDuplicates = function(nums) {
    return nums.length - nums.reduce((acc, val, index) => {
        if(val === nums[index+1] && val === nums[index+2]){
            val = null
            acc++
        } else {
            nums[index-acc] = val
            val = null
        }
        return acc
    }, 0)
};


const test = createTest(removeDuplicates)

testAll(
    test(7, [0,0,1,1,1,1,2,3,3]),
    test(5, [1,1,1,2,2,3]),
)
