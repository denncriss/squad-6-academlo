    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Sales',
                data: [150, 110, 90, 115, 125, 160, 190, 140, 100, 110, 120, 120],
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
                    'rgba(114, 124, 245, 0.85)',
                ],
                borderColor: [
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
                    'rgba(114, 124, 245, 0.85)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    gridLines: {
                        display: true,
                        color: "rgba(100, 113, 139, .2)"
                    },

                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });