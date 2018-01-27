import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostsService {
  private baseUrl = 'http://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getPosts(pageNumber: number = 1) {
    return this.http.get(this.baseUrl + '/posts', {
      params: {
        '_page': pageNumber.toString(),
      },
    });
  }
}
