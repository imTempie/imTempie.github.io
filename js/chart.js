function array() {
  document.querySelector("#chartReport").innerHTML =
    '<canvas id="chart"></canvas>';

  let result = new Array(100);
  result = result.fill(0).map(() => Math.floor(Math.random() * 100));

  let output = [];

  for (let i = 0; i < result.length; i += 2) {
    output.push({
      x: result[i],
      y: i === 0 ? result[2 * 0.5] : result[i * 0.5],
    });
  }
  console.log(output);

  const data = {
    datasets: [
      {
        label: "Scatter Dataset",
        data: output,
        backgroundColor: "rgb(55, 99, 255)",
      },
    ],
  };

  let config = {
    type: "scatter",
    data: data,
    options: {
      scales: {
        x: {
          type: "linear",
          position: "bottom",
        },
      },
    },
  };

  let chart = new Chart(document.getElementById("chart"), config);
}
