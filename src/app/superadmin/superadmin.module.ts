import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminUserManagmentComponent } from './admin-user-managment/admin-user-managment.component';
import { ApplicationsSettingsComponent } from './applications-settings/applications-settings.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AdminUserManagmentComponent,
    ApplicationsSettingsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class SuperadminModule { }
