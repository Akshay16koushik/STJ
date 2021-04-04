import { Component, OnInit } from '@angular/core';
import {StudentService} from '../../student.service';
import {Router} from '@angular/router';
import {NontechStaffService} from '../../Services/nontech-staff.service';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private service:StudentService,private route:Router,private nontechService:NontechStaffService) { }
  bloodgroupval:string;
  classjoinsed:string;
  currentage:string;
  stuboard:string;
  ngOnInit(): void {
    this.nontechService.CheckUser(localStorage.getItem('token')).subscribe((responsedata)=>{
      if(responsedata.message == "Unauthorized request"){
        this.route.navigateByUrl('/login');
      }else{
        console.log(responsedata['uniqueId']  );
      }
    })
  }
  bloodgroup:string[]=['A +ve','A -ve','B +ve','B -ve','AB +ve','AB -ve','O +ve','O -ve'];
  class:string[]=['1st','2nd','3rd','4th','5th','6th','7th','8th','9th','10th'];
  age:string[]=['5','6','7','8','9','10','11','12','13','14','15','16','17','18']
  board:string[]=['State syllabus','Cbsc syllabus'];
  onAddStudent(form){
console.log(form.value);
    let studentRegisterNumber= form.value.registernumber;
    let studentName= form.value.studentname;
    let studentFatherName= form.value.fathername;
    let studentMotherName= form.value.mothername;
    let studentAge= form.value.studentage;
    let studentSex= form.value.sex;
    let studentBloodGroup= form.value.bloodgroup;
    let parentNumber= form.value.parentnumber;
    let studentParmanentAddress= form.value.parmanentaddress;
    let studentExistingAddress= form.value.existingaddress;
    let studentClass= form.value.classassigned;
    let studentFee= form.value.studentfee;
    let studentBoard= form.value.studentboard;
   
   const data = this.service.addStud(studentRegisterNumber,studentName,studentFatherName,studentMotherName,studentAge,studentSex,studentBloodGroup,parentNumber,studentParmanentAddress,studentExistingAddress,studentClass,studentFee,studentBoard);
   data.subscribe((responsedata)=>{
     alert(responsedata.message)
   })
  }
  back(){
    this.route.navigateByUrl('/nontechhomepage');
  }
}
