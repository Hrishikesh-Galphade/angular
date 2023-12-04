import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {RegisterComponent} from './register/register.component'
import {NotFoundComponent} from './not-found/not-found.component'
import { SuperadminContainerComponent } from './superadmin/superadmin-container/superadmin-container.component';
import { SuperadminModule } from './superadmin/superadmin.module';
const routes: Routes = [

  //n
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'superadmin',component:SuperadminContainerComponent,
    loadChildren:()=>import('./superadmin/superadmin.module').then(m=>SuperadminModule)
  },
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
