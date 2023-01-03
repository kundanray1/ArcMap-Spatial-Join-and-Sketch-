import Resource from 'api/resource';

class InventoryResource extends Resource {
  constructor() {
    super('inventories');
  }
}

export { InventoryResource as default };
