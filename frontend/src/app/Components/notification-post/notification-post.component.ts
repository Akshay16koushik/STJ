import { Component, OnInit } from '@angular/core';
import {NotifyService} from '../../Services/notify.service';
@Component({
  selector: 'app-notification-post',
  templateUrl: './notification-post.component.html',
  styleUrls: ['./notification-post.component.css']
})
export class NotificationPostComponent implements OnInit {

  constructor(private service:NotifyService) { }

  ngOnInit(): void {
  }
  PostNotify(form){
    console.log();
    const data = this.service.UploadPost(form.value.notify);
    data.subscribe((responsedata)=>{
      if(responsedata.message == "Added"){
        alert(responsedata.message);
        window.location.reload();
      }
    })
  }
}
