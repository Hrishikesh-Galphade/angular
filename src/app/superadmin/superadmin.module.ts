import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperadminContainerComponent } from './superadmin-container/superadmin-container.component';
import { AdminRoleManagmentComponent } from './superadmin-container/admin-role-managment/admin-role-managment.component';
import { RouterModule,Routes } from '@angular/router';
import { DashboardComponent } from './superadmin-container/dashboard/dashboard.component'

const superAdminRoute:Routes =[
  {path:'',component:AdminRoleManagmentComponent},
  {path:'admin-role-managment',component:AdminRoleManagmentComponent},
  {path:'dashboard',component:DashboardComponent},
]

@NgModule({
  declarations: [
    SuperadminContainerComponent,
    AdminRoleManagmentComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(superAdminRoute)
  ]
})
export class SuperadminModule { }
