function reverseWords(sentence) {
    const words = sentence.split(' ');
    function reverseWord(word) {
      let reversed = '';
      for (let i = word.length - 1; i >= 0; i--) {
        reversed += word[i];
      }
      return reversed;
    }
  
    const reversedWords = words.map(reverseWord);
    const reversedSentence = reversedWords.join(' ');
  
    return reversedSentence;
  }

  const inputSentence = "This is a sunny day";
  const reversedSentence = reverseWords(inputSentence);
  console.log(reversedSentence); 
  