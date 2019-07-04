import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { CoreModule } from '../core';
import { UsersResolver } from './resolvers';
import { PaginationResolver } from './resolvers/pagination.resolver';

import { UsersListRoutingModule } from './users-list-routing.module';
import { UsersListComponent } from './components/users-list/users-list.component';

@NgModule({
  declarations: [UsersListComponent],
  imports: [
    CommonModule,
    CoreModule.forRoot(),
    UsersListRoutingModule,
    MatPaginatorModule,
    MatTableModule
  ],
  providers: [
    UsersResolver,
    PaginationResolver
  ]
})
export class UsersListModule { }
