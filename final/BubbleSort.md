[Bubble sort](https://en.wikipedia.org/wiki/Bubble_sort) is one of the basic sorting algorithms. It gets its name because it bubbles up the values. It works by making passes through the array, comparing index pairs and swapping them.

Say we wanted to sort the following array min-max.

<?prettify?>
```
[1, 5, 99, 65, 100, 4, 12]
```

We would start with `1` and `5`. Since `5` is bigger than `1`, we don't need to swap. We then go to `5` and `99`. Still no swapping required. Now, we get to `99`, and `65`. `99` is bigger, so we swap the pair. The array is now `[1, 5, 65, 99, 100, 4, 12]`. Next is `99` and `100`. No swap. `100` and `4`. Swap. And finally, `100` swaps with `12`. Notice in the first pass we bubbled up the highest number to the end.

We continue this pattern of sweeping through the array and comparing value pairs, each time bubbling up the next highest number.

Generally speaking this algorithm does not apply to many real world scenarios because it is slow. Worst case is `O(n2)`.

Final sort: `[1, 4, 5, 12, 65, 99, 100]`

Here is the implementation:

<?prettify?>
```
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length - i; j++) {
      if (arr[j - 1] > arr[j]) {
        let temp = arr[j - 1]
        arr[j - 1] = arr[j]
        arr[j] = temp
      }
    }
  }
}
```