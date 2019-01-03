import { Component, OnInit } from '@angular/core';
import { ServiceSampleService } from '../service-sample.service';
import { Book } from '../book';

@Component({
  selector: 'app-post-comp',
  templateUrl: './post-comp.component.html',
  styleUrls: ['./post-comp.component.css']
})
export class PostCompComponent implements OnInit {
  private postObject1:Book;
  constructor(private serviceObject:ServiceSampleService) { }

  ngOnInit() {
  }
  addPostMessage():Book{
           this.serviceObject.getPostData().subscribe(postReturn => this.postObject1=postReturn)
           return this.postObject1;
  }
}
