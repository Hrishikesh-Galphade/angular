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

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    LoginComponent,
    TestingComponent,
    HighlighdivDirective,
    CopyOfIfDirective,
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
