# Russian Speech Code

Generates a random russian text using russian universal speech code that looks like this:

![Universal speech code table](http://apikabu.ru/img/a5ca6d.jpg)

## Installation

```
npm install --save speech-code
```

## Usage

```js
import { getText, getParagraph } from 'speech-code'

const text = getText()
const paragraph = getParagraph(5)

console.log(`Text: ${text}`)
console.log(`Paragraph: ${paragraph}`)
```
