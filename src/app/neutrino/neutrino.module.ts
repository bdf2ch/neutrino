import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SessionManagerService } from './session-manager.service';
import { NeutrinoComponent } from './neutrino/neutrino.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    NeutrinoComponent,
    UserListComponent,
    DashboardComponent
  ],
  providers: [
    SessionManagerService
  ],
  exports: []
})
export class NeutrinoModule {};
