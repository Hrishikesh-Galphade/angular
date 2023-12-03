import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TestingComponent } from './testing/testing.component';
import { HighlighdivDirective } from './highlighdiv.directive';
import { CopyOfIfDirective } from './copy-of-if.directive';
import { TestDirective } from './test.directive';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    LoginComponent,
    TestingComponent,
    HighlighdivDirective,
    CopyOfIfDirective,
    TestDirective,
    RegisterComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  exports:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
