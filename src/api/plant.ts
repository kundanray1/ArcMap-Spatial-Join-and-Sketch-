import Resource from 'api/resource';
import http from 'utils/http';

class PlantResource extends Resource {
  constructor() {
    super('plants');
  }

  bulkDelete(resource: any) {
    return http({
      url: '/bulk-destroy/plants',
      method: 'post',
      data: resource,
    });
  }
}

export { PlantResource as default };
