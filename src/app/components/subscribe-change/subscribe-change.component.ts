import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {TimetableService} from '../../services/timetable.service';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-subscribe-change',
  templateUrl: './subscribe-change.component.html',
  styleUrls: ['./subscribe-change.component.scss']
})
export class SubscribeChangeComponent implements OnInit {
  subscribeChangeForm;
  categories = [
    {name: 'Plan studentów', type: 'GROUP'},
    {name: 'Plan prowadzących', type: 'TEACHER'},
    {name: 'Dostępność sal', type: 'CLASSROOM'}
  ];
  groups = [];
  formValid: boolean = false;

  constructor(private formBuilder: FormBuilder, private timetableService: TimetableService, private authService: AuthenticationService) {
    this.subscribeChangeForm = this.formBuilder.group({
      category: [null, [Validators.required]],
      categoryOptions: [{value: null, disabled: true}, [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    let type = this.subscribeChangeForm.get('category').value.type;
    let typeId = this.subscribeChangeForm.get('categoryOptions').value.id;
    let userId = this.authService.currentUserValue.accountId;

    this.timetableService.subscribeChange(typeId, type, userId).subscribe();
    window.location.reload();
  }

  onCategorySelected() {
    if (this.subscribeChangeForm.get('category').value.name === 'Plan studentów') {
      this.timetableService.getGroups().subscribe(data => {
        this.groups = data;
      });
    } else if (this.subscribeChangeForm.get('category').value.name === 'Plan prowadzących') {
      this.timetableService.getLecturers().subscribe(data => {
        this.groups = [];
        data.forEach(t => {
          this.groups.push({id: t.id, name: t.firstName + ' ' + t.lastName});
        });
      });
    } else if (this.subscribeChangeForm.get('category').value.name === 'Dostępność sal') {
      this.timetableService.getRooms().subscribe(data => {
        this.groups = data;
      });
    } else {
      console.log('ERROR');
    }
    this.subscribeChangeForm.get('categoryOptions').enable();
  }

  onGroupChange() {
    this.formValid = true;
  }
}
