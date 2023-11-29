import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationsSettingsComponent } from './applications-settings.component';

describe('ApplicationsSettingsComponent', () => {
  let component: ApplicationsSettingsComponent;
  let fixture: ComponentFixture<ApplicationsSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicationsSettingsComponent]
    });
    fixture = TestBed.createComponent(ApplicationsSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
