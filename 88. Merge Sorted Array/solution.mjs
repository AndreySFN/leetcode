import {createTest, testAll} from "../utils/tests.mjs";

var merge = function (nums1, m, nums2, n, result = []) {
    if (m === 0) {
        nums2.forEach((val, index) => nums1[index] = val)
        return nums1
    }
    if(n===0) {
        return nums1
    }
    const arr = [...nums1]
    let pm = 0
    let pn = 0
    for(let i =0; i<m+n; i++) {
        if(!Number.isFinite(nums2[pn]) || (arr[pm]<nums2[pn] && pm<m)) {
            nums1[i] = arr[pm]
            pm++
        } else if(pn<n || !Number.isFinite(arr[pm])){
            nums1[i] = nums2[pn]
            pn++
        }
    }
    return nums1
}

const test = createTest(merge)

testAll(
    test([-1,-1,0,0,1,1,2,2,3], [-1,0,1,1,0,0,0,0,0], 4, [-1,0,2,2,3], 5),
    test([1], [0], 0, [1], 1),
    test([1], [], 0, [1], 1),
    test([1, 2], [2, 0], 1, [1], 1),
    test([-1, -1, -1, 0, 0, 0], [-1, -1, 0, 0, 0, 0], 4, [-1, 0], 2),
    test([1], [1], 1, [], 0),
    test([1, 2, 2, 3, 5, 6], [1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3),
    test([1], [0], 0, [1], 1),
);
