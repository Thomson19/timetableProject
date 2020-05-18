import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsTimetableComponent } from './students-timetable.component';

describe('StudentsTimetableComponent', () => {
  let component: StudentsTimetableComponent;
  let fixture: ComponentFixture<StudentsTimetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsTimetableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsTimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
