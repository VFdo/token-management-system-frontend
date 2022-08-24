import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class Auth implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (sessionStorage.getItem('username') && sessionStorage.getItem('token')) {
            req = req.clone({
              setHeaders: {
                Authorization: sessionStorage.getItem('token')?? 'unauthorized'
              }
            })
          }
          return next.handle(req);
    }
}

