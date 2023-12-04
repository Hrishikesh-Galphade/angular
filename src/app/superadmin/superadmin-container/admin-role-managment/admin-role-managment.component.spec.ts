import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRoleManagmentComponent } from './admin-role-managment.component';

describe('AdminRoleManagmentComponent', () => {
  let component: AdminRoleManagmentComponent;
  let fixture: ComponentFixture<AdminRoleManagmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminRoleManagmentComponent]
    });
    fixture = TestBed.createComponent(AdminRoleManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
