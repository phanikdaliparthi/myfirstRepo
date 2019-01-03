import { Component, OnInit } from '@angular/core';
import { FetchContactDetailsService } from '../fetch-contact-details.service';

@Component({
  selector: 'app-http-methods',
  templateUrl: './http-methods.component.html',
  styleUrls: ['./http-methods.component.scss']
})
export class HttpMethodsComponent implements OnInit {
  public OutPutJson:string;
  public httpdatafetcherservice:FetchContactDetailsService;
  constructor() { console.log('created the serviceobject in compoentn')}
 
  ngOnInit() {
  }
  
  this.httpdatafetcherservice.getComments().subscribe(param=> this.OutPutJson = JSON.stringify(param));
  model: any = {};
  registerUser() {
    console.log(this.model.password);
    this.OutPutJson = JSON.stringify(this.model);

  }
}
