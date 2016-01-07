var main_controller = function($scope){
  $scope.users = [
    {"name": "Tamura", "score": 60},
    {"name": "Suzuki", "score": 80},
    {"name": "Murata", "score": 40},
    {"name": "Kawasaki", "score": 20},
    {"name": "Shimizu", "score": 90},
    {"name": "Saito", "score": 70},
    {"name": "Takahashi", "score": 10},
    {"name": "Inoue", "score": 50},
    {"name": "Yamanaka", "score": 30},
  ];
  $scope.today = new Date();
  $scope.addUser = function(){
  };
}