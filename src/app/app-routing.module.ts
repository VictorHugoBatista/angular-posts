import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPostsComponent } from './list-posts/list-posts.component';
import { SinglePostComponent } from './single-post/single-post.component';

const routes: Routes = [
  { path: '', component: ListPostsComponent },
  { path: 'posts', component: ListPostsComponent },
  { path: 'post/:id', component: SinglePostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
