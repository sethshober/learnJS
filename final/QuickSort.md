[Quick sort](https://en.wikipedia.org/wiki/Quicksort) is one of the more performant sorting algorithms, having an average complexity of `O(n log n)`, though the worst case is still `O(n2)`. There are many ways to implement it, which can of course affect the overall performance.

It is a divide and conquer algorithm, similar to merge sort. The idea is to pick a pivot point in the array, sort both sides relative to the pivot point, and recursively continue this, while changing the pivot point until the entire array is sorted. It involves creating partitions in the array, and swapping items.

It starts out by selecting a pivot point and then creating two pointers. The left pointer will be the first item in the array, and the right pointer will be the last item in the array.

We continue to move the left pointer until the value is greater than or equal to the pivot. For the right pointer, we continue to move it towards the pivot until  the value is less than or equal to the pivot. **If the left pointer is less than or equal to the right pointer, swap the value.**

Increment/decrement the pointers so they are one index closer to the pivot. If they meet, we're done. If not, repeat the previous steps.

**Let's look at the partition first.**

<?prettify?>
```
function partition(items, left, right) {
  // create pivot as middle value
  const pivot = items[Math.floor((right + left) / 2)]
  
  let i = left // start left and go right towards pivot
  let j = right // start right and go left towards pivot
  
  while (i <= j) { 
    while (items[i] < pivot) {
      i++
    }
    while (items[j] > pivot) {
      j--
    }
    if (i <= j) {
      // swap values using destructuring
      [items[i], items[j]] = [items[j], items[i]]
      i++
      j--
    }
  }
  return i
}
```


**And now the quick sort.**


<?prettify?>
```
function quickSort(items, left = 0, right = items.length - 1) {
  let index
  if (items.length > 1) {
    // create the partition (split the array)
    index = partition(items, left, right)
    
    if (left < index - 1) {
      quickSort(items, left, index - 1)
    }
    if (index < right) {
      quickSort(items, index, right)
    }
  }
  return items
}
```

**Note on the pivot:** How the pivot is calculated can greatly affect the performance of the algorithm. If you started with the first value on a sorted array it would give worst case performance. For general purpose use, stick with selecting a pivot in the middle.

**Note on the swap:** I chose to use an ES6 feature to simplify it. An older approach would use a temp variable like this:

<?prettify?>
```
function swap(items, firstIndex, secondIndex){
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}
```

---

**Here is the full implementation.**

<?prettify?>
```
'use strict'

function quickSort(items, left = 0, right = items.length - 1) {
  let index
  if (items.length > 1) {
    // create the partition (split the array)
    index = partition(items, left, right)
    
    if (left < index - 1) {
      quickSort(items, left, index - 1)
    }
    if (index < right) {
      quickSort(items, index, right)
    }
  }
  return items
}

function partition(items, left, right) {
  // create pivot as middle value
  const pivot = items[Math.floor((right + left) / 2)]
  
  let i = left // start left and go right towards pivot
  let j = right // start right and go left towards pivot
  
  while (i <= j) { 
    while (items[i] < pivot) {
      i++
    }
    while (items[j] > pivot) {
      j--
    }
    if (i <= j) {
      // swap values using destructuring
      [items[i], items[j]] = [items[j], items[i]]
      i++
      j--
    }
  }
  return i
}
```



































