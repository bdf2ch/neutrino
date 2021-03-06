import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { UiKitModule } from '@bdf2ch/angular-ui-kit';
import { NeutrinoModule } from './neutrino/neutrino.module';
import { AppComponent } from './app.component';
import { AppResolveGuardService } from "./app-resolve-guard.service";
import { AppRoutingModule } from "./app-routing/app-routing.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    UiKitModule,
    NeutrinoModule
  ],
  providers: [
    AppResolveGuardService
  ],
  bootstrap: [
    AppComponent
  ],
  exports: [
    UiKitModule
  ]
})
export class AppModule { }
