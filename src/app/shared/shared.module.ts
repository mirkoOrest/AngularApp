import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {QuillModule} from 'ngx-quill';
import {PostService} from './post.service';
import {AuthInterceptor} from './auth.interceptor';

@NgModule({
  imports: [
    HttpClientModule,
    QuillModule.forRoot()
  ],
  exports: [
    HttpClientModule,
    QuillModule
  ],

  providers: [PostService]
})
export class SharedModule { }
