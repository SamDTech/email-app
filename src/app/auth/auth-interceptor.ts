import {Injectable} from '@angular/core';
import {HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest,} from '@angular/common/http';
import {Observable} from 'rxjs';
import {filter, tap} from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const modifiedReq = req.clone({
      withCredentials: true,
    });
    return next.handle(modifiedReq)
    // .pipe(
    //   filter(value => value.type === HttpEventType.Sent),
    //   tap((value) => {
    //     console.log('sent the request')
    //   })
    // );
  }
}
