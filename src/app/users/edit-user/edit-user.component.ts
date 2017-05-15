import { Component, OnInit } from '@angular/core';
import { User } from "../../models/user";
import {ActivatedRoute} from "@angular/router";

@Component({
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user: User|null = null;
  title: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data: { user: User }) => {
      this.user = data.user;
      this.title = this.user.fio;
    });
  };


  cancel(form: any): void {
    form.reset({
      name: this.user.name,
      fname: this.user.fname,
      surname: this.user.surname,
      email: this.user.email,
      position: this.user.position
    });
    this.user._model.backup.restore();
    console.log(this.user);
  };

}
