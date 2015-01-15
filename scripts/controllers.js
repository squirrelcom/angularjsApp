
var ModuleController = angular.module('ModuleController', []);

function ListCtrl($scope, $http) {
        $http.get('https://api.github.com/users').success(function (data) {
            $scope.users = data;
        });      

    //bootstrap javascript affix property for the search box

       jQuery('.search-box').affix({
            offset: {
                top: function () {
                    return (this.top = jQuery('.jumbotron').outerHeight(true))
                }
            }
        })


}

function ListCtrlDetail($location, $scope, $http) {

    //manual remove the modal from search page
    jQuery('.modal-backdrop').remove(".modal-backdrop");
    jQuery('body').removeClass("modal-open");

    //find the details of the user that was clicked
    var userlocation = $location.path();
    $http.get('https://api.github.com' + userlocation).success(function (data) {
        $scope.users = data;

        //table for user data
        var table_obj = jQuery('#userDetails > tbody');
        jQuery.each(data, function (index, item) {
            var tdata_1 = jQuery('<tr><td>' + index + '</td>' + '<td>' + item + '</td></tr>');
            table_obj.append(tdata_1);
        })


    });
}

ModuleController.controller('ListCtrl', ['$scope', '$http', ListCtrl]);
ModuleController.controller('ListCtrlDetail', ['$location', '$scope', '$http', ListCtrlDetail]);