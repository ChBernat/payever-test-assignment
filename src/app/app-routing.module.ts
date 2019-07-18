import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

export const routes: Routes = [
{
  path: '',
  redirectTo: 'users',
  pathMatch: 'full'
},
{
  path: 'users',
  // loadChildren: () => import('../modules/users-list/users-list.module').then(mod => mod.UsersListModule)
  loadChildren: '../modules/users-list/users-list.module#UserListModule'
},
{
  path: 'user',
  loadChildren: '../modules/user/user.module#UserModule'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
