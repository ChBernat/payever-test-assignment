import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class PaginationApiService {

  constructor(private http: HttpClient) {
  }

  fetchPaginationInfo(): Observable<any> {
    return this.http.get('https://reqres.in/api/users?page=1').pipe(map(response => {
      return {
        total_pages: response.json().total_pages,
        per_page: response.json().per_page,
        total: response.json().total,
        page: response.json().page
      };
    }));
  }
}
