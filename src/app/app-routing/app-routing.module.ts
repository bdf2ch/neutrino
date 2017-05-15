import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "../app.component";
import { AppResolveGuardService } from "../app-resolve-guard.service";
import { NeutrinoComponent } from "../neutrino/neutrino/neutrino.component";
import { NeutrinoModule } from "../neutrino/neutrino.module";
import { UserListComponent } from "../users/user-list/user-list.component";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { UserResolveGuardService } from "../users/edit-user/resolve-guard.service";
import { EditUserComponent } from "../users/edit-user/edit-user.component";
import { PhonebookDivisionsComponent } from "../phonebook/divisions/divisions.component";
import { AtsComponent } from "../phonebook/ats/ats.component";
import { PhonebookComponent } from "../phonebook/phonebook/phonebook.component";


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
      },
      {
        path: 'users/:userId',
        component: EditUserComponent,
        resolve: {
          user: UserResolveGuardService
        }
      },
      {
        path: 'phonebook',
        component: PhonebookComponent,
        children: [
          {
            path: 'divisions',
            component: PhonebookDivisionsComponent
          },
          {
            path: 'ats',
            component: AtsComponent
          }
        ]
      },
      {
        path: 'phonebook/divisions',
        component: PhonebookDivisionsComponent
      },
      {
        path: 'phonebook/ats',
        component: AtsComponent
      },
      {
        path: '**',
        component: DashboardComponent
      }
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
