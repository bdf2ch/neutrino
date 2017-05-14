import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UiKitModule } from '@bdf2ch/angular-ui-kit';
import { PhonebookDivisionsComponent } from './divisions/divisions.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PhonebookService } from "./phonebook.service";
import { AtsComponent } from './ats/ats.component';
import { PhonebookComponent } from './phonebook/phonebook.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    UiKitModule
  ],
  declarations: [
    PhonebookDivisionsComponent,
    ContactsComponent,
    AtsComponent,
    PhonebookComponent
  ],
  providers: [
    PhonebookService
  ]
})
export class PhonebookModule { }
