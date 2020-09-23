import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDetailsBankComponent } from './personal-details-bank.component';

describe('PersonalDetailsBankComponent', () => {
  let component: PersonalDetailsBankComponent;
  let fixture: ComponentFixture<PersonalDetailsBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalDetailsBankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalDetailsBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
