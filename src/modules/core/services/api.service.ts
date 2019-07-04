import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserInterface } from '../../../interfaces';
import { PaginationApiService } from './';


@Injectable()
export class ApiService {

  constructor(private http: HttpClient, private paginationApiService: PaginationApiService) {
  }

  fetchUsers(page): Observable<any> {
    return this.http.get('https://reqres.in/api/users?page=' + page).pipe(map(response => response.json().data));
  }

  fetchPaginationInfo(): Observable<any> {
    return this.paginationApiService.fetchPaginationInfo();
  }

  fetchUserById(id: number): Observable<UserInterface> {
    return this.http.get(`https://reqres.in/api/users/${id}`).pipe(map(response => response.json()));
  }

}
