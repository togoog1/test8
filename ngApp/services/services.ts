namespace productsapp.Services {

  export class ProductService {
      private ProductResource;

      public list() {
        return this.ProductResource.query()
      }

      public save(product) {
        return this.ProductResource.save(product).$promise;
      }

      constructor($resource:ng.resource.IResourceService) {
        this.ProductResource = $resource('/api/products');
      }

  }

  angular.module('productsapp').service('productService', ProductService);

}
