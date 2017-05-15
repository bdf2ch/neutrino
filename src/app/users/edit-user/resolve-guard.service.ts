import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { User } from "../../models/user";
import { Observable } from "rxjs";
import { UserManagerService } from "../../neutrino/user-manager.service";

@Injectable()
export class UserResolveGuardService implements Resolve<Observable<User>|User> {


  /**
   * Resolve guard constructor
   * @param users {UserManagerService} - UserManager service injector
   */
  constructor(private users: UserManagerService) {};


  /**
   * User data resolver
   * @param route {ActivatedRouteSnapshot} - ActivatedRouteSnapshot injector
   * @param state {RouterStateSnapshot} - RouterStateSnapshot injector
   * @returns {User|Observable<User>}
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User>|User {
    let userId = parseInt(route.params['userId']);
    let user = this.users.getUserById(userId);
    console.log(user);
    return user !== null ? user : this.users.fetchUserById(userId);
  };
}
