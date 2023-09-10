import {createTest, testAll} from "../utils/tests.mjs";

var majorityElement = function(nums) {
    let count = 1
    nums.sort((a,b) => a-b)
    for (let i = 0; i<nums.length; i++) {
        if(nums[i] !== nums[i+1]){
            if(count>nums.length/2)
                return nums[i]
        } else {
            count++
        }
    }
};

const test = createTest(majorityElement)

testAll(
    test(3, [3,2,3]),
    test(2, [2,2,1,1,1,2,2]),
);
