import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserManagmentComponent } from './admin-user-managment.component';

describe('AdminUserManagmentComponent', () => {
  let component: AdminUserManagmentComponent;
  let fixture: ComponentFixture<AdminUserManagmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminUserManagmentComponent]
    });
    fixture = TestBed.createComponent(AdminUserManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
