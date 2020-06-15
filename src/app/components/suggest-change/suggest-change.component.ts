import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {TimetableService} from '../../services/timetable.service';

@Component({
  selector: 'app-suggest-change',
  templateUrl: './suggest-change.component.html',
  styleUrls: ['./suggest-change.component.scss']
})
export class SuggestChangeComponent implements OnInit {
  suggestChangeForm;
  groups = [];
  formValid: boolean = false;

  constructor(private formBuilder: FormBuilder, private timetableService: TimetableService) {
    this.suggestChangeForm = this.formBuilder.group({
      group: [null, [Validators.required]],
      description: [null, [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.timetableService.getGroups().subscribe(data => {
      this.groups = data;
    });
  }

  onSubmit() {
    let group = this.suggestChangeForm.get('group').value.id;
    let description = this.suggestChangeForm.get('description').value;

    this.timetableService.suggestChange(group, description).subscribe(x=> window.location.reload());
  }

  onGroupSelected() {
    this.formValid = true;
  }
}
