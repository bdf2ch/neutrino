import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UiKitModule } from '@bdf2ch/angular-ui-kit';
import { SessionManagerService } from './session-manager.service';
import { NeutrinoComponent } from './neutrino/neutrino.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserManagerService } from "./user-manager.service";
import { UserListResolveGuardService } from "./users/user-list/resolve-guard.service";
import { FormsModule } from "@angular/forms";
import { UserComponent } from './users/user-list/user/user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { UserResolveGuardService } from "./users/edit-user/resolve-guard.service";
//import { DivisionsComponent } from "./phonebook/divisions/divisions.component";
import { PhonebookModule } from "./phonebook/phonebook.module";

@NgModule({
  imports: [
    CommonModule,
    PhonebookModule,
    RouterModule,
    FormsModule,
    UiKitModule
  ],
  declarations: [
    NeutrinoComponent,
    UserListComponent,
    DashboardComponent,
    UserComponent,
    EditUserComponent
    //DivisionsComponent
  ],
  providers: [
    SessionManagerService,
    UserManagerService,
    UserListResolveGuardService,
    UserResolveGuardService
  ],
  exports: []
})
export class NeutrinoModule {};
