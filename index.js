"use strict";

const sentenceParts = require("./sentence-parts.json");

/**
 * Отдаёт случайный элемент массива
 * @param {array} array Массив с элементами
 */
const randomValueFrom = (array) => array[~~(array.length * Math.random())];

/**
 * Выстраивает предложение
 */
const getSentence = () => {
  const result = [
    randomValueFrom(sentenceParts.first),
    randomValueFrom(sentenceParts.second),
    randomValueFrom(sentenceParts.third),
    randomValueFrom(sentenceParts.fourth),
  ];
  if (result[0].endsWith("!") || result[0].endsWith(".")) {
    result[1] = result[1].replace(/^./, result[1].slice(0, 1).toUpperCase());
  }
  return result.join(" ");
};

/**
 * Строит абзац из предложений
 * @param {number} sentences Число предложений в абзаце
 */
const getParagraph = (sentences = 3) => {
  let result = "";
  for (let i = 0; i < sentences; i++) {
    if (i > 0) result += " ";
    result += getSentence();
  }
  return result;
};

/**
 * Строит текст
 * @param {number} paragraphs Число абзацев в тексте
 */
const getText = (paragraphs = 3) => {
  let result = "";
  for (let i = 0; i < paragraphs; i++) {
    if (i > 0) result += "\n";
    let sentences = Math.floor(Math.random() * 5) + 2;
    result += getParagraph(sentences);
  }
  return result;
};

/**
 * Строит абзац с определённым количеством символов
 * @param {number} chars Приблизительное количество символов в абзаце
 */
const getCharacters = (chars = 50) => {
  const maxRestarts = 10;
  let restarts = 0;

  let previousResult = "";

  const generate = () => {
    const maxRetries = 20;
    let retries = 0;

    let text = "";
    while (text.length < chars && maxRetries > retries) {
      const sentence = getSentence();
      if (`${text} ${sentence}`.length - chars < 20) {
        text += sentence;
        retries = 0;
      } else {
        retries++;
      }
    }
    if (retries === maxRetries && restarts < maxRestarts) {
      if (text.length > previousResult.length) {
        previousResult = text;
      }
      restarts++;
      return generate();
    }
    return text;
  };

  let result = generate();
  if (maxRestarts === restarts && result.length < previousResult.length) {
    result = previousResult;
  }
  return result;
};

module.exports = {
  getParagraph,
  getText,
  getSentence,
  getCharacters,
};
