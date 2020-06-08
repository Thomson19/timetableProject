import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-option-for-category',
  templateUrl: './add-option-for-category.component.html',
  styleUrls: ['./add-option-for-category.component.scss']
})
export class AddOptionForCategoryComponent implements OnInit {
  addOptionForm: any;
  categories = [
    {name: 'Plan studentów', type: 'GROUP'},
    {name: 'Plan prowadzących', type: 'TEACHER'},
    {name: 'Dostępność sal', type: 'CLASSROOM'}
  ];

  formValid: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }

  onCategorySelected() {

  }
}
