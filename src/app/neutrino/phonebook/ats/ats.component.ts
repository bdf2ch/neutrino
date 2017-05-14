import { Component, OnInit } from '@angular/core';
import { Ats } from "../../../models/ats";
import { PhonebookService } from "../phonebook.service";
import { TreeService } from '@bdf2ch/angular-ui-kit';
import { TreeItem } from '@bdf2ch/angular-ui-kit';

@Component({
  templateUrl: './ats.component.html',
  styleUrls: ['./ats.component.css']
})
export class AtsComponent implements OnInit {
  selectedAts: Ats|null = null;
  newAts: Ats = new Ats();

  constructor(private phonebook: PhonebookService,
              private trees: TreeService) { }

  ngOnInit() {
    if (this.phonebook.getAllAts().length === 0) {
      this.phonebook.fetchAllAts().subscribe((ats: Ats[]) => {
        let length = ats.length;
        let tree = this.trees.getById('phonebook-ats-tree');
        for (let i = 0; i < length; i++) {
          tree.addItem({
            key: ats[i].id.toString(),
            parentKey: ats[i].parentId.toString(),
            title: ats[i].title,
            isRoot: ats[i].parentId === 0 ? true : false,
            isSelected: ats[i].id === 13 ? true : false
          });
        }
      });
    }
  };


  /**
   * Выбор АТС
   * @param item {TreeItem} - элемент иерархического списка
   */
  selectAts(item: TreeItem|null): void {
    this.selectedAts = item !== null ? this.phonebook.getAtsById(parseInt(item.key)): null;
    if (item !== null) {
      this.selectedAts = this.phonebook.getAtsById(parseInt(item.key));
      this.newAts.parentId = this.selectedAts.id;
    } else {
      this.selectedAts = null;
      this.newAts.parentId = 0;
    }
    console.log('selectedAts', this.selectedAts);
  };

}
