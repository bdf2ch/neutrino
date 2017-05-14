import { Model } from "./model";

/**
 * Интерфейс класса Ats
 */
export interface IAts {
  id: number;         // Идентификатор АТС
  parent_id: number;   // Идентификатор родительской АТС
  type: number;       // Тип АТС
  title: string;      // Наименование АТС
};


/**
 * Класс, описывающий АТС
 */
export class Ats extends Model {
  id: number = 0;       // Идентификатор АТС
  parentId: number = 0; // Идентификатор родительской АТС
  type: number = 0;     // Тип АТС
  title: string = '';   // Наименование АТС

  /**
   * Конструктор
   * @param config {IAts} - параметры иницилизации объекта
   */
  constructor (config?: IAts) {
    super();
    if (config) {
      this.id = config.id;
      this.parentId = config.parent_id;
      this.type = config.type;
      this.title = config.title;
    }
  };
};
