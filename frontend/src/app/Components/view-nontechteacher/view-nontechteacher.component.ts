import { Component, OnInit,ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {TeacherService} from '../../Services/teacher.service';
import {NotechEditTeacherComponent} from '../notech-edit-teacher/notech-edit-teacher.component';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import {nontechTeacherModel} from '../../Model/nontechTeacherModel';
@Component({
  selector: 'app-view-nontechteacher',
  templateUrl: './view-nontechteacher.component.html',
  styleUrls: ['./view-nontechteacher.component.css']
})
export class ViewNontechteacherComponent implements OnInit {
  displayedColumns:string[]=['teacherName','teacherSex','teacherAge','teacherDesignation','teacherAddress','teacherPhonenumber' ,'board','edit','delete'];
  public dataSource = new MatTableDataSource<nontechTeacherModel>();
  teacherdata:any;
  dataLength:Number;
  @ViewChild(MatPaginator,{static:true})paginator:MatPaginator;
  constructor(private service:TeacherService,private dialog:MatDialog) { }


  ngOnInit(): void {
    this.service.Viewnontech().subscribe((responsedata)=>{
      this.teacherdata = responsedata.data;
      this.dataSource = new MatTableDataSource(this.teacherdata);
      this.dataLength = this.teacherdata.length;
      this.dataSource.paginator = this.paginator;
    })
  }
  onEdit(element){
    alert("Edit");
    this.service.setData(element);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="36%";
    this.dialog.open(NotechEditTeacherComponent,dialogConfig);
  }
  onDelete(data){
    const ans = confirm("Are you sure ? Do you want to delete this record?");
    if(ans){
      let id = data['_id'];
      const dat = this.service.Deletenontech(id);
      dat.subscribe((responsedata)=>{
        if(responsedata.message==="Teacher Deleted"){
          alert(responsedata.message);
          window.location.reload();
        }
      })
    }
  }
}
