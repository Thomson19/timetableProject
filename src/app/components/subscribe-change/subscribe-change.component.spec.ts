import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeChangeComponent } from './subscribe-change.component';

describe('SubscribeChangeComponent', () => {
  let component: SubscribeChangeComponent;
  let fixture: ComponentFixture<SubscribeChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscribeChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
