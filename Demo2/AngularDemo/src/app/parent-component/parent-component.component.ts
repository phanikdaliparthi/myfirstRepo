import { Component, OnInit } from '@angular/core';
import { Demo} from '../demo';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {
public demoObject:Demo = new Demo('TomDickHArry','Charlotte');
public numberofChars:number =0;
public buttonClicks:number =0;
public numberofCharsLeft:number = 12;
public disableFlag = false;
public valueFromParenttoChild:string = 'hey_From_Parent_to_Child'

parentData = this.demoObject.name+this.demoObject.address;
  constructor() {
    console.log('hi Phani..in ParentComopent');
   }

  ngOnInit() {

    console.log('hi Phani..in init()');
    console.log(this.demoObject.name+':Parent');
    console.log(this.demoObject.address+':Parent');
  }
  inputFunciton(){
    
    console.log('Number of charechters'+this.numberofChars);
    this.numberofChars=this.numberofChars+1;
    this.numberofCharsLeft = 12-this.numberofChars;
    if(this.numberofChars == 12){
      this.disableFlag = true;
    }
  }
  buttonFunction(){
   
   console.log('number of clicks'+this.buttonClicks);
   this.buttonClicks=this.buttonClicks+1;

  }
}
