import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AngprojInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

        let commonUrl = 'https://angular-profile-a5545-default-rtdb.firebaseio.com/users.json'
        console.log(request)
        const newRequest = request.clone({
          url:commonUrl + request.url
        })

    return next.handle(newRequest);
  }
}
