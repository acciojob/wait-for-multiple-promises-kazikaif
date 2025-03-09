function getRandomTime() {
  return Math.random() * 2 + 1;
}

const promises = [
  new Promise((resolve) => {
    const time = getRandomTime();
    setTimeout(() => resolve({ name: "Promise 1", time: time.toFixed(3) }), time * 1000);
  }),
  new Promise((resolve) => {
    const time = getRandomTime();
    setTimeout(() => resolve({ name: "Promise 2", time: time.toFixed(3) }), time * 1000);
  }),
  new Promise((resolve) => {
    const time = getRandomTime();
    setTimeout(() => resolve({ name: "Promise 3", time: time.toFixed(3) }), time * 1000);
  })
];

const output = document.getElementById("output");

output.innerHTML = '<tr id="loading"><td colspan="2">Loading...</td></tr>'; // Ensure loading row is present

Promise.all(promises).then((results) => {
  output.innerHTML = ""; // Remove loading row

  results.forEach(({ name, time }) => {
    const row = `<tr><td>${name}</td><td>${time}</td></tr>`;
    output.innerHTML += row;
  });

  const totalTime = Math.max(...results.map((r) => parseFloat(r.time))).toFixed(3);
  output.innerHTML += `<tr class="table-info"><td>Total</td><td>${totalTime}</td></tr>`;
});
