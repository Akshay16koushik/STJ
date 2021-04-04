import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NontechStaffService} from '../../Services/nontech-staff.service';
@Component({
  selector: 'app-nontech-homepage',
  templateUrl: './nontech-homepage.component.html',
  styleUrls: ['./nontech-homepage.component.css']
})
export class NontechHomepageComponent implements OnInit {

  constructor(private route:Router,private service:NontechStaffService) { }

  ngOnInit(): void {
    this.service.CheckUser(localStorage.getItem('token')).subscribe((responsedata)=>{
      console.log(responsedata.message);
      if(responsedata.message == "Unauthorized request"){
        this.route.navigateByUrl('/login');
      }else{
        console.log(responsedata['uniqueId']  );
      }
    })
  }
  Nontech(){
    alert("Add Nontech staff");
    this.route.navigateByUrl('/nontechstaffadd')
  }
  Teacher(){
    alert("Add Teacher");
    this.route.navigateByUrl('/nontechaddtech')
  }
  Student(){
    alert("Add Student");
    this.route.navigateByUrl('/nontechaddstd');
  }
  ViewNontech(){
    alert("View Nontech staff");
    this.route.navigateByUrl('/nontechviewnontech');
  }
  ViewTeacher(){
    alert("View Teacher");
    this.route.navigateByUrl('/nontechviewteacher');
  }
  ViewStudent(){
    alert("View Student");
    this.route.navigateByUrl('/nontechviewstudent');
  }
  EditNontech(){
    alert("Edit Nontech");
     this.route.navigateByUrl('/nontecheditnontech');
  }
  EditTeacher(){
    alert("Edit teacher");
    this.route.navigateByUrl('/nontecheditteacher');
  }
  EditStudent(){
    alert("Edit Student")
    this.route.navigateByUrl('/nontecheditstudent');
  }
  UpdateNotficationbar(){
    alert("Update Notification")
    this.route.navigateByUrl('/nontechupdatenotification')
  }
}
