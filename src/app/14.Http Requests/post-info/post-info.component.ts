import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Iposts } from '../iposts';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-info',
  templateUrl: './post-info.component.html',
  styleUrls: ['./post-info.component.css']
})
export class PostInfoComponent implements OnInit {


  constructor(private post_service : PostsService) { }
public post_info: Observable<Iposts[]>;
created:boolean;
 
ngOnInit() {
this.post_info = this.post_service.getPosts();
  }

  createNew(form){
    const newData = {
      userid: form.value.userid,
      id: form.value.id,
      title: form.value.title,
      body:form.value.body
    };

    // dyanamic data from user
    console.log(form.value.userid);
    console.log(form.value.id);
    console.log(form.value.title);
    console.log(form.value.body);

     this.post_service.createPosts(newData).subscribe(data=> this.created=true );
     
  }

  updateData(id){
    const updatedData = {
      userid: 3,
      id: 3,
      title: "title",
      body:"body"
    };

    this.post_service.updatePosts(id,updatedData).subscribe(data => this.created=true);
  }


  deleteData(id){
    this.post_service.deletePosts(id).subscribe(data => this.created=true);
  }

  getbyid(){
    this.post_service.getPostsById().subscribe(data =>{ console.log(data)})
  }
}
