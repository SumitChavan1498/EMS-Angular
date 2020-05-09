import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAllEmployeeComponent } from './delete-all-employee.component';

describe('DeleteAllEmployeeComponent', () => {
  let component: DeleteAllEmployeeComponent;
  let fixture: ComponentFixture<DeleteAllEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAllEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAllEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
