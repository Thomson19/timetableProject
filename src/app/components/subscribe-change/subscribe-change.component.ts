import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscribe-change',
  templateUrl: './subscribe-change.component.html',
  styleUrls: ['./subscribe-change.component.scss']
})
export class SubscribeChangeComponent implements OnInit {
  subscribeChangeForm;

  constructor() { }

  ngOnInit(): void {
  }

  update() {
    console.log('Subscribe change form on update');
  }
}
