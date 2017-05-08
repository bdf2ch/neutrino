import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UiKitModule } from '@bdf2ch/angular-ui-kit';
import { PhonebookDivisionsComponent } from './divisions/divisions.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PhonebookService } from "./phonebook.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UiKitModule
  ],
  declarations: [
    PhonebookDivisionsComponent,
    ContactsComponent
  ],
  providers: [
    PhonebookService
  ]
})
export class PhonebookModule { }
