var xmlhttp = new XMLHttpRequest();
var url = "http://localhost/data.json";
xmlhttp.open("GET", url, true);
xmlhttp.send();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var data = JSON.parse(this.responseText);
    console.log(data);
    day = data.map(function (elem) {
      return elem.day;
    });
    amount = data.map(function (elem) {
      return elem.amount;
    });

    const ctx = document.getElementById("canvas");

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: day,

        datasets: [
          {
            label: "$",
            data: amount,
            borderWidth: 1,
            hoverBackgroundColor: (hovcolor) => {
              let hovcolors =
                hovcolor.raw < 50 ? "hsl(12, 87%, 75%)" : "hsl(200, 48%, 74%)";
              return hovcolors;
            },
            backgroundColor: (color) => {
              console.log(color);
              let colors =
                color.raw < 50 ? "hsl(10, 79%, 65%)" : "hsl(186, 34%, 60%)";
              return colors;
            },
            borderRadius: 5,
            categoryPercentage: 0.8,
            barPercentage: 1,
          },
        ],
      },
      options: {
        legend: {
          fontColor: "white",
          backgroundColor: " hsl(25, 47%, 15%)",
        },
        yAxes: [
          {
            display: false,
          },
        ],
        plugins: {
          legend: {
            display: false,
          },
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: {
              drawOnChartArea: false,
              drawBorder: false,
              display: false,
            },
          },

          y: {
            beginAtZero: true,
            min: 0,
            max: 60,
            stepSize: 20,

            ticks: {
              display: false,
            },
            grid: {
              display: false,
              drawTicks: false,
              drawBorder: false,
              display: false,
              drawBorder: false,
              drawOnChartArea: false,
            },
          },
        },
      },
    });
  }
};
