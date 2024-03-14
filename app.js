var app = angular.module('MitarbeiterEintritt', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'form1.html',
            controller: 'Form1Controller'
        })
        .when('/form2', {
            templateUrl: 'form2.html',
            controller: 'Form2Controller'
        })
        .otherwise({
            redirectTo: '/'
        });
});

app.controller('Form1Controller', function($scope, $location) {
    $scope.request = {
        mitarbeiterVorname: '',
        mitarbeiterNachname: '',
        mitarbeiterStrasse: '',
        mitarbeiterHausnummer: '',
        mitarbeiterPlz: '',
        mitarbeiterWohnort: '',
        mitarbeiterTelefon: '',
        mitarbeiterMobilrufnummer: '',
        abteilung: '',
        position: '',
        gehalt: '',
        krankenkasseName: '',
        krankenkasseNummer: '',
        sozialversicherungsnummer: '',
        rentenversicherungsnummer: '',
        eintrittsdatum: '',
        probezeit: ''
    };

    $scope.gehAufSeite2 = function() {
        $location.path('/form2');
    };
});

app.controller('Form2Controller', function($scope, $location) {
    $scope.request = {};
    $scope.probezeitOptionen = ['1 Monat', '2 Monate', '3 Monate', '6 Monate'];

    $scope.goBackToForm1 = function() {
        $location.path('/');
    };

    $scope.submitRequest = function() {
        // Hier kannst du die Daten des Formulars verarbeiten und an den Server senden
        console.log($scope.request);
    };
});