import { Component, OnInit } from '@angular/core';

import { Post } from '../post';
import { ServiceSampleService } from '../service-sample.service';
import { Book } from '../book';

@Component({
  selector: 'app-get-comp',
  templateUrl: './get-comp.component.html',
  styleUrls: ['./get-comp.component.css']
})
export class GetCompComponent implements OnInit {
 
  private staticReturnedString:string;
  private postObject:Book[];
   
    //injection of service below
  constructor(private serviceSampleObject:ServiceSampleService) { }

  ngOnInit() {
    this.serviceSampleObject.getStaticName();
  }

  getPostMsgs():string{
 
    this.staticReturnedString= "Hi Mr. Phoenix Phani";
    return this.staticReturnedString;
    
  }

   getAllBooks():Book[]{
    
    this.serviceSampleObject.getAllBooks().subscribe(postReturn=> this.postObject=postReturn);    
    return this.postObject;
  }
  

}
