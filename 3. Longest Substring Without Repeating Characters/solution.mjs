import {createTest, testAll} from "../utils/tests.mjs";

// Скорость O(n)
var lengthOfLongestSubstring = function (s) {
    if (s.length <= 1) {
        return s.length
    }
    let start = 0
    let map = {[s.at(start)]: start}
    let end = 1
    let maxLength = 0
    while (end < s.length) {
        const char = s.at(end)
        if (Number.isFinite(map[char])) {
            maxLength = Math.max(maxLength, end-start)
            const substr = s.slice(start, map[char]+1)
            start = map[char]+1
            for(let i =0;i<substr.length; i++){
                delete map[substr.at(i)]
            }

        }
        map[char] = end
        end++
    }
    return Math.max(maxLength, end - start)
}

const test = createTest(lengthOfLongestSubstring)

testAll(
    test(6, "wobgrovw"),
    test(6, "bbtablud"),
    test(1, "aa"),
    test(1, "a"),
    test(1, " "),
    test(2, "au"),
    test(3, "abcabcbb"),
    test(3, "abcabcbb"),
    test(1, "bbbbbbbbbb"),
    test(0, ""),
    test(3, "pwwkew"),
)
