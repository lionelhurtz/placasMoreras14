// Code goes here
app.controller("myController", ['$scope', "$http", function($scope, $http) {
  $scope.getWeather = function() {
    //$http.get("http://api.openweathermap.org/data/2.5/weather?q=" + $scope.city +",es&appid=c7fe9755da32332e2d12228c96deb11b").then(function(response) {
    $http.post("https://www.vbus.net/api/v4/diagram",{"encrypted_id":"c170f5650ed0b30b21af28a1d3f8424b"}).then(function(response) {

    var listaDatos = response.data;
	  console.log(listaDatos);
	  var fecha = new Date(listaDatos.series[0].data[listaDatos.series[0].data.length-1][0]);
    $scope.fecActu = fecha;
    //Calculamos el tiempo que tenemos datos:
    var tiempo = (listaDatos.series[0].data[listaDatos.series[0].data.length-1][0] - listaDatos.series[0].data[0][0])
    restoSeg = tiempo%60000;
    restoMin= (tiempo-restoSeg)%3600000;
    $scope.tiempoDatos= ((tiempo - restoMin-restoSeg)/3600000)+' horas '+(restoMin/60000)+' minutos '+(restoSeg/1000).toFixed(0)+' segundos';
	  //captadores
	  $scope.tempCaptadores = new Object();
    $scope.tempCaptadores.name = listaDatos.series[0].name;
    $scope.tempCaptadores.value = listaDatos.series[0].data[listaDatos.series[0].data.length-1][1];
    $scope.tempCaptadores.timestamp = listaDatos.series[0].data[listaDatos.series[0].data.length-1][0];
	  $scope.tempCaptadores.unit = listaDatos.series[0].unitText.trim();
    //minimo y maximo
    var tempMin = new Object();
    var tempMax = new Object();
    tempMin.value = 100;
    tempMax.value = 0;
    for (i = 0; i < listaDatos.series[0].data.length; i++) {
        if(listaDatos.series[0].data[i][1]<tempMin.value) {
          tempMin.value = listaDatos.series[0].data[i][1];
          tempMin.timestamp = listaDatos.series[0].data[i][0];
        }
        if(listaDatos.series[0].data[i][1]>tempMax.value) {
          tempMax.value = listaDatos.series[0].data[i][1];
          tempMax.timestamp = listaDatos.series[0].data[i][0];
        }
    }
    $scope.tempCaptadores.tempMax = tempMax;
    $scope.tempCaptadores.tempMin = tempMin;

    if(listaDatos.series[5].data[listaDatos.series[5].data.length-1][0] >0) {
      $scope.bombaPrimario='on';
    } else {
      $scope.bombaPrimario='off';
    }
    // Calculamos la media
    var tempTotalCaptadores=0;
    var tiempoCalculadoCaptadores = ((listaDatos.series[0].data[listaDatos.series[0].data.length-1][0])-(listaDatos.series[0].data[0][0]))/3600000;
    for (i = 0; i < listaDatos.series[0].data.length; i++) {
      tempTotalCaptadores = tempTotalCaptadores + listaDatos.series[0].data[i][1];
    }
    $scope.tempCaptadores.tempMedia=(tempTotalCaptadores/listaDatos.series[0].data.length).toFixed(2);
    $scope.tempCaptadores.tiempoMedio=tiempoCalculadoCaptadores.toFixed(0);
    //tempDeposito1
    $scope.tempDeposito1 = new Object();
    $scope.tempDeposito1.name = listaDatos.series[1].name;
    $scope.tempDeposito1.value = listaDatos.series[1].data[listaDatos.series[1].data.length-1][1];
    $scope.tempDeposito1.timestamp = listaDatos.series[1].data[listaDatos.series[1].data.length-1][0];
    $scope.tempDeposito1.unit = listaDatos.series[1].unitText.trim();
    tempMin = new Object();
    tempMax = new Object();
    tempMin.value = 100;
    tempMax.value = 0;
    for (i = 0; i < listaDatos.series[1].data.length; i++) {
        if(listaDatos.series[1].data[i][1]<tempMin.value) {
          tempMin.value = listaDatos.series[1].data[i][1];
          tempMin.timestamp = listaDatos.series[1].data[i][0];
        }
        if(listaDatos.series[1].data[i][1]>tempMax.value) {
          tempMax.value = listaDatos.series[1].data[i][1];
          tempMax.timestamp = listaDatos.series[1].data[i][0];
        }
    }
    $scope.tempDeposito1.tempMax = tempMax;
    $scope.tempDeposito1.tempMin = tempMin;
    // Calculamos la media
    var tempTotald1=0;
    var tiempoCalculadod1 = ((listaDatos.series[1].data[listaDatos.series[1].data.length-1][0])-(listaDatos.series[1].data[0][0]))/3600000;
    for (i = 0; i < listaDatos.series[1].data.length; i++) {
      tempTotald1 = tempTotald1 + listaDatos.series[1].data[i][1];
    }
    $scope.tempDeposito1.tempMedia=(tempTotald1/listaDatos.series[1].data.length).toFixed(2);
    $scope.tempDeposito1.tiempoMedio=tiempoCalculadod1.toFixed(0);
    //tempDeposito2
    $scope.tempDeposito2 = new Object();
    $scope.tempDeposito2.name = listaDatos.series[2].name;
    $scope.tempDeposito2.value = listaDatos.series[2].data[listaDatos.series[2].data.length-1][1];
    $scope.tempDeposito2.timestamp = listaDatos.series[2].data[listaDatos.series[2].data.length-1][0];
    $scope.tempDeposito2.unit = listaDatos.series[2].unitText.trim();
    tempMin = new Object();
    tempMax = new Object();
    tempMin.value = 100;
    tempMax.value = 0;
    for (i = 0; i < listaDatos.series[2].data.length; i++) {
        if(listaDatos.series[2].data[i][1]<tempMin.value) {
          tempMin.value = listaDatos.series[2].data[i][1];
          tempMin.timestamp = listaDatos.series[2].data[i][0];
        }
        if(listaDatos.series[2].data[i][1]>tempMax.value) {
          tempMax.value = listaDatos.series[2].data[i][1];
          tempMax.timestamp = listaDatos.series[2].data[i][0];
        }
    }
    $scope.tempDeposito2.tempMax = tempMax;
    $scope.tempDeposito2.tempMin = tempMin;
    // Calculamos la media
    var tempTotald2=0;
    var tiempoCalculadod2 = ((listaDatos.series[2].data[listaDatos.series[2].data.length-1][0])-(listaDatos.series[2].data[0][0]))/3600000;
    for (i = 0; i < listaDatos.series[2].data.length; i++) {
      tempTotald2 = tempTotald2 + listaDatos.series[2].data[i][1];
    }
    $scope.tempDeposito2.tempMedia=(tempTotald2/listaDatos.series[2].data.length).toFixed(2);
    $scope.tempDeposito2.tiempoMedio=tiempoCalculadod2.toFixed(0);
    //Temperatura recirculación
    $scope.tempRecirculacion = new Object();
    $scope.tempRecirculacion.name = listaDatos.series[3].name;
    $scope.tempRecirculacion.value = listaDatos.series[3].data[listaDatos.series[3].data.length-1][1];
    $scope.tempRecirculacion.timestamp = listaDatos.series[3].data[listaDatos.series[3].data.length-1][0];
    $scope.tempRecirculacion.unit = listaDatos.series[3].unitText.trim();
      //minimo y maximo
    tempMin = new Object();
    tempMax = new Object();
    tempMin.value = 100;
    tempMax.value = 0;
    for (i = 0; i < listaDatos.series[3].data.length; i++) {
        if(listaDatos.series[3].data[i][1]<tempMin.value) {
          tempMin.value = listaDatos.series[3].data[i][1];
          tempMin.timestamp = listaDatos.series[3].data[i][0];
        }
        if(listaDatos.series[3].data[i][1]>tempMax.value) {
          tempMax.value = listaDatos.series[3].data[i][1];
          tempMax.timestamp = listaDatos.series[3].data[i][0];
        }
    }
    $scope.tempRecirculacion.tempMax = tempMax;
    $scope.tempRecirculacion.tempMin = tempMin;

    if(listaDatos.series[6].data[listaDatos.series[6].data.length-1][0] >0) {
      $scope.bombaRecirculacion='on';
    } else {
      $scope.bombaRecirculacion='off';
    }
    //calculamos el tiempo que está encendida la bomba de Recirculación
    var tiempoBombaRecirculacion = 0;
    for (i = 1; i < listaDatos.series[6].data.length; i++) {
      if(listaDatos.series[6].data[i][1] >0 ) {
        var tiempo = listaDatos.series[6].data[i][0]-listaDatos.series[6].data[i-1][0];
        tiempoBombaRecirculacion = tiempoBombaRecirculacion+tiempo;
      }
    }
    restoSeg = tiempoBombaRecirculacion%60000;
    restoMin= (tiempoBombaRecirculacion-restoSeg)%3600000;
    $scope.bombaRecirculacionTiempoOn= ((tiempoBombaRecirculacion - restoMin-restoSeg)/3600000)+' horas '+(restoMin/60000)+' minutos '+(restoSeg/1000).toFixed(0)+' segundos';
    //calculamos el tiempo que está encendida la bomba Primaria
    var tiempoBombaPrimaria = 0;
    for (i = 1; i < listaDatos.series[5].data.length; i++) {
      if(listaDatos.series[5].data[i][1] >0 ) {
        var tiempo = listaDatos.series[5].data[i][0]-listaDatos.series[5].data[i-1][0];
        tiempoBombaPrimaria = tiempoBombaPrimaria+tiempo;
      }
    }
    restoSeg = tiempoBombaPrimaria%60000;
    restoMin= (tiempoBombaPrimaria-restoSeg)%3600000;
    $scope.bombaPrimariaTiempoOn= ((tiempoBombaPrimaria - restoMin-restoSeg)/3600000)+' horas '+(restoMin/60000)+' minutos '+(restoSeg/1000).toFixed(0)+' segundos';

    // Calculamos la media
    var tempTotalRecirculacion=0;
    var tiempoCalculadoRecirculacion = ((listaDatos.series[3].data[listaDatos.series[3].data.length-1][0])-(listaDatos.series[3].data[0][0]))/3600000;
    for (i = 0; i < listaDatos.series[3].data.length; i++) {
      tempTotalRecirculacion = tempTotalRecirculacion + listaDatos.series[3].data[i][1];
    }
    $scope.tempRecirculacion.tempMedia=(tempTotalRecirculacion/listaDatos.series[3].data.length).toFixed(2);
    $scope.tempRecirculacion.tiempoMedio=tiempoCalculadod2.toFixed(0);

    //Alertas
    var ahora = new Date();
    var ayer = ahora.setDate(ahora.getDate() - 1);
    if(fecha > ayer) {
      $scope.alerta= "N";
    } else {
      $scope.alerta= "S";
    }

    //Presión primario
    $scope.alertaPresion = false;
    $scope.presion = new Object();
    $scope.presion.name = listaDatos.series[4].name;
    $scope.presion.numAlertas = 0;
    $scope.presion.maxValue= 0;
    $scope.presion.minValue= 100;
    $scope.presion.value = listaDatos.series[4].data[listaDatos.series[4].data.length-1][1];
    $scope.presion.timestamp = listaDatos.series[4].data[listaDatos.series[4].data.length-1][0];
    $scope.presion.unit = listaDatos.series[4].unitCode;
    $scope.presion.inicioAlerta = 0;
    for (i = 0; i < listaDatos.series[4].data.length; i++) {
      if(listaDatos.series[4].data[i][1]>2.6){
        $scope.presion.finAlerta=listaDatos.series[4].data[i][0];
        $scope.presion.numAlertas++;
        if(listaDatos.series[4].data[i][1] > $scope.presion.maxValue) {
          $scope.alertaPresion= true;
          if($scope.presion.inicioAlerta ===0) {
            $scope.presion.inicioAlerta=listaDatos.series[4].data[i][0];
          }
          $scope.presion.maxValue=listaDatos.series[4].data[i][1];
          $scope.presion.maxValueTimestamp=listaDatos.series[4].data[i][0];
        }
      } else {
        if(listaDatos.series[4].data[i][1] < $scope.presion.maxValue) {
          $scope.presion.minValue= listaDatos.series[4].data[i][1];
          $scope.presion.minValueTimestamp=listaDatos.series[4].data[i][0];
        }
      }
    }
    });
  };
  $scope.getWeather();

  $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
  $scope.series = ['Series A', 'Series B'];
  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };
  $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
  $scope.options = {
    scales: {
      yAxes: [
        {
          id: 'y-axis-1',
          type: 'linear',
          display: true,
          position: 'left'
        },
        {
          id: 'y-axis-2',
          type: 'linear',
          display: true,
          position: 'right'
        }
      ]
    }
  };

}]);
