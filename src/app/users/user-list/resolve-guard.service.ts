import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from "rxjs";
import { UserManagerService } from "../../neutrino/user-manager.service";
import { User } from "../../models/user";

@Injectable()
export class UserListResolveGuardService implements Resolve<User[]>{

  constructor(private users: UserManagerService) {};

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User[]>{
    if (this.users.getAllUsers().length === 0) {
      console.log('no users, start resolving');
      return this.users.fetchAllUsers();
    }
  };

}
