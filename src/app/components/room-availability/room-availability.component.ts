import {Component, OnInit} from '@angular/core';

interface Room {
  name: string;
}

@Component({
  selector: 'app-room-availability',
  templateUrl: './room-availability.component.html',
  styleUrls: ['./room-availability.component.scss']
})
export class RoomAvailabilityComponent implements OnInit {

  rooms: Room[] = [{name: 'CTI401'}, {name: 'CTI402'}, {name: 'CTI403'}, {name: 'CTI404'}];

  constructor() {
  }

  ngOnInit(): void {
  }

}
