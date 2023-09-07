import {createTest, testAll} from "../utils/tests.mjs";

const dictionary = {
    ']':'[',
    '}':'{',
    ')':'(',
}
var isValid = function (s) {
    const stack = []
    const open = Object.values(dictionary)
    const close = Object.keys(dictionary)
    for (let i = 0; i < s.length; i++) {
        const char = s.at(i)
        open.includes(char) && stack.push(char)
        if(close.includes(char)){
            if(stack.pop() !== dictionary[char])
                return false
        }
    }
    return stack.length===0
};


const test = createTest(isValid)

testAll(
    test(true, '()'),
    test(true, '(){}[]'),
    test(false, '(]'),
)
