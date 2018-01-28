import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.scss']
})
export class ListPostsComponent implements OnInit {

  private posts;
  private _searchText = '';
  private pageNumber: number;

  constructor(private postsService: PostsService) {}

  set searchText(searchText: string) {
    this._searchText = searchText;
    this.updateList(true);
  }

  ngOnInit() {
    this.updateList(true);
  }

  updateList(overwriteList: boolean = false) {
    if (overwriteList) {
      this.pageNumber = 0;
    }
    this.postsService
      .getPosts(this._searchText, ++this.pageNumber)
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
