import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {

  title:string="In a Hello Component"
  isUserLoggedIn :boolean = false;

  PrintTitle(){
    console.log(this.title);
    setTimeout(()=>{
      this.title = "Calling after 5 sec"
    },5000)
  }

  printTitaleAgain(){
    this.PrintTitle();
  }

  calculateLengthOfTitle(){
    return this.title.length;
  }
  
}
