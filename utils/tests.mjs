export const test = (func, expect, ...args) => {
    const result = Array.isArray(expect) ?
        func(...args).toString() === expect.toString() :
        func(...args) === expect
    console.log(args, func(...args), expect, result ? '✅  ' : '❌  ')
    return result
}

export const createTest = (func) => (expect, ...args) => test(func, expect, ...args)

export const testAll = (...args) => args.every(a => a) ? console.log('✅  ✅  ✅  ALL TESTS PASSED :) ✅  ✅  ✅  ') : console.error('❌  ❌  ❌  SOME TEST FAILED ❌  ❌  ❌    ')

