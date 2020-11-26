"use strict";

const sentenceParts = require("./sentence-parts.json");

/**
 * Отдаёт случайный элемент массива
 * @param {array} array Массив с элементами
 */
const randomValueFrom = array => array[~~(array.length * Math.random())];

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

module.exports = {
  getParagraph,
  getText,
  getSentence,
};
