var counter = 1;

function PrintAndIncreaseCounter() {
  console.clear();
  console.log(counter);
  counter++;
}

// async function: setInterval(callback fn, interval in ms)
setInterval(PrintAndIncreaseCounter, 1000);
