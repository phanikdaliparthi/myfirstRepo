import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchContactDetailsService {

  constructor(private httpClientObj:HttpClient) { console.log('in service creating httpClient')}

  getComments():Observable<Comment[]>{

    let myCommnetURL='https://jsonplaceholder.typicode.com/posts/1/comments'
    return this.httpClientObj.get<Comment[]>(myCommnetURL)
   }
}
