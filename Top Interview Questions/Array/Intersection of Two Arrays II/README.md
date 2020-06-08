# Intersection of Two Arrays II

两数组取交集，并返回所有交集元素。

很简单的一道题，对于较短的数组构建HashMap，key为数字，value为出现的次数。后遍历较长的数组对HashMap中的各值进行比较即可。

还有一种方法是先两个数组排序。然后使用双指针分别指向两个数组开头元素。

```
A: 1, 1, 2, 3, 4, 4, 4, 5, 6, 8
   ^

B: 1, 2, 3, 5, 5, 8
   ^
```

对比两个指针指向的数字，如果相等，则将数字push进入result数组，并且两个指针均后移一位

```
A: 1, 1, 2, 4, 4, 4, 4, 5, 6, 8
      ^

B: 1, 2, 3, 5, 5, 8
      ^
```

如果A指针指向的数小于B指针指向的数，则A指针后移一位。

```
A: 1, 1, 4, 4, 4, 5, 6, 8
         ^

B: 1, 2, 3, 5, 5, 8
      ^
```

如果B指针指向的数小于A指针指向的数，则B指针后移一位。

```
A: 1, 1, 4, 4, 4, 5, 6, 8
         ^

B: 1, 2, 3, 5, 5, 8
         ^
```

之后循环可得正确结果。