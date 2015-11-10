###IIFE & Scope

IIFE stands for immediately invoked function expression. This means a function expression is created and called immediately by itself. The biggest reason to use this, possibly the only one, is to create a contained scope. By wrapping the function in parenthesis `()`, it creates its own private scope, where no outside variables can be seen, nor can it conflict with outer variables in scope. This is sometimes a problem where libraries conflict, especially in front end development.


<?prettify?>
```
// syntax
(function() {
  // the code here is executed once in its own scope
})();
```


defensive semicolon

- [Understanding IIFEs](http://benalman.com/news/2010/11/immediately-invoked-function-expression/)