angular.module("chat").controller("chatCtrl", function($scope, $http){

	$scope.app = "Chat";
	$scope.contatos = [];
	$scope.operadoras = [
		{nome: "Oi", codigo: 14},
		{nome: "Vivo", codigo: 15},
		{nome: "Tim", codigo: 41}
	];

	var carregarContatos = function(){
		$http.get("http://104.197.78.115:80/contatos").success(function (data, status){
			console.log(data);
		});
	};

	$scope.adicionarContato = function(contato) {
		$scope.contatos.push(angular.copy(contato));
		delete $scope.contato;
	};
	$scope.apagarContatos = function(contatos) {
		$scope.contatos = contatos.filter(function(contato) {
			if (!contato.selecionado) return contato;
		});
	};
	$scope.isContatoSelecionado = function(contatos){
		return contatos.some(function(contato){
			return contato.selecionado;
		});
	};

	carregarContatos();
});