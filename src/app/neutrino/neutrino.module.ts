import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SessionManagerService } from './session-manager.service';
import { NeutrinoComponent } from './neutrino/neutrino.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    NeutrinoComponent
  ],
  providers: [
    SessionManagerService
  ],
  exports: []
})
export class NeutrinoModule {};
