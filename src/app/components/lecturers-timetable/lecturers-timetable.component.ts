import {Component, OnInit} from '@angular/core';
import {Teacher} from '../../models/Teacher';
import {TimetableService} from '../../services/timetable.service';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-lecturers-timetable',
  templateUrl: './lecturers-timetable.component.html',
  styleUrls: ['./lecturers-timetable.component.scss']
})
export class LecturersTimetableComponent implements OnInit {

  lecturers: Teacher[];
  imageBase64;

  constructor(private timetableService: TimetableService, private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.timetableService.getLecturers().subscribe(data => {
      this.lecturers = data;
    });
  }

  transform() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.imageBase64);
  }

  onSelectionChange(lecturer) {
    this.timetableService.getLecturerImage(lecturer.id).subscribe(image => {
      if(image == null) {
        console.log('not found');
      }
      this.imageBase64 = 'data:image/png;base64, '+image.content.value;
    })
  }


}
