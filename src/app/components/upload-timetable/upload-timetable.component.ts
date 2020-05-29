import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {TimetableService} from '../../services/timetable.service';
import {Router} from '@angular/router';

interface Category {
  name: string;
  type: string;
}

@Component({
  selector: 'app-upload-timetable',
  templateUrl: './upload-timetable.component.html',
  styleUrls: ['./upload-timetable.component.scss']
})
export class UploadTimetableComponent implements OnInit {
  uploadForm;
  formValid: boolean = false;
  categories: Category[] = [
    {name: 'Plan studentów', type: 'GROUP'},
    {name: 'Plan prowadzących', type: 'TEACHER'},
    {name: 'Dostępność sal', type: 'CLASSROOM'}
  ];
  groups = [];

  constructor(private formBuilder: FormBuilder, private timetableService: TimetableService, private router: Router) {
    this.uploadForm = this.formBuilder.group({
      category: [null, [Validators.required]],
      categoryOptions: [{value: null, disabled: true}, [Validators.required]],
      upload: [null, [Validators.required]]
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

  onFileChange(event) {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          this.uploadForm.get('upload').setValue({
            fileType: file.type,
            value: reader.result.split(',')[1]
          });
        }
      };
    }
    this.formValid = true;
  }

  onOptionAdd() {
    if (this.uploadForm.get('categoryOptions').value === 'addNew') {
      this.router.navigate(['addOptionForCategory']);
    }
  }

  onSubmit() {
    let content = this.uploadForm.get('upload').value;
    let type = this.uploadForm.get('category').value.type;
    let typeId = this.uploadForm.get('categoryOptions').value.id;

    this.timetableService.uploadNewPlan(typeId, type, content).subscribe();
    window.location.reload();
  }
}
