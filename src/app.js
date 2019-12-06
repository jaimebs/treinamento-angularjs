angular
  .module("app", ["ngRoute", "controllers"])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "/src/page/home.html"
      })
      .when("/produto", {
        templateUrl: "/src/page/produto.html",
        controller: "ProdutoController"
      })
      .when("/empresa", {
        templateUrl: "/src/page/empresa.html",
        controller: "EmpresaController"
      })
      .otherwise({
        template: "<h1>Atenção</h1><p>Nenhum página encotrada! (404)</p>"
      });

    $locationProvider.hashPrefix("");
  });
