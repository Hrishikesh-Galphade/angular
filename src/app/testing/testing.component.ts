import { Component,OnInit } from '@angular/core';

@Component({
  selector: '[app-testing]',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

  inputType = "button";

  innerHtmlText = "<h1>This is property type directive test<h1>"
  setTextColor:boolean = false;
  s='hello';
  backgroundColor:string="green";
  textColor:string = "white";
  showParagraph:boolean=true;
  stylesPropertyCombination:Record<string,string> =null; 
  classesPropertyCombination:Record<string,boolean> =null; 
  heros = ["Bhagtsing","Vallabahi patel","Mahatama gandhi","Savarkar","Tilak"]
  //
  ngOnInit(){

    this.stylesPropertyCombination = {
      "background-color":this.backgroundColor,
      "color":this.textColor
    }

    this.classesPropertyCombination = {
      "backgroundColorClass":true,
      "textColorClass":true
    }


  }

  toggleInputType()
  {
    if(this.inputType=="button"){
      this.inputType="text";
    }
    else{
      this.inputType="button";
    }

  }

  chageValue(){
    if(this.showParagraph){
      this.showParagraph=false;
    }
    else{
      this.showParagraph=true;
    }
  }
}
