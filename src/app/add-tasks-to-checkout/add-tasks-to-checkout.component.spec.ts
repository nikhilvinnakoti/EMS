import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTasksToCheckoutComponent } from './add-tasks-to-checkout.component';

describe('AddTasksToCheckoutComponent', () => {
  let component: AddTasksToCheckoutComponent;
  let fixture: ComponentFixture<AddTasksToCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTasksToCheckoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTasksToCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
