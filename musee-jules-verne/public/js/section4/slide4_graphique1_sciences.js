var ctx = document.getElementById('slide4_graphique1_sciences');

var slide4_graphique1_sciences = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'],
    datasets: [
      {
        label: 'Articles collectés' ,
        data: [80,74,23,161,120,231,271,416,158,254,229],
        borderColor: '#0972ff',
        lineTension: 0.3,
        pointColor: '#0972ff',
        pointRadius: 4,
        pointBackgroundColor: '#0972ff',
        pointBorderColor: 'white',
        fill: false,
      }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,

    tooltips: {//personnalistion des bulles d'informations
      enabled: true,
      position: 'nearest',
        cornerRadius: 4,
        caretSize: 0,//taille de la flèche
        xPadding: 16,
        yPadding: 16,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        titleFontStyle: 'bold',//gestion du titre
        titleMarginBottom: 15,
        titleFontColor: 'black',
        bodyFontColor: 'black',//gestion du texte
        displayColors: false,
      },

    title: {
      display: true,
      text: "Nombre d’articles collectés",
      position: 'bottom',
    },

    legend: {
      display: false,
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },

    scales: {
      yAxes: [{
        beginAtZero:true,
        gridLines: {
          lineWidth: 0.5,
          color: "rgba(9,114,255,0.5)",
          borderDash: [4,2],
        },
          ticks: {
            max:1400, //Force l'échelle à s'arrêter à 1400
          },
      }],
      xAxes: [{
        gridLines: {
          lineWidth: 0.5,
          color: "rgba(9,114,255,0.5)",
          borderDash: [4,2],
        },
      }],
    }
  }
});
