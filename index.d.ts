/*
Type definitions for speech-code 1.3.2
Project: https://github.com/mamoruuu/speech-code
Definitions by: Alexander Bolotskov <https://github.com/mamoruuu>
Definitions: https://github.com/mamoruuu/speech-code
*/

/**
 * Returns a text consisting of given number of paragraphs
 * consisting of random number of sentences (from 2 to 5)
 * @param paragraphs - the number of paragraphs in the text. Default is 3.
 */
export function getText(paragraphs?: number): string;
/**
 * Returns a paragraph consisting of given number of sentences
 * @param sentences - the number of sentences. Default is 3.
 */
export function getParagraph(sentences?: number): string;
/**
 * Returns a single generated sentence
 */
export function getSentence(): string;
/**
 * Returns a paragraph with specified number of characters.
 *
 * *WARNING: The length of the resulting text will never be equal to specified value. It might be either shorter or longer.*
 * @param chars - the number of characters (spaces included). Default is 50.
 */
export function getCharacters(chars?: number): string;
