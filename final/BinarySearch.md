Binary search is a great way to improve lookup time on a sorted data set. You can go from O(n) to O(log n), which is quite significant. I first stumbled upon this implementation awhile back and found it worth re-sharing.

**Original post:** https://oli.me.uk/2013/06/08/searching-javascript-arrays-with-a-binary-search/

<?prettify?>
```
// indexOf is O(n). binary search is (log n)
// `this` represents the array you're searching
function binaryIndexOf(searchElement) {
  let minIndex = 0
  let maxIndex = this.length - 1
  let currentIndex
  let currentElement

  while (minIndex <= maxIndex) {
    // n | 0 is the same as Math.floor(n), but faster
    currentIndex = (minIndex + maxIndex) / 2 | 0
    currentElement = this[currentIndex]
    
    if (currentElement < searchElement) {
      minIndex = currentIndex + 1
    } else if (currentElement > searchElement) {
      maxIndex = currentIndex - 1
    } else {
      return currentIndex
    }
  }
  return -1
}
```