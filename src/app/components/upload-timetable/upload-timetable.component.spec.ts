import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadTimetableComponent } from './upload-timetable.component';

describe('UploadTimetableComponent', () => {
  let component: UploadTimetableComponent;
  let fixture: ComponentFixture<UploadTimetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadTimetableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadTimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
