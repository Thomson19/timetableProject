import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturersTimetableComponent } from './lecturers-timetable.component';

describe('LecturersTimetableComponent', () => {
  let component: LecturersTimetableComponent;
  let fixture: ComponentFixture<LecturersTimetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturersTimetableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturersTimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
