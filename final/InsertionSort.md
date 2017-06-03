[Insertion sort](https://en.wikipedia.org/wiki/Insertion_sort) is another simple sorting algorithm, often taught initially with bubble sort and selection sort. I found this to be harder to conceptualize for some reason. Essentially the concept is you have a sorted part of the array and a non-sorted part, and you continue making passes through the array, sorting in place. Each pass grabs a number and inserts it into the correct position. The complexity is `O(n2)`, which doesn't make it a great choice for large sets; however, it can prove quite efficient on smaller ones.

Let's use these values: `[2, 1, 3, 5, 4, 7]`

We start by assuming the first value is sorted, and then continue, iterating checking if the value ahead is less than the current value. Once this is the case we continue checking previous numbers until they are not greater than the value ahead. We insert the value there.

In the above case we would immediately flag `1` as less than `2`. We hold the `1` in an auxilary variable, and then insert the `2` into the `1`s slot. Then we iterate down until no values are greater than `1`. In this case, that is the front of the array. That is our insertion slot. We now have `[1, 2, 3, 5, 4, 7]`.

We continue until we hit `5` and `4`. We put `4` in the auxilary slot, and then iterate down, finding the insertion slot for `4`.

Here is how this looks as we go.

<?prettify?>
```
[2, 1, 3, 5, 4, 7]
[1, 2, 3, 5, 4, 7]
[1, 2, 3, 5, 4, 7]
[1, 2, 3, 5, 4, 7]
[1, 2, 3, 4, 5, 7]
[1, 2, 3, 4, 5, 7]
```

Final sort: `[1, 2, 3, 4, 5, 7]`

Here's the implementation:

<?prettify?>
```
function insertionSort(items) {
  for (let i = 0; i < items.length; i++) { // unsorted section
    let item = items[i]
    let j
    for (j = i - 1; j > -1 && items[j] > item; j--) { // sorted section
      items[j + 1] = items[j]
    }
    items[j + 1] = item
  }
  return items
}
```