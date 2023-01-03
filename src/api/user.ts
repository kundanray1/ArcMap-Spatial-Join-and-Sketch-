import Resource from 'api/resource';

class UserResource extends Resource {
  constructor() {
    super('users');
  }
}

export { UserResource as default };
