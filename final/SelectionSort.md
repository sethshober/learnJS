[Selection sort](https://en.wikipedia.org/wiki/Selection_sort) is a basic sorting algorithm. It's an in-place comparison sort. It's generally considered to be not performant enough, but does have some use cases due to its simplicity. The complexity of selection sort is `O(n2)`. It works by taking an index and making passes on the array looking for the next lowest value.

Let's use these values: `[5, 99, 65, 100, 4, 12]`

We start with `5` and pass through the entire array looking for a number that is less than `5`. If we find one, we store it, and continue searching for smaller numbers, but now comparing to the value we just stored. This ensures that after a pass we have found the next lowest number. Then we swap it in order to put it in the correct position.

On the first pass we would compare `5` to each number and not until we got to `4` would we find a lower number, which we would store. We would then compare `4` to `12`, and the sweep would be complete. `4` would then be swapped with `5` in order to put `4` in the correct position. We would then do the same pattern with `99`, which would bring `5` to the second position, and continue making passes for each value.

Final sort: `[4, 5, 12, 65, 99, 100]`

Here's the implementation:

<?prettify?>
```
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let index = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[index]) {
        index = j
      }
    }
    if (index !== i) {
      let temp = arr[index]
      arr[index] = arr[i]
      arr[i] = temp
    }
  }
}
```