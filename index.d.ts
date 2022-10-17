/*
Type definitions for speech-code 1.4.0
Project: https://github.com/AlexAtHome/speech-code
Definitions by: Alexander Bolotskov <https://github.com/AlexAtHome>
Definitions: https://github.com/AlexAtHome/speech-code
*/

export type Lang = 'ru' | 'en';

/**
 * Returns a text consisting of given number of paragraphs
 * consisting of random number of sentences (from 2 to 5)
 * @param paragraphs The number of paragraphs in the text. Default is 3.
 * @param language The language to generate a text in
 */
export function getText(paragraphs?: number, language?: Lang): string;
/**
 * Returns a paragraph consisting of given number of sentences
 * @param sentences The number of sentences. Default is 3.
 * @param language The language to generate a text in
 */
export function getParagraph(sentences?: number, language?: Lang): string;
/**
 * Returns a single generated sentence
 * @param language The language to generate a text in
 */
export function getSentence(language?: Lang): string;
/**
 * Returns a paragraph with specified number of characters.
 *
 * *WARNING: The length of the resulting text will never be equal to specified value. It might be either shorter or longer.*
 * @param chars The number of characters (spaces included). Default is 50.
 */
export function getCharacters(chars?: number, language?: Lang): string;
