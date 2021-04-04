import { Component, OnInit } from '@angular/core';
import {NontechStaffService} from '../../Services/nontech-staff.service';
import {TeacherService} from '../../Services/teacher.service';
import {StudentService} from '../../student.service';
import {Router} from '@angular/router';
import {TeacherteacherService} from '../../Teacher/teacherteacher.service';
@Component({
  selector: 'app-nontechstafflogin',
  templateUrl: './nontechstafflogin.component.html',
  styleUrls: ['./nontechstafflogin.component.css']
})
export class NontechstaffloginComponent implements OnInit {

  constructor(private Staffsrevice:NontechStaffService,private route:Router,private TeacherService:TeacherService,private Studentservice:StudentService,private ttservice:TeacherteacherService) { }

  ngOnInit(): void {
  }
login(form){
//  console.log(form.value);
 if((form.value.userid!= "" && form.value.userid !=null )&& (form.value.userpassword != "" && form.value.userpassword != null)){
  if(form.value.userid[0] =='T'){
    this.ttservice.setID(form.value.userid);
    const data = this.TeacherService.login(form.value.userid,form.value.userpassword);
    data.subscribe((responsedata)=>{
      if(responsedata.message=="Login Successfull"){
        this.route.navigateByUrl('/techerhome')
      }
    })
  }
  
  else if(form.value.userid.substring(0,3)=="STJ"){
      const data = this.Studentservice.login(form.value.userid,form.value.userpassword);
      data.subscribe((responsedata)=>{
        if(responsedata.message == "Login Successfull...."){
          alert(responsedata.message);
          console.log(form.value.userid);
          this.Studentservice.setReg(form.value.userid);
          console.log(this.Studentservice.getReg());
          this.route.navigateByUrl('/studentmain');
        }else{
          alert(responsedata.message);
        }
      })
  }
  else{
    const data = this.Staffsrevice.LOG(form.value.userid,form.value.userpassword);
    data.subscribe((responsedata,)=>{
      if(responsedata.message =="Login Successfull"){
        alert(responsedata.message);
        console.log( typeof responsedata.token)
        let token = responsedata.token;
        localStorage.setItem('token',token);
        this.route.navigateByUrl('/nontechhomepage');
      }
      else{
        alert(responsedata.message);
      }
    })
  }


 
 }else{
   alert("Bye");
 }
}
}
