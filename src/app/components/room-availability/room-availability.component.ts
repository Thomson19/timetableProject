import {Component, OnInit} from '@angular/core';
import {TimetableService} from '../../services/timetable.service';
import {Classroom} from '../../models/Classroom';

@Component({
  selector: 'app-room-availability',
  templateUrl: './room-availability.component.html',
  styleUrls: ['./room-availability.component.scss']
})
export class RoomAvailabilityComponent implements OnInit {

  rooms: Classroom[];

  constructor(private timetableService: TimetableService) {
  }

  ngOnInit(): void {
    this.timetableService.getRooms().subscribe(data => {
      this.rooms = data;
    });
  }

}
