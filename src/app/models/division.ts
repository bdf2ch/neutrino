import {Model} from "./model";


export class IDivision {
  id: number;
  parent_id: number;
  title: string;
};


export class Division extends Model{
  id: number = 0;
  parentId: number = 0;
  title: string = '';

  constructor(config?: IDivision) {
    super();
    if (config) {
      this.id = config.id;
      this.parentId = config.parent_id;
      this.title = config.title;
    }
  };
};
