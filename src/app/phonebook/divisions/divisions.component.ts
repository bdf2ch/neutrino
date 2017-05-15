import { Component, OnInit } from '@angular/core';
import { PhonebookService } from "../phonebook.service";
import { TreeService } from '@bdf2ch/angular-ui-kit';
import { Division } from "../../models/division";
import { TreeItem } from '@bdf2ch/angular-ui-kit';
import { ModalService } from '@bdf2ch/angular-ui-kit';


@Component({
  selector: 'app-divisions',
  templateUrl: './divisions.component.html',
  styleUrls: ['./divisions.component.css']
})
export class PhonebookDivisionsComponent implements OnInit {
  selectedDivision: Division|null = null;
  newDivision: Division = new Division();
  newDivisionParentTitle: string = '';


  /**
   * Конструктор
   * @param phonebook {PhonebookService}
   * @param trees {TreesService}
   * @param modals {ModalsService}
   */
  constructor(private phonebook: PhonebookService,
              private trees: TreeService,
              private modals: ModalService) {
    this.newDivision._model.backup.setup(['title']);
  };


  /**
   * Инициализация компонента
   * Заполнение дерева структурных подразделений
   */
  ngOnInit() {
    if (this.phonebook.getAllDivisions().length === 0) {
      this.phonebook.fetchAllDivisions().subscribe((divisions: Division[]) => {
        let length = divisions.length;
        let tree = this.trees.getById('phonebook-divisions-tree');
        for (let i = 0; i < length; i++) {
          tree.addItem({
            key: divisions[i].id.toString(),
            parentKey: divisions[i].parentId.toString(),
            title: divisions[i].title,
            isRoot: divisions[i].parentId === 0 ? true : false,
            isSelected: divisions[i].id === 13 ? true : false
          });
        }
      });
    }
  };


  /**
   * Выбор структурного подразделения
   * @param item {TreeItem} - элемент иерархического списка
   */
  selectDivision(item: TreeItem|null): void {
    this.selectedDivision = item !== null ? this.phonebook.getDivisionById(parseInt(item.key)): null;
    if (item !== null) {
      this.selectedDivision = this.phonebook.getDivisionById(parseInt(item.key));
      this.newDivision.parentId = this.selectedDivision.id;
      this.newDivisionParentTitle = this.selectedDivision.title;
    } else {
      this.selectedDivision = null;
      this.newDivision.parentId = 0;
      this.newDivisionParentTitle = '';
    }
    console.log('selectedDivision', this.selectedDivision);
  };


  /**
   * Открывает модальное окно добавления структурного подразделения
   */
  openNewDivisionModal(): void {
    this.modals.open('new-division-modal');
  };


  /**
   * Закрывает модальное окно добавления структурного подразделения
   * @param form {ngForm} - форма добавления структурного подразделдения
   */
  closeNewDivisionModal(form: any): void {
    form.reset();
  };


  /**
   * Добавляет структурное подразделение
   */
  addDivision(): void {
    this.phonebook.addDivision(this.newDivision).subscribe((division: Division) => {
      let tree = this.trees.getById('phonebook-divisions-tree');
      tree.addItem({
        key: division.id.toString(),
        parentKey: division.parentId.toString(),
        title: division.title,
        isRoot: division.parentId === 0 ? true : false
      });
      this.modals.close();
    });
  };


  /**
   * Открывает модальное окно редактирования структурного подразделения
   */
  openEditDivisionModal() {
    this.modals.open('edit-division-modal');
  };


  /**
   * Закрывает модальное окно редавтирования структурного подразделения
   * @param form {ngForm} - форма редактирования структурного подразделения
   */
  closeEditDivisionModal(form: any): void {
    form.reset({
      title: this.selectedDivision._model.backup.data.title
    });
  };


  editDivision(): void {
    this.phonebook.editDivision(this.selectedDivision).subscribe((division: Division) => {
      console.log(division);
      let tree = this.trees.getById('phonebook-divisions-tree');
      let item = tree.getItemByKey(division.id.toString());
      item.title = this.selectedDivision.title;
      this.selectedDivision._model.backup.setup(['parentId', 'title']);
      this.modals.close();
    });
  };
};
