import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from "@angular/router";
import { User } from "../../../models/user";
import { UserManagerService } from "../../user-manager.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private users: UserManagerService,
              private router: Router) { }

  ngOnInit() {
    if (this.users.getAllUsers().length === 0) {
      this.users.fetchPortionOfUsers().subscribe();
    }
  };


  searchUsers(value: string): void {
    if (value.length >= 3) {
      this.users.searchUsers().subscribe(() => {

      });
    }
  };


  clearSearch(): void {
    this.users.clearSearch();
  };


  selectUser(user: User): void {
    this.router.navigate(['users', user.id]);
  };

}
