import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserInterface } from '../../../../interfaces';
import { ApiService } from '../../../core/services';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user$: Observable<UserInterface>;

  constructor(private apiService: ApiService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    const userId: number = this.activatedRoute.snapshot.params['id'];
    this.user$ = this.apiService.fetchUserById(userId);
  }

  back(): void {
    this.router.navigate(['./users']);
  }
}
