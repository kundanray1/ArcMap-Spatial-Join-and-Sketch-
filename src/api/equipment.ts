import Resource from 'api/resource';
import http from 'utils/http';

class EquipmentResource extends Resource {
  constructor() {
    super('equipments');
  }

  bulkDelete(resource: any) {
    return http({
      url: '/bulk-destroy/equipments',
      method: 'post',
      data: resource,
    });
  }
}

export { EquipmentResource as default };
