import { ModuleWithProviders, NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { ApiService, PaginationApiService } from './services';
import {CachingInterceptor} from './interceptors/request-cache.interceptor';
import {RequestCacheService} from './services/request-cache.service';

@NgModule({
  imports: [
    HttpClientModule
  ],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    console.log('CoreModule created');
    return {
      ngModule: CoreModule,
      providers: [
        ApiService,
        PaginationApiService,
        RequestCacheService,
    { provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true }
      ]
    };
  }
}
