import { Component,OnInit,ViewChild,ChangeDetectorRef,AfterViewChecked } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: '.app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewChecked {
  
  
  @ViewChild('f') loginfom ;

  genders=['Male','Female','Transgender','abc','tyx']

  emailDefaultValue:string="samdhan@f.com"
 //onSubmit(formElemnt:HTMLFormElement){
   // console.log(formElemnt);}
   ngAfterViewChecked(){
    this.setDefaultValue();
   }
  onSubmit(formElement:NgForm){
    console.log(formElement);
  }

  checkFormStatus(){
    console.log(this.loginfom.value);
  }

  setDefaultValue(){
    //Set Value update all the fileds/controls from the form. and you must provide all the form values.
    /*this.loginfom.setValue({
        usercredentials: {
            "emailAddress": "samdhan@f.com",
            "password": "Test@123"
        },
        role: "superadmin",
        gender: "Male"
    });*/

    //In patch value method we can update only those fileds that we require and you can pass this filed to pathcVlaue function.
    this.loginfom.form.patchValue({
      usercredentials: {
          "emailAddress": "samdhan@f.com",
          "password": "Test@123"
      }
  });
  }
}
