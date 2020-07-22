import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostService} from '../../shared/post.service';
import {Post} from '../../shared/intarfaces';
import {Subscription} from 'rxjs';
import {AlertService} from '../shared/services/alert.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  pSub: Subscription;
  dSub: Subscription;
  searchStr = '';

  constructor(
    private postsService: PostService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.pSub = this.postsService.getAll().subscribe( posts => {
        this.posts = posts;
    });
  }

  remove(id: string) {
    this.dSub = this.postsService.remove(id).subscribe(() => {
      this.posts = this.posts.filter( post => post.id !== id);
      this.alertService.danger('post was removed');
    });
  }

  ngOnDestroy(): void {
    if (this.pSub) {
      this.pSub.unsubscribe();
    }
    if (this.dSub) {
      this.dSub.unsubscribe();
    }
  }


}
