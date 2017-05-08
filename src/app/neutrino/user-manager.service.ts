import { Injectable } from '@angular/core';
import { User } from "../models/user";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';


@Injectable()
export class UserManagerService {
  private users: User[] = [];
  private total: number = 0;
  private start: number = 0;
  private limit: number = 30;
  search: string = '';
  private searchMode: boolean = false;
  private loading: boolean = false;

  constructor(private http: Http) {};


  /**
   * Fetches all users from server
   * @returns {Observable<User[]>}
   */
  fetchAllUsers(): Observable<User[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let parameters = { action: 'getAllUsers' };

    return this.http.post('http://127.0.0.1:4444/api', parameters, options)
      .map((response: Response) => {
        console.log(response);
        let body = response.json();
        this.users = [];
        let length = body.length;
        for (let i = 0; i < length; i++) {
          let user = new User(body[i]);
          this.users.push(user);
        }
        return this.users;
      })
      .take(1);
  };


  fetchPortionOfUsers(): Observable<User[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let parameters = { action: 'getPortionOfUsers', data: { start: this.start, limit: this.limit }};
    this.loading = true;

    return this.http.post('http://127.0.0.1:4444/api', parameters, options)
      .map((response: Response) => {
      this.loading = false;
        let body = response.json();
        this.total = body.total;
        let length = body.users.length;
        for (let i = 0; i < length; i++) {
          let user = new User(body.users[i]);
          user._model.backup.setup(['divisionId', 'name', 'fname', 'surname', 'position', 'email']);
          this.users.push(user);
          this.start++;
        }
        return this.users;
      })
      .take(1);
  };


  /**
   * Fetches user by id from server
   * @param id {number} - user id
   * @returns {Observable<User>}
   */
  fetchUserById(id: number): Observable<User> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let parameters = { action: 'getUserById', data: { userId: id }};
    this.loading = true;

    return this.http.post('http://127.0.0.1:4444/api', parameters, options)
      .map((response: Response) => {
        this.loading = false;
        let body = response.json();
        let user = new User(body);
        user._model.backup.setup(['divisionId', 'name', 'fname', 'surname', 'position', 'email']);
        console.log(user);
        return user;
      })
      .take(1);
  };


  searchUsers(): Observable<User[]> {
    let headers = new Headers({ "Content-Type": "application/json" });
    let options = new RequestOptions({ headers: headers });
    let params = { action: "searchUsers", data: { search: this.search } };
    this.searchMode = true;
    this.loading = true;

    return this.http.post('http://localhost:4444/api', params, options)
      .map((res: Response) => {
        this.loading = false;
        let body = res.json();
        if (body !== null) {
          let length = body.length;
          this.users.splice(0, this.users.length);
          for (let i = 0; i < length; i++) {
            let user = new User(body[i]);
            //user.setupBackup(["tabId", "divisionId", "surname", "name", "fname", "position", "email", "activeDirectoryAccount", "fio", "isAdministrator"]);
            this.users.push(user);
            this.start = 0;
            this.loading = false;
          }
        } else
          return null;
      })
      .take(1);
  };


  clearSearch(): void {
    this.users = [];
    this.fetchPortionOfUsers().subscribe(() => {
      this.searchMode = false;
      this.search = '';
    });
  };


  /**
   * Return users array
   * @returns {User[]}
   */
  getAllUsers(): User[] {
    return this.users;
  };


  /**
   * Returns user by its id
   * @param id {number} - user id
   * @returns {User|null}
   */
  getUserById(id: number): User|null {
    let length = this.users.length;
    for (let i = 0; i < length; i++) {
      if (this.users[i].id === id)
        return this.users[i];
    }
    return null;
  };


  /**
   * Return total users count
   * @returns {number}
   */
  getTotalUsersCount(): number {
    return this.total;
  };


  /**
   * Returns search query string
   * @returns {string}
   */
  getSearchQuery(): string {
    return this.search;
  };


  /**
   * Returns
   * @returns {boolean}
   */
  isLoading(): boolean {
    return this.loading;
  };

  isInSearchMode(): boolean {
    return this.searchMode;
  };
}
