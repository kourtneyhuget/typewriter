const sentence = "hello how are you?";

function sentenceDelay(sentence) {
  let timer = 0;
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, timer);
    timer += 200;
  }
}

sentenceDelay(sentence + "\n");
