import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';


@Injectable()
export class AppResolveGuardService implements Resolve<any> {

  constructor(private http: Http) {};

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let parameters = { action: 'getSessionByToken', data: { token: 'dsadsada' }};
    return this.http.get('http://127.0.0.1:4444/api')
      .map((response: Response) => {
        return response;
      })
      .take(1);
  }

}
