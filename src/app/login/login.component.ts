import { Component,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild('f') loginfom;
 //onSubmit(formElemnt:HTMLFormElement){
   // console.log(formElemnt);}

  onSubmit(formElement:NgForm){
    console.log(formElement);
  }

  checkFormStatus(){
    console.log(this.loginfom);
  }
}
