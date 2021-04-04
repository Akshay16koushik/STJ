import { Component, OnInit,ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {StudentService} from '../../student.service';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import {NotechEditStudentComponent} from '../../Components/notech-edit-student/notech-edit-student.component';
import {nontechStudentModel} from '../../Model/nontechStudentModel';
@Component({
  selector: 'app-view-nontech-student',
  templateUrl: './view-nontech-student.component.html',
  styleUrls: ['./view-nontech-student.component.css']
})
export class ViewNontechStudentComponent implements OnInit {
  displayedColumns:string[]=['studentRegisterNumber','studentName','studentFatherName','studentMotherName','studentSex','studentBloodGroup','parentNumber','studentParmanentAddress','studentExistingAddress','studentClass','studentFee','studentRemainingFee','edit','delete'];
  public dataSource = new MatTableDataSource<nontechStudentModel>();
  studentData:any;
  dataLength:Number;
  @ViewChild(MatPaginator,{static:true})paginator:MatPaginator;
  constructor(private service:StudentService,private dialog:MatDialog) { }
  ngOnInit(): void {
    this.service.Viewnontech().subscribe((responsedata)=>{
      this.studentData = responsedata.data;
      this.dataSource = new MatTableDataSource(this.studentData);
      this.dataLength = this.studentData.length;
      this.dataSource.paginator = this.paginator;
    })
  }
  onEdit(data){
this.service.setData(data);
const dialogConfig = new MatDialogConfig();
dialogConfig.disableClose =true;
dialogConfig.autoFocus = true;
dialogConfig.width="36%";
this.dialog.open(NotechEditStudentComponent,dialogConfig);
  }
  ondelete(data){
    let id = data['_id']
   const answer = confirm("Are you sure you want to delete this record?");
   if(answer){
    const data = this.service.Deletenontech(id);
    data.subscribe((responsedata)=>{
        if(responsedata.message =="Deleted Student details"){
          alert(responsedata.message);
          window.location.reload();
        }
        else{
          alert("Couldn't delete");
        }
    })
   }else{
     alert("Bye");
   }
  }

}
