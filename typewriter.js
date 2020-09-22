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

// const intervalId = setInterval(sentenceDelay, (1000)[sentence]);

// const sentence = "Hello there from lighthouse Labs";
// setInterval(function () {
//   for (const char of sentence) {
//     process.stdout.write(char);
//   }
// }, 50);
