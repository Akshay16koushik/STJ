import { Component, OnInit } from '@angular/core';
import {TeacherteacherService} from '../teacherteacher.service';
import {TeacherteacherModel} from '../../Model/teacherteacherModel';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id:string;
  Name:String;
  Gender:String;
  age:String;
  designation:String;
  Address:String
  phon:String;
  Subjects:String;
  Classes:String[];
  Board:String;
  constructor(private service:TeacherteacherService) { }
TeacherData:any;
  ngOnInit(): void {
    let userid = this.service.getId();
    console.log(userid);
    const data = this.service.GetProfile(userid);
    data.subscribe((responsedata)=>{
      console.log(responsedata.data);
      this.TeacherData = responsedata.data;
      this.id= this.TeacherData['teacherUniqId'];
      this.Name = this.TeacherData['teacherName'];
      this.Gender= this.TeacherData['teacherSex'];
      this.age = this.TeacherData['teacherAge'];
      this.designation = this.TeacherData['teacherDesignation'];
      this.Address = this.TeacherData['teacherAddress'];
      this.phon = this.TeacherData['teacherPhonenumber'];
      this.Subjects = this.TeacherData['teacherSubject'];
      this.Classes = this.TeacherData['teacherAssignedClasses'];
      this.Board = this.TeacherData['teacherBoard'];
    })
  }

}
