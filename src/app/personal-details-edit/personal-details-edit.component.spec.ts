import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDetailsEditComponent } from './personal-details-edit.component';

describe('PersonalDetailsEditComponent', () => {
  let component: PersonalDetailsEditComponent;
  let fixture: ComponentFixture<PersonalDetailsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalDetailsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalDetailsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
