import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.scss']
})
export class ListPostsComponent implements OnInit {

  private posts;

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.postsService.getPosts()
      .subscribe(data => this.posts = data);
  }

}
