import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDetailsQualificationComponent } from './personal-details-qualification.component';

describe('PersonalDetailsQualificationComponent', () => {
  let component: PersonalDetailsQualificationComponent;
  let fixture: ComponentFixture<PersonalDetailsQualificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalDetailsQualificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalDetailsQualificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
