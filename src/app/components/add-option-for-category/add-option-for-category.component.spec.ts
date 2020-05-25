import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOptionForCategoryComponent } from './add-option-for-category.component';

describe('AddOptionForCategoryComponent', () => {
  let component: AddOptionForCategoryComponent;
  let fixture: ComponentFixture<AddOptionForCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOptionForCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOptionForCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
