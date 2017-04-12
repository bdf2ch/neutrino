import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "../app.component";
import { AppResolveGuardService } from "../app-resolve-guard.service";
import { NeutrinoComponent } from "../neutrino/neutrino/neutrino.component";
import { NeutrinoModule } from "../neutrino/neutrino.module";


const routes: Routes = [
  {
    path: '',
    component: NeutrinoComponent,
    //resolve: {
    //  session: AppResolveGuardService
    //}
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
