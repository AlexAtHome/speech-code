// Type definitions for speech-code 1.0
// Project: https://github.com/mamoru-kun/speech-code
// Definitions by: Alexander B. <https://github.com/mamoru-kun>
// Definitions: https://github.com/mamoru-kun/speech-code

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
  export function getParagraph(sentences: number): string;
  /**
   * Returns a single generated sentence
   */
  export function getSentence(): string;
}
