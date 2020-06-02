import {Component, OnInit} from '@angular/core';
import {TimetableService} from '../../services/timetable.service';
import {Classroom} from '../../models/Classroom';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-room-availability',
  templateUrl: './room-availability.component.html',
  styleUrls: ['./room-availability.component.scss']
})
export class RoomAvailabilityComponent implements OnInit {

  rooms: Classroom[];
  imageBase64;

  constructor(private timetableService: TimetableService, private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.timetableService.getRooms().subscribe(data => {
      this.rooms = data;
    });
  }

  transform() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.imageBase64);
  }

  onSelectionChange(room) {
    this.timetableService.getRoomImage(room.id).subscribe(image => {
      if (image == null) {
        console.log('not found');
      }
      this.imageBase64 = 'data:image/png;base64, ' + image.content.value;
    })
  }

}
