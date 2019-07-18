import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {first, map} from 'rxjs/operators';
import {UserInterface} from '../../../interfaces';
import {PaginationApiService} from './pagination-api.service';
import {PaginationInterface} from '../../../interfaces/pagination.interfaces';



interface IFetchUsersResponse extends PaginationInterface {
  data: Array<UserInterface>;
}

interface ISingleUserResponse {
  data: UserInterface;
}


@Injectable({
 providedIn: 'root',})
export class ApiService {

  constructor(private http: HttpClient, private paginationApiService: PaginationApiService) {
  }

  fetchUsers(page): Observable<Array<UserInterface>> {
    return this.http.get<IFetchUsersResponse>('https://reqres.in/api/users?page=' + page)
      .pipe(map((response) => response.data), first());
  }

  fetchPaginationInfo(): Observable<any> {
    return this.paginationApiService.fetchPaginationInfo().pipe(first());
  }

  fetchUserById(id: number): Observable<UserInterface> {
    return this.http.get<ISingleUserResponse>(`https://reqres.in/api/users/${id}`)
      .pipe(map(response => response.data), first());
  }

}
