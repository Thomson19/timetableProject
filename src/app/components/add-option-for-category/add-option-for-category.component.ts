import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {TimetableService} from '../../services/timetable.service';

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

  formValid: boolean = false;

  constructor(private formBuilder: FormBuilder, private timetableService: TimetableService) {
    this.addOptionForm = this.formBuilder.group({
      category: [null, [Validators.required]],
      optionName: [{value: null, disabled: true}, [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    let type = this.addOptionForm.get('category').value.type;
    let optionName = this.addOptionForm.get('optionName').value;

    if(type == 'GROUP') {
      this.timetableService.addGroup(optionName).subscribe(()=>this.reload());
    } else if(type == 'TEACHER') {
      let name = optionName.split(' ',2);
      this.timetableService.addTeacher(name[0], name[1]).subscribe(()=>this.reload());
    } else if(type == 'CLASSROOM') {
      this.timetableService.addClassRoom(optionName).subscribe(()=>this.reload());
    } else {
      console.log("ERROR");
    }
  }

  private reload() {
    window.location.reload();
  }

  onCategorySelected() {
    this.addOptionForm.get('optionName').enable();
    this.formValid = true;
  }
}
