import { Component, OnInit } from '@angular/core';
import { ServiceSampleService } from '../service-sample.service';
import { Post } from '../post';

@Component({
  selector: 'app-delete-component',
  templateUrl: './delete-component.component.html',
  styleUrls: ['./delete-component.component.css']
})
export class DeleteComponentComponent implements OnInit {
  private postObject2:Post;

  constructor(private serviceObject:ServiceSampleService) { }

  ngOnInit() {
  }

  deletePostMessage():Post{
    this.serviceObject.deletePostData().subscribe(deletedPost=> this.postObject2=deletedPost);
    return this.postObject2;
  }


}
