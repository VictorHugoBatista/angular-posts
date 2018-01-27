import { Injectable } from '@angular/core';

@Injectable()
export class PostsService {
  getPosts() {
    console.log('getPosts');
    return [];
  }
}
