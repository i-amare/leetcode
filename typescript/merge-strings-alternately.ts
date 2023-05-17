function mergeAlternately(word1: string, word2: string): string {
  let result = ""
  
  for (let i = 0; i < word1.length || i < word2.length; i++) {
    if (word1.charAt(i)) result += word1.charAt(i)
    if (word2.charAt(i)) result += word2.charAt(i)
  }

  return result;
};