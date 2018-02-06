# hashget
window.location.hash parser and make life easier

## Installation

**Install via npm**

```bash
npm install hashget
```
**Install via yarn**
```bash
yarn add hashget
```

```js
 import {HashGet} from 'hashget'
 window.location.hash = "#empty&test=100"

 var locHash = new HashGet();

 var count = locHash.getCount()
 console.log(count) // 2

 var has = locHash.has('test')
 console.log(has) // true

 var has = locHash.has('empty')
 console.log(has) // true

 var value = locHash.getValue('test')
 console.log(value) // 100

 var value = locHash.getValue('empty')
 console.log(value) // undefined
 
```

## Development & Testing

Since we did not want to mess with bundlers for such small library,
Comment this line in index.js in order to run test
```js
//export {HashGet}
```

### Chrome only
```bash
npm run test
```
or
```bash
yarn test
```
### All browsers including IE and Safari
```bash
npm run test:all
```
or
```bash
yarn test:all
```

We :heart: NPM and Yarn