const counters = document.querySelectorAll(".counter");
let countingFlags = Array(counters.length).fill(false);

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function startCountingIfVisible(counter, index) {
  let initial_count = 0;
  const final_count = counter.dataset.count;

  if (!countingFlags[index] && isElementInViewport(counter)) {
    countingFlags[index] = true;

    const counting = setInterval(() => {
      initial_count++;
      counter.innerText = initial_count;

      if (initial_count > 40) {
        initial_count += 5;
        counter.innerText = initial_count + "+";
      }

      if (initial_count > 50) {
        initial_count += 10;
        counter.innerText = initial_count + "+";
      }

      if (initial_count >= final_count) {
        clearInterval(counting);
      }
    }, 50);
  }
}

window.addEventListener("scroll", () => {
  counters.forEach((counter, index) => {
    startCountingIfVisible(counter, index);
  });
});
