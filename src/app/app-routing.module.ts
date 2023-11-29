import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminUserManagmentComponent } from './superadmin/admin-user-managment/admin-user-managment.component';

const routes: Routes = [

  //n
  {path:'login',component:LoginComponent},
  
  //n
  {path:'superadmin',component:AdminUserManagmentComponent,
    children:[{
    path:"user",component:AdminUserManagmentComponent
  }]}
  ,

  //lazy loading
  //{path:'superadmin',component:AdminUserManagmentComponent,
    //loadChildren:()=>('./superadmin/superadmin.module').then(m.SuperadminModule)
  //}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
