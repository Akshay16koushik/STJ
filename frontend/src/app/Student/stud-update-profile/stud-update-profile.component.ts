import { Component, OnInit } from '@angular/core';
import {StudentService} from '../../student.service';
@Component({
  selector: 'app-stud-update-profile',
  templateUrl: './stud-update-profile.component.html',
  styleUrls: ['./stud-update-profile.component.css']
})
export class StudUpdateProfileComponent implements OnInit {
Student:Object;
Studentdata:any;
headings:String[]=['Details']
  constructor(private service:StudentService) { }
  
  
  ngOnInit(): void {
    const data = this.service.getDataByReg();
    data.subscribe((responsedata)=>{
      if(responsedata.message=="Yup"){
        console.log(responsedata.data);
        this.Studentdata = responsedata.data;
      }
    });
  }

}
