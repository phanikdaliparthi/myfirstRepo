import { Injectable } from '@angular/core';
import { Post } from './post';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class ServiceSampleService {
    

  constructor(private httpClientObj:HttpClient) { console.log("in service Angular service") }

  getStaticName():string{
    return "Hello Phani K Daliparthi";
  }
  getAllBooks():Observable<Book[]>{
     let myURL='http://localhost:8181/books';
     return this.httpClientObj.get<Book[]>(myURL);
     

  }
  getBook():Observable<Book>{
    let myURL='http://localhost:8181/name?name=Name1';
    return this.httpClientObj.get<Book>(myURL);
    

 }
  getPostData():Observable<Book>{
      let jsonBook=JSON.stringify({"name":"Name1","Author":"Auther1","subject":"Subject1","subtitle":"Subtitle1","durationInHours":1000,"id":1})
   
       let myPostURL='http://localhost:8181/inJSON'
       const headers = new HttpHeaders().set("Content-Type", "application/json");
       console.log('gonna post data to the server')
      
       return this.httpClientObj.post<Book>(myPostURL,{
        name:'SampleBook',Author:'Auther1SampleA',subject:'SampleSubject1',subtitle:'SampleSubtitle1',durationInHours:1000,id:1
       },{headers})
      }

      deletePostData():Observable<Post>{
        let post1 ={
         userID:1,id:2,body:'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',title:'qui est esse'
       }
           let myPostURL='https://jsonplaceholder.typicode.com/posts/65656546544'
           console.log('gonna post data to the server')
           return this.httpClientObj.delete<Post>(myPostURL)
          }
}
