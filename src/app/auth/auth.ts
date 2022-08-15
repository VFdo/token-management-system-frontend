import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class Auth implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        if (sessionStorage.getItem('username') && sessionStorage.getItem('token')) {
            req = req.clone({
              setHeaders: {
                Authorization: sessionStorage.getItem('token')?? 'unauthorixzed'
              }
            })
          }
          return next.handle(req);
    }
}

