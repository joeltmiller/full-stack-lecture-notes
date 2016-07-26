angular.module('meanApp', []);

angular.module('meanApp').controller('IndexController', ['$http', function($http){
  var vm = this;

  vm.cat = {}; //Initialize text input
  vm.cats = [];

  var fetchCats = function(){
    $http.get('/cats').then(function(response){
      vm.cat = {}; //Clear out once officially saved
      vm.cats = response.data;
    });
  };

  vm.add = function(cat){
    console.log('sending cat', cat);
    $http.post('/add', cat).then(fetchCats);
  }

  fetchCats(); //Page loads
}]);
