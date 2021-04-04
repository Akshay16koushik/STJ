import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {Router} from '@angular/router';
 import {FormBuilder} from '@angular/forms';
import {NontechStaffService} from '../../Services/nontech-staff.service';
@Component({
  selector: 'app-notech-edit-nontech',
  templateUrl: './notech-edit-nontech.component.html',
  styleUrls: ['./notech-edit-nontech.component.css']
})
export class NotechEditNontechComponent implements OnInit {
  currentage:string;
  designation:string;
  constructor(private route:Router,private dialog:MatDialogRef<NotechEditNontechComponent>,private formbuilder:FormBuilder,private service:NontechStaffService) { }
private staff:Object;
private id:string;
formValues:Object;
  ngOnInit(): void {
    this.staff = this.service.getData();
    console.log(this.staff);
    this.id = this.staff['_id'];
    // alert(this.staff['staffName'])
     this.formValues = this.formbuilder.group({
      staffName: [this.staff['staffName']],
      staffDesignation:[this.staff['staffDesignation']],
      staffAge:[this.staff['staffAge']],
      staffSex:[this.staff['staffSex']],
      staffAddress:[this.staff['staffAddress']],
      staffPhno:[this.staff['staffPhno']]
     });
    
  }
  age:string[]=['20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61', '62', '63', '64', '65', '66', '67', '68', '69'];
  options:string[]=['Office Assistant','Attendar','House Keeping'];
  Editnontechstaff(form){
    const data = this.service.Updatenontech(this.id,form.value.staffName,form.value.staffAge,form.value.staffSex,form.value.staffDesignation,form.value.staffAddress,form.value.staffPhno);
    data.subscribe((responsedata)=>{
      if(responsedata.message ==="Edited"){
        alert(responsedata.message);
        window.location.reload();
        this.onClose();
       
        // this.onClose();
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
