[Merge sort](https://en.wikipedia.org/wiki/Merge_sort) is a great general purpose sorting algorithm. In fact some browsers have even used it for `Array.prototype.sort()`. It is comparison based and produces a stable sort, meaning the input order of equal elements is preserved in the sorted output. It is a divide and conquer algorithm, with a complexity of `O(n log n)`.

The algorithm works by breaking the unsorted array into single value units. It then merges and sorts these units back together. Since this is a problem of problems, it naturally makes it recursive. Initially the array is broken into halves, and then those halves are continuously broken in half. Then each of those is merged together using a merge comparison sort. It's actually pretty straight forward once conceptualized.

Say we had: `[3, 5, 1, 2, 4]`

This would get broken down to: 

<?prettify?>
```
[3, 5] [1, 2, 4]
[3] [5] [1] [2, 4]
[3] [5] [1] [2] [4]
```

And merged back together:

<?prettify?>
```
[3, 5] [1, 2] [4]
[1, 2, 3, 5] [4]
[1, 2, 3, 4, 5]
```


**Here is what the merge looks like:**

<?prettify?>
```
function merge(left, right) {
  let merged = []
  let l = 0
  let r = 0
  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      merged.push(left[l])
      l++
    } else {
      merged.push(right[r])
      r++
    }
  }
  return merged.concat((left.slice(l)).concat(right.slice(r)))
}
```

**And the sort:**

<?prettify?>
```
function mergeSort(items) {
  if (items.length < 2) {
    return items
  }

  let middle = Math.floor(items.length / 2)
  let left = items.slice(0, middle)
  let right = items.slice(middle)

  return merge(mergeSort(left), mergeSort(right))
}
```


---

**Here is the complete implementation:**


<?prettify?>
```
'use strict'

function mergeSort(items) {
  if (items.length < 2) {
    return items
  }

  let middle = Math.floor(items.length / 2)
  let left = items.slice(0, middle)
  let right = items.slice(middle)

  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  let merged = []
  let l = 0
  let r = 0
  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      merged.push(left[l])
      l++
    } else {
      merged.push(right[r])
      r++
    }
  }
  return merged.concat((left.slice(l)).concat(right.slice(r)))
}
```