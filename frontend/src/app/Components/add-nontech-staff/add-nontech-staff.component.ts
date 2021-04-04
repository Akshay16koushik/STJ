import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validator, Validators } from '@angular/forms';
import {NontechStaffService} from '../../Services/nontech-staff.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-add-nontech-staff',
  templateUrl: './add-nontech-staff.component.html',
  styleUrls: ['./add-nontech-staff.component.css']
})
export class AddNontechStaffComponent implements OnInit {
  StaffData = new FormGroup({
    name:new FormControl(null,Validators.required),
    sex:new FormControl(null,Validators.required),
    age:new FormControl(null,Validators.required),
    designation:new FormControl(null,Validators.required),
    phno:new FormControl(null,Validators.required),
    address:new FormControl(null,Validators.required)
  })
  constructor(private service:NontechStaffService ,  private route:Router) { }

  ngOnInit(): void {
    this.service.CheckUser(localStorage.getItem('token')).subscribe((responsedata)=>{
      if(responsedata.message == "Unauthorized request"){
        this.route.navigateByUrl('/login');
      }else{
        console.log(responsedata['uniqueId']  );
      }
    })
  }
options:string[]=['Office Assistant','Attendar','House Keeping']
AddStaff(){
  console.log(this.StaffData.value);
  
  
  if(this.StaffData.valid){
    let date = new Date()
    let today = date.getUTCFullYear();
    console.log(typeof today);
    let DobtoString = this.StaffData.value.age.toString();
    let arrayOfDob = DobtoString.split(' ');
    let bornYear = Number(arrayOfDob[3]);
let age = (today-bornYear).toString();
    const data = this.service.ADD(this.StaffData.value.name,age,this.StaffData.value.sex,this.StaffData.value.designation,this.StaffData.value.address,this.StaffData.value.phno);
    data.subscribe((responsedata)=>{
      alert(responsedata.message);
      window.location.reload();
    })
  }else{
    alert("No");
  }
//    console.log(form.value.sex);
//  
//   \;
//  
//   
//  
//   let address = form.value.flatno +" "+ form.value.street +" "+form.value.city +" "+ form.value.state +" "+form.value.pincode+" "+form.value.country;

//   alert(address);
//  const data = this.service.ADD(name,age,sex,designation,address,phno);
//  data.subscribe((responsedata)=>{
//    alert(responsedata.message);
//    window.location.reload();
//  })


}
back(){
  this.route.navigateByUrl('/nontechhomepage')
}
}
