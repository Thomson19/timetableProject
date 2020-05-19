import {Component, OnInit} from '@angular/core';

interface Lecturer {
  name: string;
}

@Component({
  selector: 'app-lecturers-timetable',
  templateUrl: './lecturers-timetable.component.html',
  styleUrls: ['./lecturers-timetable.component.scss']
})
export class LecturersTimetableComponent implements OnInit {

  lecturers: Lecturer[] = [{name: 'Jan Kowalski'}, {name: 'Adam Nowak'}, {name: 'Anna Kucharska'}, {name: 'Ewa Kowalska'}];

  constructor() {
  }

  ngOnInit(): void {
  }

}
