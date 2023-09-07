function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

export const arrToTree = (arr) => {
    if (arr.length === 0)
        return null
    return arr.map((val) => val !== null ? new TreeNode(val) : null).map((val, index, arr) => {
        if (val) {
            val.left = arr[index * 2 + 1]
            val.right = arr[index * 2 + 2]
            return val
        }
    })[0]
}
