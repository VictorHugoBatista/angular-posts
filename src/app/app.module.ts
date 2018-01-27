import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { PostsService } from './posts.service';

import { AppComponent } from './app.component';
import { ListPostsComponent } from './list-posts/list-posts.component';
import { SinglePostComponent } from './single-post/single-post.component';


@NgModule({
  declarations: [
    AppComponent,
    ListPostsComponent,
    SinglePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
