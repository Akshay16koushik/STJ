import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TeacherteacherService} from '../teacherteacher.service';
@Component({
  selector: 'app-hoem-page',
  templateUrl: './hoem-page.component.html',
  styleUrls: ['./hoem-page.component.css']
})
export class HoemPageComponent implements OnInit {
role=false;
classTeacher=false;
  constructor(private route:Router,private service:TeacherteacherService) { }

  ngOnInit(): void {
    let user = this.service.getId();
    const data = this.service.GetProfile(user);
    data.subscribe((responsedata)=>{
      let designation = responsedata.data['teacherDesignation'];
      console.log(designation);
      if(designation =="subject teacher"){
        this.role = true;
      }else{
        this.classTeacher = true;
      }
    })
  }
Profile(){
 this.route.navigateByUrl('/teacherprofile')
}
Attendance(){
  this.route.navigateByUrl('/uploadattendance')
}
}
