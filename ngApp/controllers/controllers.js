"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var productsapp;
(function (productsapp) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController(productService) {
                this.productService = productService;
                this.products = productService.list();
            }
            HomeController.prototype.save = function () {
                var _this = this;
                this.productService.save(this.product).then(function () {
                    _this.products = _this.productService.list();
                    _this.product = null;
                });
            };
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        constructor(private, productService, productsapp.Services.ProductService, private, $state, ng.ui.IStateService, private, $stateParams, ng.ui.IStateParamsService);
        {
            var productId = $stateParams['id'];
            this.product = productService.get(productId);
        }
    })(Controllers = productsapp.Controllers || (productsapp.Controllers = {}));
})(productsapp || (productsapp = {}));
var AboutController = (function () {
    function AboutController() {
        this.message = 'Hello from the about page!';
    }
    return AboutController;
}());
exports.AboutController = AboutController;
