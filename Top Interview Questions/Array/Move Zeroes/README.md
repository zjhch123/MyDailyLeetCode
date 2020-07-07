# Move Zeroes

和 `Remove Duplicates from Sorted Array` 较为相似，都是利用双指针解题。数组题大部分都可以用双指针求解。

使用指针A指向需要交换到的位置，从0开始循环，循环变量为i

```
0, 1, 0, 3, 8, 9 // 第一轮, i = 0, nums[i] === 0, 继续
^
·
0, 1, 0, 3, 8, 9 // 第二轮, i = 1, nums[i] !== 0, 交换A和i的元素, 并令A后移一位
^
   ·
1, 0, 0, 3, 8, 9 // 第二轮操作之后
   ^
   ·
1, 0, 0, 3, 8, 9 // 第三轮, i = 2, nums[i] === 0, 继续
   ^
      ·
1, 0, 0, 3, 8, 9 // 第四轮, i = 3, nums[i] !== 0, 交换A和i的元素, 并令A后移一位
   ^
         ·
1, 3, 0, 0, 8, 9 // 第四轮操作之后
      ^
         ·
...循环可得结果
```