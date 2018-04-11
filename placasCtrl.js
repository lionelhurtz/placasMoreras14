// Code goes here
app.controller("myController", ['$scope', "$http", function($scope, $http) {
  $scope.getWeather = function() {
    //$http.get("http://api.openweathermap.org/data/2.5/weather?q=" + $scope.city +",es&appid=c7fe9755da32332e2d12228c96deb11b").then(function(response) {
    $http.get("https://www.vbus.net/api/v3/data/scheme/1087").then(function(response) {

      var listaDatos = response.data;
      for (i = 0; i < listaDatos.length; i++) {
          if(listaDatos[i].field_identifier === "006_2_0" && listaDatos[i].header_identifier === "01_0010_7421_0100") {
            $scope.tempRecirculacion = listaDatos[i];
            $scope.tempRecirculacion.unit = listaDatos[i].unit.trim();
          }
          if(listaDatos[i].field_identifier === "" && listaDatos[i].header_identifier === "01_0010_7421_0100") {
            $scope.bombaRecirculacion = listaDatos[i];
          }
          if(listaDatos[i].field_identifier === "000_2_0" && listaDatos[i].header_identifier === "01_0010_7421_0100") {
            $scope.tempCaptadores = listaDatos[i];
            $scope.tempCaptadores.unit = listaDatos[i].unit.trim();
          }
          if(listaDatos[i].field_identifier === "" && listaDatos[i].header_identifier === "01_0010_7421_0100") {
            $scope.bombaPrimario = listaDatos[i];
          }
          if(listaDatos[i].field_identifier === "004_2_0" && listaDatos[i].header_identifier === "01_0010_7421_0100") {
            $scope.tempDeposito2 = listaDatos[i];
          }
          if(listaDatos[i].field_identifier === "002_2_0" && listaDatos[i].header_identifier === "01_0010_7421_0100") {
            $scope.tempDeposito1 = listaDatos[i];
          }
          if(listaDatos[i].field_identifier === "010_2_0" && listaDatos[i].header_identifier === "01_0010_7421_0100") {
            $scope.tempLiquidoRefrigerante = listaDatos[i];
          }

          if(listaDatos[i].field_identifier === "054_2_0" && listaDatos[i].header_identifier === "01_0010_7421_0100") {
            $scope.horaDatos = listaDatos[i];
          }
          if(listaDatos[i].field_identifier === "056_4_0" && listaDatos[i].header_identifier === "01_0010_7421_0100") {
            $scope.diaDatos = listaDatos[i];
          }
          if(listaDatos[i].field_identifier === "012_2_0" && listaDatos[i].header_identifier === "01_0010_7421_0100") {
            $scope.presionPrimario = listaDatos[i];
          }
          if(listaDatos[i].field_identifier === "" && listaDatos[i].header_identifier === "01_0010_7421_0100") {
            $scope.refrigeracionAcumulador = listaDatos[i];
          }
          if(listaDatos[i].field_identifier === "" && listaDatos[i].header_identifier === "01_0010_7421_0100") {
            $scope.refrigeracionCaptador = listaDatos[i];
          }
      }
    });
  };
  $scope.getWeather();

}]);


angular.module("app", ["chart.js"]).controller("LineCtrl", function ($scope) {

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
});
