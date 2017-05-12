# read-file-async

> Typed async readFile function

```js
// @flow
import readFileAsync from 'read-file-async';

readFileAsync('path/to/file.txt').then(buffer => {
  console.log(buffer.toString());
});
```
