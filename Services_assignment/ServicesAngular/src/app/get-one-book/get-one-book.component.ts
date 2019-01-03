import { Component, OnInit } from '@angular/core';
import { ServiceSampleService } from '../service-sample.service';
import { Book } from '../book';

@Component({
  selector: 'app-get-one-book',
  templateUrl: './get-one-book.component.html',
  styleUrls: ['./get-one-book.component.css']
})
export class GetOneBookComponent implements OnInit {

  private bookObject:Book;
  
  constructor(private serviceSampleObject:ServiceSampleService) { }
   
  ngOnInit() {
  }

  getOneBook():Book{
    this.serviceSampleObject.getBook().subscribe(postReturn=> this.bookObject=postReturn);    
    return this.bookObject;
  }

 
}
