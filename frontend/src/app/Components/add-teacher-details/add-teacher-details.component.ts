import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import {TeacherService} from '../../Services/teacher.service';
import {NontechStaffService} from '../../Services/nontech-staff.service';
@Component({
  selector: 'app-add-teacher-details',
  templateUrl: './add-teacher-details.component.html',
  styleUrls: ['./add-teacher-details.component.css']
})
export class AddTeacherDetailsComponent implements OnInit {

  constructor(private route:Router,private service:TeacherService,private notechService:NontechStaffService) { }
  currentage:string;
  subjecttaken:string;
  designation:string;
  takingcalss:string;
  board:String;
  ngOnInit(): void {
    this.notechService.CheckUser(localStorage.getItem('token')).subscribe((responsedata)=>{
      if(responsedata.message == "Unauthorized request"){
        this.route.navigateByUrl('/login');
      }else{
        console.log(responsedata['uniqueId']  );
      }
    })
  }
  options:string[] =['subject teacher','class teacher','PT teacher'];
  subjects:string[] =['Science','Social Scienc','Mathematics','English','Kannada','Phycial Education teacher'];
  age:string[]=['20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61', '62', '63', '64', '65', '66', '67', '68', '69']
  classes:string[] =['1st','2nd','3rd','4th','5th','6th','7th','8th','9th','10th'];
  teacherBoard:string[]=['State','Cbsc'];
  onAddTeacher(form){

    let teacherName=form.value.teachername;
    let teacherSex=form.value.sex;
    let teacherAge=form.value.teacherage;
    let teacherSubject=form.value.teachersubject;
    let teacherDesignation=form.value.teacherdesignation;
    let teacherAddress=form.value.parmanentaddress;
    let teacherPhonenumber=form.value.phonenumber;
    let teacherAssignedClasses=form.value.teacherassignedclass;
    let teacherBoard = form.value.teacherBoard;
    console.log(teacherName,teacherSex,teacherAge,teacherSubject,teacherDesignation,teacherAddress,teacherPhonenumber,teacherAssignedClasses);
    const data = this.service.PostDet(teacherName,teacherSex,teacherAge,teacherSubject,teacherDesignation,teacherAddress,teacherPhonenumber,teacherAssignedClasses,teacherBoard);
    data.subscribe((responsedata)=>{
      alert(responsedata.message);
    })
  }
  back(){
    this.route.navigateByUrl('/nontechhomepage');
  }
}
