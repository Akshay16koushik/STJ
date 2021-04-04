import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, NgForm} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';
import {TeacherService} from '../../Services/teacher.service';
@Component({
  selector: 'app-notech-edit-teacher',
  templateUrl: './notech-edit-teacher.component.html',
  styleUrls: ['./notech-edit-teacher.component.css']
})
export class NotechEditTeacherComponent implements OnInit {
  currentage:string;
  subjecttaken:string;
  designation:string;
  takingcalss:string
  constructor(private route:Router,private dialog:MatDialogRef<NotechEditTeacherComponent>,private formbuilder:FormBuilder,private service:TeacherService) { }
  private Student:Object;
  private id:String;
  formValues:any;
  ngOnInit(): void {
    this.Student=this.Student = this.service.getData();
    this.id=this.Student['_id'];
    // console.log(this.Student);
    this.formValues = this.formbuilder.group({
      teacherName:[this.Student['teacherName']],
      teacherAge:[this.Student['teacherAge']],
      teacherPhonenumber:[this.Student['teacherPhonenumber']],
      teacherAddress:[this.Student['teacherAddress']],
      teacherSex:[this.Student['teacherSex']],
      teacherBoard:[this.Student['teacherBoard']],
      teacherDesignation:[this.Student['teacherDesignation']]

    })
  }
  options:string[] =['subject teacher','class teacher','PT teacher'];
  subjects:string[] =['Science','Social Scienc','Mathematics','English','Kannada','Phycial Education teacher'];
  age:string[]=['20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61', '62', '63', '64', '65', '66', '67', '68', '69']
  classes:string[] =['1st','2nd','3rd','4th','5th','6th','7th','8th','9th','10th'];
  Editnontechstaff(form:NgForm){
     console.log(form.value.teacherBoard);
  const data =  this.service.Updatenontech(this.id,form.value.teacherName,form.value.teacherSex,form.value.teacherAge,form.value.teacherAddress,form.value.teacherPhonenumber,form.value.teacherBoard);
  data.subscribe((responsedata)=>{
    if(responsedata.message ==="Teacher details updated"){
      this.onClose();
      alert(responsedata.message);
      window.location.reload();
      this.onClose();
    }
    
  })
  }
  back(){
    this.onClose();
  }
  onClose(){
    this.dialog.close();
  }
}
