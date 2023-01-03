import Resource from 'api/resource';

class PeopleResource extends Resource {
  constructor() {
    super('people');
  }
}

export { PeopleResource as default };
