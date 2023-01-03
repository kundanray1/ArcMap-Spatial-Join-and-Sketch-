import http from 'utils/http';

/**
 * Simple REST resource class
 */
class Resource {
  uri: string;

  constructor(uri: string) {
    this.uri = uri;
  }

  list(query?: any) {
    return http({
      url: '/' + this.uri,
      method: 'get',
      params: query,
    });
  }

  get(id: any) {
    return http({
      url: '/' + this.uri + '/' + id,
      method: 'get',
    });
  }
  store(resource: any, headers?: any) {
    return http({
      url: '/' + this.uri,
      method: 'post',
      data: resource,
      headers: headers,
    });
  }
  update(id: any, resource: any) {
    return http({
      url: '/' + this.uri + '/' + id,
      method: 'put',
      data: resource,
    });
  }
  destroy(id: any) {
    return http({
      url: '/' + this.uri + '/' + id,
      method: 'delete',
    });
  }
}

export { Resource as default };
