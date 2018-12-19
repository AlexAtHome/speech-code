'use strict'

const sentenceParts = require('./sentence-parts.json')

const randomValueFrom = array => {
  let index = ~~(array.length * Math.random())
  return array[index]
}

/**
 * Выстраивает предложение
 */
const buildSentence = () => {
  let result = []
  result.push(randomValueFrom(sentenceParts.first))
  result.push(randomValueFrom(sentenceParts.second))
  result.push(randomValueFrom(sentenceParts.third))
  result.push(randomValueFrom(sentenceParts.fourth))
  if (result[0].endsWith('!') || result[0].endsWith('.')) {
    result[1] = result[1].replace(/^./, result[1].slice(0, 1).toUpperCase())
  }
  return result.join(' ')
}

/**
 * Строит абзац из предложений
 * @param {number} sentences Число предложений в абзаце
 */
const getParagraph = sentences => {
  let result = ''
  for (let i = 0; i < sentences; i++) {
    if (i > 0) result += ' '
    result += buildSentence()
  }
  return result
}

/**
 * Строит текст
 * @param {number} paragraphs Число абзацев в тексте
 */
const getText = (paragraphs = 3) => {
  let result = ''
  for (let i = 0; i < paragraphs; i++) {
    if (i > 0) result += '\n'
    let sentences = Math.floor(Math.random() * 5) + 2
    result += getParagraph(sentences)
  }
  return result
}

module.exports = {
  getParagraph,
  getText
}
