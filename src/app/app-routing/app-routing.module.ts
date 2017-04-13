import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "../app.component";
import { AppResolveGuardService } from "../app-resolve-guard.service";
import { NeutrinoComponent } from "../neutrino/neutrino/neutrino.component";
import { NeutrinoModule } from "../neutrino/neutrino.module";
import { UserListComponent } from "../neutrino/users/user-list/user-list.component";
import { DashboardComponent } from "../neutrino/dashboard/dashboard.component";
import { UserListResolveGuardService } from "../neutrino/users/user-list/resolve-guard.service";


const routes: Routes = [
  {
    path: '',
    component: NeutrinoComponent,
    //resolve: {
    //  session: AppResolveGuardService
    //}
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'users',
        component: UserListComponent,
        //resolve: {
        //  users: UserListResolveGuardService
        //}
      },
      {
        path: '**',
        component: DashboardComponent
      },
    ]
  }
];


@NgModule({
  imports: [
    NeutrinoModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
