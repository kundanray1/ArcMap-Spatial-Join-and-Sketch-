import Resource from 'api/resource';

class CompanyResource extends Resource {
  constructor() {
    super('companies');
  }
}

export { CompanyResource as default };
