import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {TimetableService} from '../../services/timetable.service';
import {Router} from '@angular/router';

interface Category {
  name: string;
}

@Component({
  selector: 'app-upload-timetable',
  templateUrl: './upload-timetable.component.html',
  styleUrls: ['./upload-timetable.component.scss']
})
export class UploadTimetableComponent implements OnInit {
  uploadForm;
  categories: Category[] = [
    {name: 'Plan studentów'},
    {name: 'Plan prowadzących'},
    {name: 'Dostępność sal'}
  ];
  groups = [];

  constructor(private formBuilder: FormBuilder, private timetableService: TimetableService, private router: Router) {
    this.uploadForm = this.formBuilder.group({
      category: [null, [Validators.required]],
      categoryOptions: [{value: null, disabled: true}, [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  onCategorySelected() {
    if (this.uploadForm.get('category').value.name === 'Plan studentów') {
      this.timetableService.getGroups().subscribe(data => {
        this.groups = data;
      });
    } else if (this.uploadForm.get('category').value.name === 'Plan prowadzących') {
      this.timetableService.getLecturers().subscribe(data => {
        this.groups = [];
        data.forEach(t => {
          this.groups.push({id: t.id, name: t.firstName + ' ' + t.lastName});
        });
      });
    } else if (this.uploadForm.get('category').value.name === 'Dostępność sal') {
      this.timetableService.getRooms().subscribe(data => {
        this.groups = data;
      });
    } else {
      console.log('ERROR');
    }
    this.uploadForm.get('categoryOptions').enable();
  }

  onFileChange($event: Event) {

  }

  onOptionAdd() {
    if (this.uploadForm.get('categoryOptions').value === 'addNew') {
      this.router.navigate(['addOptionForCategory']);
    }
  }

  onSubmit() {
    // TODO: post request
    console.log('upload file');
  }
}
