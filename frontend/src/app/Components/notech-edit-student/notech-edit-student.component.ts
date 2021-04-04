import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';
import {StudentService} from '../../student.service';
@Component({
  selector: 'app-notech-edit-student',
  templateUrl: './notech-edit-student.component.html',
  styleUrls: ['./notech-edit-student.component.css']
})
export class NotechEditStudentComponent implements OnInit {

  constructor(private route:Router,private dialog:MatDialogRef<NotechEditStudentComponent>,private service:StudentService,private frombuilder:FormBuilder) { }
  formValues:object;
  private Student:Object; 
  private id:String;
  ngOnInit(): void {
    this.Student = this.service.getData();
    this.id = this.Student['_id'];
    console.log(this.Student);
    this.formValues = this.frombuilder.group({
      studentName:[this.Student['studentName']],
      studentRegisterNumber:[this.Student['studentRegisterNumber']],
      studentFatherName:[this.Student['studentFatherName']],
      studentMotherName:[this.Student['studentMotherName']],
      studentSex:[this.Student['studentSex']],
      parentNumber:[this.Student['parentNumber']],
      studentParmanentAddress:[this.Student['studentParmanentAddress']],
      studentExistingAddress:[this.Student['studentExistingAddress']],
      studentClass:[this.Student['studentClass']],
      studentFee:[this.Student['studentFee']],
      studentRemainingFee:[this.Student['studentRemainingFee']],
      studentBloodGroup:[this.Student['studentBloodGroup']],
      studentBoard:[this.Student['studentBoard']]
    })
  }
  EditStudent(form){
   const data = this.service.Updatenontech(this.id,form.value.studentRegisterNumber,form.value.studentName,form.value.studentFatherName,form.value.studentMotherName,form.value.studentSex,form.value.studentBloodGroup,form.value.parentNumber,form.value.studentParmanentAddress,form.value.studentExistingAddress,form.value.studentFee,form.value.studentBoard,form.value.studentRemainingFee);
   data.subscribe((responsedata)=>{
     if(responsedata.message ==="Student details Updated"){
       alert(responsedata.message);
       window.location.reload();
       this.onClose();
     }
   })
  }
  back(){
// this.route.navigateByUrl('/nontechhomepage');
this.onClose();
  }
  onClose(){
this.dialog.close()
  }
}
