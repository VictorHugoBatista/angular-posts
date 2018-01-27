import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {
  public postId: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.postId = +(this.route.snapshot.paramMap.get('id'));
  }

}
