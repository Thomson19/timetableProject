import {Component, OnInit} from '@angular/core';
import {Teacher} from '../../models/Teacher';
import {TimetableService} from '../../services/timetable.service';

@Component({
  selector: 'app-lecturers-timetable',
  templateUrl: './lecturers-timetable.component.html',
  styleUrls: ['./lecturers-timetable.component.scss']
})
export class LecturersTimetableComponent implements OnInit {

  lecturers: Teacher[];

  constructor(private timetableService: TimetableService) {
  }

  ngOnInit(): void {
    this.timetableService.getLecturers().subscribe(data => {
      this.lecturers = data;
    });
  }

}
