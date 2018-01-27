import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostsService {
  private baseUrl = 'http://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getPosts(pageNumber: number = 1): Observable<Object> {
    return this.http.get(this.baseUrl + '/posts', {
      params: {
        '_page': pageNumber.toString(),
      },
    });
  }
}
