import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-suggest-change',
  templateUrl: './suggest-change.component.html',
  styleUrls: ['./suggest-change.component.scss']
})
export class SuggestChangeComponent implements OnInit {
  suggestChangeForm;

  constructor() {
  }

  ngOnInit(): void {
  }

  update() {
    console.log('suggest change form on update');
  }
}
