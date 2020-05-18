import { Component, OnInit } from '@angular/core';

interface StudentsGroup {
  name: string;
}

@Component({
  selector: 'app-students-timetable',
  templateUrl: './students-timetable.component.html',
  styleUrls: ['./students-timetable.component.scss']
})
export class StudentsTimetableComponent implements OnInit {

  groups: StudentsGroup[] = [{name: 'IO-1'}, {name: 'IO-2'}, {name: 'IO-3'}, {name: 'IO-4'}];

  constructor() { }

  ngOnInit(): void {
  }

}
