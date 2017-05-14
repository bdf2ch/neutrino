import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Division } from "../../models/division";
import { Ats } from "../../models/ats";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';


@Injectable()
export class PhonebookService {
  private divisions: Division[] = [];
  private ats: Ats[] = [];

  constructor(private http: Http) {};

  /**
   * Получает все структурные подразделения с сервера
   * @returns {Observable<T>}
   */
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
          division._model.backup.setup(['parentId', 'title']);
          this.divisions.push(division);
        }
        return this.divisions;
      })
      .take(1);
  };


  /**
   * Получает все АТС с сервера
   * @returns {Observable<T>}
   */
  fetchAllAts(): Observable<Ats[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let parameters = { action: 'getAllAts' };

    return this.http.post('http://127.0.0.1:4444/api', parameters, options)
      .map((response: Response) => {
        let body = response.json();
        let length = body.length;
        for (let i = 0; i < length; i++) {
          let ats = new Ats(body[i]);
          ats._model.backup.setup(['parentId', 'type', 'title']);
          this.ats.push(ats);
        }
        return this.ats;
      })
      .take(1);
  };


  /**
   * Добавляет структурное подразделение
   * @param division {Division} - добавляемое структурное подразделение
   * @returns {Observable<T>}
   */
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


  /**
   * Добавляет АТС
   * @param ats {Ats} - добавляемая АТС
   * @returns {Observable<T>}
   */
  addAts(ats: Ats): Observable<Ats> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let parameters = {
      action: 'addAts',
      data: {
        parentId: ats.parentId,
        type: ats.type,
        title: ats.title
      }
    };

    return this.http.post('http://127.0.0.1:4444/api', parameters, options)
      .map((response: Response) => {
        let body = response.json();
        let ats = new Ats(body);
        ats._model.backup.setup(['parentId','type', 'title']);
        this.ats.push(ats);
        return ats;
      })
      .take(1);
  };


  /**
   * Сохраняет изменения в структурном подразделении
   * @param division {Division} - редакьтируемое структурное подразделение
   * @returns {Observable<T>}
   */
  editDivision(division: Division): Observable<Division> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let parameters = {
      action: 'editPhoneBookDivision',
      data: {
        id: division.id,
        parentId: division.parentId,
        title: division.title
      }
    };

    return this.http.post('http://127.0.0.1:4444/api', parameters, options)
      .map((response: Response) => {
        division._model.backup.setup(['parentId', 'title']);
        return division;
      })
      .take(1);
  };


  /**
   * Сохраняет изменения в АТС
   * @param ats {Ats} - редактируемая АТС
   * @returns {Observable<T>}
   */
  editAts(ats: Ats): Observable<Ats> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let parameters = {
      action: 'editAts',
      data: {
        id: ats.id,
        parentId: ats.parentId,
        type: ats.type,
        title: ats.title
      }
    };

    return this.http.post('http://127.0.0.1:4444/api', parameters, options)
      .map((response: Response) => {
        ats._model.backup.setup(['parentId', 'type', 'title']);
        return ats;
      })
      .take(1);
  };


  /**
   * Возвращает все структурные подразделения
   * @returns {Division[]}
   */
  getAllDivisions(): Division[] {
    return this.divisions;
  };


  /**
   * Возвращает все АТС
   * @returns {Ats[]}
   */
  getAllAts(): Ats[] {
    return this.ats;
  };


  /**
   * Возвращает структурное подразделение по идентификатору
   * @param id {number} - идентификатор структурного подразделения
   * @returns {Division}null}
   */
  getDivisionById(id: number): Division|null {
    let length = this.divisions.length;
    for (let i = 0; i < length; i++) {
      if (this.divisions[i].id === id)
        return this.divisions[i];
    }
    return null;
  };


  /**
   * Возвращает АТС по идентификатору
   * @param id {number} - идентификатор АТС
   * @returns {Ats|null}
   */
  getAtsById(id: number): Ats|null {
    let length = this.ats.length;
    for (let i = 0; i < length; i++) {
      if (this.ats[i].id === id)
        return this.ats[i];
    }
    return null;
  };

};
