import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.scss']
})
export class ListPostsComponent implements OnInit {

  private posts;
  private pageNumber = 0;

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.updateList(true);
  }

  updateList(overwriteList: boolean = false) {
    this.postsService.getPosts(++this.pageNumber)
      .subscribe(data => {
        if (overwriteList) {
          this.posts = data;
          return;
        }
        for (const item in data) {
          if ('undefined' !== typeof data[item]) {
            this.posts.push(data[item]);
          }
        }
      });
  }
}
