import { Component, OnInit } from '@angular/core';
import { FormControl,FormControlDirective,FormGroup,Validator, Validators } from '@angular/forms';
import {Router} from '@angular/router'
import {NontechStaffService} from '../../Services/nontech-staff.service';
import {TeacherService} from '../../Services/teacher.service';
import {StudentService} from '../../student.service';
@Component({
  selector: 'app-nontech-staff-reg',
  templateUrl: './nontech-staff-reg.component.html',
  styleUrls: ['./nontech-staff-reg.component.css']
})
export class NontechStaffRegComponent implements OnInit {
formRegister = new FormGroup({
  userid: new FormControl(null, Validators.required),
  password : new FormControl(null,Validators.required),
  confirmpassword : new FormControl(null,Validators.required)
})
  constructor(private ntService:NontechStaffService,private route:Router ,private thService:TeacherService,private stService:StudentService) { }

  ngOnInit(): void {
  }
  Register(){
    console.log(this.formRegister.value);
    if(this.formRegister.valid){
      if(this.formRegister.value.password == this.formRegister.value.confirmpassword){

        if(this.formRegister.value.userid.substring(0,3) == "STJ"){
         const data = this.stService.register(this.formRegister.value.userid,this.formRegister.value.password);
         console.log("1");
         data.subscribe((resposedata)=>{
           console.log(resposedata);
           if(resposedata.message == "Registered successfully"){
             this.route.navigateByUrl('/login')
           }
         })
        }
      }
    }else{
      alert("No");
    }
  }
}
