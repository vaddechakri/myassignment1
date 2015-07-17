function validationCtrl($scope) {
   var validUsername = "Chakradhar";
   var validEmail = "chakradhar.vadde@gmail.com";
   var validPhone = "333-33-3333"
   
   $scope.reset = function(){
		$scope.username = validUsername;
		$scope.email = validEmail;
		$scope.phone=validPhone;
   }   
   
   $scope.checkData = function() {
		if ($scope.username != validUsername || $scope.email != validEmail || $scope.phone != validPhone) {
			alert("The data provided is not valid");
		} else {
			alert("form got submitted successfully!");
		}
	}
}