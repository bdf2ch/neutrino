import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SessionManagerService } from './session-manager.service';
import { NeutrinoComponent } from './neutrino/neutrino.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserManagerService } from "./user-manager.service";
import { UserListResolveGuardService } from "./users/user-list/resolve-guard.service";
import { FormsModule } from "@angular/forms";
import { UserComponent } from './users/user-list/user/user.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    NeutrinoComponent,
    UserListComponent,
    DashboardComponent,
    UserComponent
  ],
  providers: [
    SessionManagerService,
    UserManagerService,
    UserListResolveGuardService
  ],
  exports: []
})
export class NeutrinoModule {};
