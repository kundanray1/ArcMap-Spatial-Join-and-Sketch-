import Resource from 'api/resource';
import http from 'utils/http';

class PitResource extends Resource {
  constructor() {
    super('pits');
  }

  bulkDelete(resource: any) {
    return http({
      url: '/bulk-destroy/pits',
      method: 'post',
      data: resource,
    });
  }
}

export { PitResource as default };
