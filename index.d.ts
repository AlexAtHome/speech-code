// Type definitions for speech-code 1.3.0
// Project: https://github.com/mamoruuu/speech-code
// Definitions by: Alexander B. <https://github.com/mamoruuu>
// Definitions: https://github.com/mamoruuu/speech-code

export namespace SpeechCode {
  /**
   * Returns a text consisting of given number of paragraphs
   * consisting of random number of sentences (from 2 to 5)
   * @param paragraphs - the number of paragraphs in the text
   */
  export function getText(paragraphs?: number = 3): string;
  /**
   * Returns a paragraph consisting of given number of sentences
   * @param sentences - the number of sentences
   */
  export function getParagraph(sentences?: number = 3): string;
  /**
   * Returns a single generated sentence
   */
  export function getSentence(): string;
  /**
   * Returns a paragraph with specified number of characters
   * @param chars - the number of characters (spaces included)
   */
  export function getCharacters(chars?: number = 50): string;
}
