var counter = 1;

function PrintAndIncreaseCounter() {
  console.clear();
  console.log(counter);
  counter++;

  // kind of recursive call, where we call one timeout after other by calling setTimeout
  // in the callback of it's first registry
  setTimeout(PrintAndIncreaseCounter, 1000);
}

setTimeout(PrintAndIncreaseCounter, 1000);
