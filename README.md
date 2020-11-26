# Russian Speech Code

Generates a random russian text using russian universal speech code that looks like this:

![Universal speech code table](http://apikabu.ru/img/a5ca6d.jpg)

## Installation

```
npm install speech-code
```

## Usage

```js
import { getText, getParagraph, getSentence } from 'speech-code'

const sentence = getSentence()
const text = getText()
const paragraph = getParagraph(5)

console.log(`Sentence: ${sentence}`)
console.log(`Text: ${text}`)
console.log(`Paragraph: ${paragraph}`)
```

### cli

```sh
npx speech-code text 3
npx speech-code paragraph 4
npx speech-code sentence

# You can also use shorter version of types
npx speech-code t 3
npx speech-code p 4
npx speech-code s
```
