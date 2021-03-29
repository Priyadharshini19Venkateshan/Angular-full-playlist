import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iposts } from './iposts';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) { }
 
 // url="/assets/posts.json"
  url="http://localhost:3000/posts";
  getPosts(): Observable<Iposts[]>{
  //  return this.http.get<Iposts[]>('https://jsonplaceholder.typicode.com/posts');
  
  let httpHeader = new HttpHeaders({
    'content-type':'application/json',
    'Authorization': 'priya@123422',
    'TimeoutSeconds': '3000'
  });

  //custom header
  httpHeader = httpHeader.set('angular-tutorial','practice');
  let time = httpHeader.get('TimeoutSeconds');
  if(time ==='3000')
  {
httpHeader=httpHeader.set('content-type','')
  }
  return this.http.get<Iposts[]>(this.url,{headers: httpHeader});
  }

createPosts(newData){
  return this.http.post(this.url,newData);  
}

updatePosts(id,updatedData){
  const put_url="http://localhost:3000/posts/" + id;
  return this.http.put(put_url,updatedData);
}


deletePosts(id){
  const delete_url="http://localhost:3000/posts/" + id;
return this.http.delete(delete_url)
}

getPostsById(){
  const httpParams = new HttpParams({
    fromObject: {
      id:["2","3"]
    }
  });
 return this.http.get(this.url, {params: httpParams});
  //output will be in below format
  //http://localhost:3000/posts?query=mark
}

}
