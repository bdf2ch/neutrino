/**
 * User interface
 */
export interface  IUser {
  id: number;
  tab_id?: string;
  name: string;
  fname?: string;
  surname?: string;
  position?: string;
  email?: string;
  photo?: string;
};


/**
 * User class
 */
export class User {
  id: number = 0;
  tabId: string = '';
  name: string = '';
  fname: string = '';
  surname: string = '';
  email: string = '';
  position: string = '';
  photo: string = '';
  fio: string = '';

  constructor (config?: IUser) {
    if (config) {
      this.id = config.id;
      this.tabId = config.tab_id ? config.tab_id : '';
      this.name = config.name;
      this.fname = config.fname ? config.fname: '';
      this.surname = config.surname;
      this.position = config.position ? config.position : '';
      this.email = config.email ? config.email : '';
      this.photo = config.photo ? config.photo : '';
      this.fio = this.surname + ' ' + this.name + ' ' + this.fname;
    }
  }
};
