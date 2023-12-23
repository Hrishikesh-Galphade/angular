import { Component,OnInit,ViewChild,ChangeDetectorRef,AfterViewChecked } from '@angular/core';
import { NgForm,FormGroup,FormControl } from '@angular/forms';
import {Router} from '@angular/router'

@Component({
  selector: '.app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm:FormGroup;
  constructor(private router: Router){}
  ngOnInit(){

    this.loginForm = new FormGroup({
      "username":new FormControl("hrishikesh"),
      "password":new FormControl("Test@123")
    })
  
  }

  onLoginFormSubmit(){
    console.log(this.loginForm)
  }

  redirectToUser(){
    this.router.navigate(['/superadmin/dashboard']);
  }
}
