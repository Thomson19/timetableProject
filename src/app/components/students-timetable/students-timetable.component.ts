import {Component, OnInit} from '@angular/core';
import {Group} from '../../models/Group';
import {TimetableService} from '../../services/timetable.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-students-timetable',
  templateUrl: './students-timetable.component.html',
  styleUrls: ['./students-timetable.component.scss']
})
export class StudentsTimetableComponent implements OnInit {

  groups: Group[];
  imageBase64;

  constructor(private timetableService: TimetableService, private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.timetableService.getGroups().subscribe(data => {
      this.groups = data;
    });

  }

  transform() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.imageBase64);
  }

  onSelectionChange(group) {
    this.timetableService.getGroupImage(group.id).subscribe(image => {
      if(image == null) {
        console.log('not found');
        this.imageBase64 = this.timetableService.get404Image();
      } else {
        this.imageBase64 = 'data:image/png;base64, '+image.content.value;
      }
    })
  }
}
