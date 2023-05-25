window.Apex = {
  chart: {
    foreColor: '#ccc',
    toolbar: {
      show: false
    },
  },
  stroke: {
    width: 3
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    theme: 'dark'
  },
  grid: {
    borderColor: "#535A6C",
    xaxis: {
      lines: {
        show: true
      }
    }
  }
};

var spark1 = {
  chart: {
    id: 'spark1',
    group: 'sparks',
    type: 'line',
    height: 80,
    sparkline: {
      enabled: true
    },
    dropShadow: {
      enabled: true,
      top: 1,
      left: 1,
      blur: 2,
      opacity: 0.2,
    }
  },
  series: [{
    data: [25, 66, 41, 59, 25, 44, 12, 36, 9, 21]
  }],
  stroke: {
    curve: 'smooth'
  },
  markers: {
    size: 0
  },
  grid: {
    padding: {
      top: 20,
      bottom: 10,
      left: 110
    }
  },
  colors: ['#fff'],
  tooltip: {
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function formatter(val) {
          return '';
        }
      }
    }
  }
}

var spark2 = {
  chart: {
    id: 'spark2',
    group: 'sparks',
    type: 'line',
    height: 80,
    sparkline: {
      enabled: true
    },
    dropShadow: {
      enabled: true,
      top: 1,
      left: 1,
      blur: 2,
      opacity: 0.2,
    }
  },
  series: [{
    data: [12, 14, 2, 47, 32, 44, 14, 55, 41, 69]
  }],
  stroke: {
    curve: 'smooth'
  },
  grid: {
    padding: {
      top: 20,
      bottom: 10,
      left: 110
    }
  },
  markers: {
    size: 0
  },
  colors: ['#fff'],
  tooltip: {
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function formatter(val) {
          return '';
        }
      }
    }
  }
}

var spark3 = {
  chart: {
    id: 'spark3',
    group: 'sparks',
    type: 'line',
    height: 80,
    sparkline: {
      enabled: true
    },
    dropShadow: {
      enabled: true,
      top: 1,
      left: 1,
      blur: 2,
      opacity: 0.2,
    }
  },
  series: [{
    data: [47, 45, 74, 32, 56, 31, 44, 33, 45, 19]
  }],
  stroke: {
    curve: 'smooth'
  },
  markers: {
    size: 0
  },
  grid: {
    padding: {
      top: 20,
      bottom: 10,
      left: 110
    }
  },
  colors: ['#fff'],
  xaxis: {
    crosshairs: {
      width: 1
    },
  },
  tooltip: {
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function formatter(val) {
          return '';
        }
      }
    }
  }
}

var spark4 = {
  chart: {
    id: 'spark4',
    group: 'sparks',
    type: 'line',
    height: 80,
    sparkline: {
      enabled: true
    },
    dropShadow: {
      enabled: true,
      top: 1,
      left: 1,
      blur: 2,
      opacity: 0.2,
    }
  },
  series: [{
    data: [15, 75, 47, 65, 14, 32, 19, 54, 44, 61]
  }],
  stroke: {
    curve: 'smooth'
  },
  markers: {
    size: 0
  },
  grid: {
    padding: {
      top: 20,
      bottom: 10,
      left: 110
    }
  },
  colors: ['#fff'],
  xaxis: {
    crosshairs: {
      width: 1
    },
  },
  tooltip: {
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function formatter(val) {
          return '';
        }
      }
    }
  }
}

new ApexCharts(document.querySelector("#spark1"), spark1).render();
new ApexCharts(document.querySelector("#spark2"), spark2).render();
new ApexCharts(document.querySelector("#spark3"), spark3).render();
new ApexCharts(document.querySelector("#spark4"), spark4).render();


// var parameter1 = document.currentScript.dataset.parameter1
// var parameter2 = document.currentScript.dataset.parameter2
// var parameter3 = document.currentScript.dataset.parameter3
// console.log(parameter1, parameter2,parameter3);

var optionsLine = {
  chart: {
    height: 328,
    type: 'line',
    zoom: {
      enabled: true,
      autoScaleYaxis: true
    },
    toolbar: {
      autoSelected: 'zoom'
    },
    dropShadow: {
      enabled: true,
      top: 3,
      left: 2,
      blur: 4,
      opacity: 1,
    }
  },
  stroke: {
    curve: 'smooth',
    width: 2
  },
  //colors: ["#3F51B5", '#2196F3'],
  series: [{
      name: "Thực tế",
      data: parameter3 // giá trị thực tế
    },
    {
      name: "Linear Regression",
      data: parameter2 // kết quả dự đoán của mô hình 1
    },
    {
      name: "Decision Tree",
      data: parameter4// kết quả dự đoán của mô hình 2
    }
  ],
  title: {
    text: 'Number of Comments',
    align: 'left',
    offsetY: 25,
    offsetX: 20
  },
  // subtitle: {
  //   text: 'Statistics',
  //   offsetY: 55,
  //   offsetX: 20
  // },
  markers: {
    size: 6,
    strokeWidth: 0,
    hover: {
      size: 9
    }
  },
  grid: {
    show: true,
    padding: {
      bottom: 0
    }
  },
  labels: parameter1,
  xaxis: {
    tooltip: {
      enabled: false
    }
  },
  yaxis:{
    labels: {
      formatter: function(value) {
        return value.toFixed(2);
      }
    }
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    offsetY: -20
  }
}

var chartLine = new ApexCharts(document.querySelector('#line-adwords'), optionsLine);
chartLine.render();

// Zoomable line chart
var options2 = {
  series: [{
  name: 'series1',
  data: parameter3
}, {
  name: 'series2',
  data: parameter2
}],
  chart: {
  height: 350,
  type: 'area'
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'smooth'
},
xaxis: {
  type: 'datetime',
  categories: parameter1
},
yaxis:{
  labels: {
    formatter: function(value) {
      return value.toFixed(2);
    }
  }
},
tooltip: {
  x: {
    format: 'dd/MM/yy HH:mm'
  },
},
};

var chart = new ApexCharts(document.querySelector("#radialBarBottom"), options2);
chart.render();


//Circle chart
// var optionsCircle4 = {
//   chart: {
//     type: 'radialBar',
//     height: 350,
//     width: 380,
//   },
//   plotOptions: {
//     radialBar: {
//       size: undefined,
//       inverseOrder: true,
//       hollow: {
//         margin: 5,
//         size: '48%',
//         background: 'transparent',

//       },
//       track: {
//         show: false,
//       },
//       startAngle: -180,
//       endAngle: 180

//     },
//   },
//   stroke: {
//     lineCap: 'round'
//   },
//   series: [71, 63, 77],
//   labels: ['June', 'May', 'April'],
//   legend: {
//     show: true,
//     floating: true,
//     position: 'right',
//     offsetX: 70,
//     offsetY: 240
//   },
// }

// var chartCircle4 = new ApexCharts(document.querySelector('#radialBarBottom'), optionsCircle4);
// chartCircle4.render();


// var optionsBar = {
//   chart: {
//     height: 380,
//     type: 'bar',
//     stacked: true,
//   },
//   plotOptions: {
//     bar: {
//       columnWidth: '30%',
//       horizontal: false,
//     },
//   },
//   series: [{
//     name: 'PRODUCT A',
//     data: [14, 25, 21, 17, 12, 13, 11, 19]
//   }, {
//     name: 'PRODUCT B',
//     data: [13, 23, 20, 8, 13, 27, 33, 12]
//   }, {
//     name: 'PRODUCT C',
//     data: [11, 17, 15, 15, 21, 14, 15, 13]
//   }],
//   xaxis: {
//     categories: ['2011 Q1', '2011 Q2', '2011 Q3', '2011 Q4', '2012 Q1', '2012 Q2', '2012 Q3', '2012 Q4'],
//   },
//   fill: {
//     opacity: 1
//   },

// }

// var chartBar = new ApexCharts(
//   document.querySelector("#barchart"),
//   optionsBar
// );

// chartBar.render();

//Area chart
var optionsArea = {
  chart: {
    height: 380,
    type: 'area',
    stacked: false,
  },
  zoom: {
    enabled: true,
    autoScaleYaxis: true
  },
  toolbar: {
    autoSelected: 'zoom'
  },
  stroke: {
    curve: 'straight'
  },
  series: [{
      name: "Thực tế",
      data: parameter3
    },
    {
      name: "Linear Regression",
      data: parameter2
    },
    {
      name: "Decision Tree",
      data: parameter4
    }
  ],
  xaxis: {
    categories: parameter1,
  },
  yaxis:{
    labels: {
      formatter: function(value) {
        return value.toFixed(2);
      }
    }
  },
  tooltip: {
    followCursor: true
  },
  fill: {
    opacity: 1,
  },

}

var chartArea = new ApexCharts(
  document.querySelector("#areachart"),
  optionsArea
);
chartArea.render();


//realtime chart
var options3 = {
    series: [{
    data: parameter1.slice()
  }],
    chart: {
    id: 'realtime',
    height: 350,
    type: 'line',
    animations: {
      enabled: true,
      easing: 'linear',
      dynamicAnimation: {
        speed: 1000
      }
    },
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  title: {
    text: 'Dynamic Updating Chart',
    align: 'left'
  },
  markers: {
    size: 0
  },
  xaxis: {
    type: 'datetime',
    range: XAXISRANGE,
  },
  yaxis: {
    max: 100,
    labels: {
      formatter: function(value) {
        return value.toFixed(2);
      }
    }
  },
  legend: {
    show: false
  },
};

var chartrealtime = new ApexCharts(document.querySelector("#realtime-chart"), options3);
chartrealtime.render();

window.setInterval(function () {
getNewSeries(lastDate, {
  min: 10,
  max: 90
})

chartrealtime.updateSeries([{
  data: data
}])
}, 1000)