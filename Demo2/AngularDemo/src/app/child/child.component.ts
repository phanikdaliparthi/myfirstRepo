import { Component, OnInit, Input } from '@angular/core';
import {Demo} from '../demo';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
public classDemoObject:Demo = new Demo('pichiPiyano','Phoenix');
  
@Input() public valueFromParent;


constructor() {
    console.log('in child constructor');
    
   }

  ngOnInit() {
    console.log('in child init');
    console.log(this.classDemoObject.address+':Child');
    console.log(this.classDemoObject.name+':Child');
  }

}
