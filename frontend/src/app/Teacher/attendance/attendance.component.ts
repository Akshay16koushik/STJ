import { Component, OnInit } from '@angular/core';
import {TeacherteacherService} from '../teacherteacher.service';
@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
classes:string[];
  constructor(private service:TeacherteacherService) { }

  ngOnInit(): void {
    const userid = this.service.getId();
    const data = this.service.GetProfile(userid);
    data.subscribe((responsedata)=>{
      this.classes = responsedata.data['teacherAssignedClasses'];
      console.log(this.classes);
    })
  }
onChange(event){
  console.log(event);
}
}
