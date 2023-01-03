import Resource from 'api/resource';
import http from 'utils/http';

class ProductResource extends Resource {
  constructor() {
    super('products');
  }

  bulkDelete(resource: any) {
    return http({
      url: '/bulk-destroy/products',
      method: 'post',
      data: resource,
    });
  }
}

export { ProductResource as default };
