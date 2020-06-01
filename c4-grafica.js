
    var ctx = document.getElementById('c4-myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'March', 'Apr', 'May', 'June',"Jul","Agust" ],
            datasets: [{
                data: [12, 5, 30, 5, 80, 3,60,5],
                lineTension:[0],
               borderColor: [
                    'rgba(190, 129, 247, 1)',
                   
                ],
                borderWidth: 2
            }]
        },
        options: {
            legend:{
                display:false
            },
            scales: {
                yAxes:
                 [{gridLines:{
                     color:"rgba(100, 113, 139, .2)"
                 },
                    ticks: {
                        beginAtZero:true,
                        stepSize:20
                    }
                }],
                xAxes:
                [{gridLines:{
                    color:"rgba(100, 113, 139, .2)"
                },
                  
               }]
            }
        }
    });
    