import { Component, OnInit } from '@angular/core';
import {Group} from '../../models/Group';
import {TimetableService} from '../../services/timetable.service';

@Component({
  selector: 'app-students-timetable',
  templateUrl: './students-timetable.component.html',
  styleUrls: ['./students-timetable.component.scss']
})
export class StudentsTimetableComponent implements OnInit {

  groups: Group[];

  constructor(private timetableService: TimetableService) { }

  ngOnInit(): void {
    this.timetableService.getGroups().subscribe(data => {
      this.groups = data;
    });
  }

}
