(function () {
    'use strict';

    angular
        .module('app')
        .controller('Main', main);

    function main($uibModal) {
        var vm = this;
        //vm.food = 'pizza';
        vm.animationsEnabled = true;
        vm.open = function (size) {
            var modalInstance = $uibModal.open({
                animation: vm.animationsEnabled,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'Partials/NewAssetForm.html',
                controller:'ModalInstanceCtrl',
                controllerAs: 'vm',
                size: size
            });
        }
        //vm.close = function ()
        //{
        //    vm.dismiss({ $value: 'cancel' });
        //};
    }


})();

angular.module('app').controller('ModalInstanceCtrl', function ($uibModalInstance) {
    var $ctrl = this;
    //$ctrl.items = items;
    //$ctrl.selected = {
    //    item: $ctrl.items[0]
    //};

    $ctrl.ok = function () {
        $uibModalInstance.close($ctrl.selected.item);
    };

    $ctrl.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});