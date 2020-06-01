var ctx = document.getElementById('c3-grafica-1');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['', '', '', '', '', '', '', '', '', '', ''],
        datasets: [{
            data: [3844, 3855, 3841, 3867, 3822, 3843, 3821, 3841, 3856, 3827, 3843],
            backgroundColor: [
                'rgba(114, 124, 245, 0.85)',
                'rgba(114, 124, 245, 0.85)',
                'rgba(114, 124, 245, 0.85)',
                'rgba(114, 124, 245, 0.85)',
                'rgba(114, 124, 245, 0.85)',
                'rgba(114, 124, 245, 0.85)',
                'rgba(114, 124, 245, 0.85)',
                'rgba(114, 124, 245, 0.85)',
                'rgba(114, 124, 245, 0.85)',
                'rgba(114, 124, 245, 0.85)',
                'rgba(114, 124, 245, 0.85)',
            ],
            
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: false
                }
            }]
        }
    }
});
var ctx = document.getElementById('c3-grafica-2');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['', '', '', '', '', '', '', '', '', '', ''],
        datasets: [{
            data: [36, 77, 52, 90, 74, 35, 55, 23, 47, 10, 63],
            backgroundColor: [
                'rgba(114, 124, 245, 0.85)',
                'rgba(114, 124, 245, 0.85)',
                'rgba(114, 124, 245, 0.85)',
                'rgba(114, 124, 245, 0.85)',
                'rgba(114, 124, 245, 0.85)',
                'rgba(114, 124, 245, 0.85)',
                'rgba(114, 124, 245, 0.85)',
                'rgba(114, 124, 245, 0.85)',
                'rgba(114, 124, 245, 0.85)',
                'rgba(114, 124, 245, 0.85)',
                'rgba(114, 124, 245, 0.85)',
            ],
            
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
var ctx = document.getElementById('c3-grafica-3');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['', '', '', '', '', '', '', '', '', '', ''],
        datasets: [{
            data: [41, 45, 44, 46, 52, 54, 43, 74, 82, 82, 89],
            backgroundColor: [
                'rgba(114, 124, 245, 0.85)',
                'rgba(114, 124, 245, 0.85)',
                'rgba(114, 124, 245, 0.85)',
                'rgba(114, 124, 245, 0.85)',
                'rgba(114, 124, 245, 0.85)',
                'rgba(114, 124, 245, 0.85)',
                'rgba(114, 124, 245, 0.85)',
                'rgba(114, 124, 245, 0.85)',
                'rgba(114, 124, 245, 0.85)',
                'rgba(114, 124, 245, 0.85)',
                'rgba(114, 124, 245, 0.85)',
            ],
            
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: false
                }
            }]
        }
    }
});