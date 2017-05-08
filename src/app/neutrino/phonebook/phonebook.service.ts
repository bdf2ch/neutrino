import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Division } from "../../models/division";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';


@Injectable()
export class PhonebookService {
  private divisions: Division[] = [];

  constructor(private http: Http) {};

  fetchAllDivisions(): Observable<Division[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let parameters = { action: 'getAllPhoneBookDivisions' };

    return this.http.post('http://127.0.0.1:4444/api', parameters, options)
      .map((response: Response) => {
        let body = response.json();
        let length = body.length;
        for (let i = 0; i < length; i++) {
          let division = new Division(body[i]);
          division._model.backup.setup(['parentId', 'title', 'shortTitle']);
          this.divisions.push(division);
        }
        return this.divisions;
      })
      .take(1);
  };


  addDivision(division: Division): Observable<Division> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let parameters = {
      action: 'addPhoneBookDivision',
      data: {
        parentId: division.parentId,
        title: division.title
      }
    };

    return this.http.post('http://127.0.0.1:4444/api', parameters, options)
      .map((response: Response) => {
        let body = response.json();
        let division = new Division(body);
        division._model.backup.setup(['parentId', 'title']);
        this.divisions.push(division);
        return division;
      })
      .take(1);
  };


  editDivision(division: Division): Observable<Division> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let parameters = {
      action: 'editPhoneBookDivisions',
      data: {
        id: division.id,
        parentId: division.parentId,
        title: division.title
      }
    };

    return this.http.post('127.0.0.1:4444/api', parameters, options)
      .map((response: Response) => {
        division._model.backup.setup(['parentId', 'title']);
        return division;
      })
      .take(1);
  };


  getAllDivisions(): Division[] {
    return this.divisions;
  };


  getDivisionById(id: number): Division|null {
    let length = this.divisions.length;
    for (let i = 0; i < length; i++) {
      if (this.divisions[i].id === id)
        return this.divisions[i];
    }
    return null;
  };

};
