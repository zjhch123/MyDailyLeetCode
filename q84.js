/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  const findSmallest = (array, startIndex, endIndex) => {
    let min = array[startIndex]
    let smallestIndex = startIndex

    for (let i = startIndex; i <= endIndex; i++) {
      if (array[i] < min) {
        min = array[i]
        smallestIndex = i
      }
    }

    return [min, smallestIndex]
  }

  const helper = (nums, start, end) => {
    if (start === end) {
      return nums[start]
    }

    const [ smallest, smallestIndex ] = findSmallest(nums, start, end)
    const current = (end - start + 1) * smallest
    const left = smallestIndex === start ? 0 : helper(nums, start, smallestIndex - 1)
    const right = smallestIndex === end ? 0 : helper(nums, smallestIndex + 1, end)

    return Math.max(current, left, right)
  }

  if (heights === null || heights.length === 0) { return 0 }

  return helper(heights, 0, heights.length - 1)
};


/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea2 = function(heights) {
  if (heights === null || heights.length === 0) {
    return 0
  }
  const stack = []
  
  let index = 0
  let max = 0

  while (index < heights.length) { // 构造单调递增栈, 顺便计算最大值
    const height = heights[index]
    if (stack.length === 0) {
      stack.push(height)
    } else {
      const peek = stack[stack.length - 1]
      if (peek < height) {
        stack.push(height)
      } else {
        let count = 0
        while (stack[stack.length - 1] > height) {
          count += 1
          const outer = stack.pop()
          max = Math.max(outer * count, max)
        }
        while (count >= 0) {
          stack.push(height)
          count -= 1
        }
      }
    }
    index += 1
  }

  const size = stack.length
  for (let i = 0; i < stack.length; i++) {
    max = Math.max(stack[i] * (size - i), max)
  }

  return max
};

console.log(largestRectangleArea([4,1,6,8,3,6,5]))
console.log(largestRectangleArea2([4,1,6,8,3,6,5]))