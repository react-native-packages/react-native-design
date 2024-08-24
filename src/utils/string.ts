import { isNotEmpty } from '@rnpack/utils';

export function capitalizeFirstLetter(word: string) {
  if (word && isNotEmpty(word)) {
    return word.replace(/^./, word.charAt(0).toUpperCase());
  }

  return word;
}
