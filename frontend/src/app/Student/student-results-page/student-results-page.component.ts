import { Component, OnInit } from '@angular/core';
// import {FormControl} from '@angular/forms';
// import { ConsoleReporter } from 'jasmine';
import {CbscMarksService} from '../../Services/cbsc-marks.service';
import {MatTableDataSource} from '@angular/material/table';
import {Router} from '@angular/router';
import {CbscStudentmarksModel} from '../../Model/CbscStudentmarksModel';

@Component({
  selector: 'app-student-results-page',
  templateUrl: './student-results-page.component.html',
  styleUrls: ['./student-results-page.component.css']
})
export class StudentResultsPageComponent implements OnInit {
  selectedexam:String;
  displayedColumns:String[]=["Kannada","English","Hindi","Mathematics","Science","Social Studies"];
  public dataSource = new MatTableDataSource<CbscStudentmarksModel>();
  MarksData:any;
  constructor(private service:CbscMarksService,private route:Router) { }

  ngOnInit(): void {
  }
  results = [
   'Monthly Test 1',
   'Monthly Test 2' ,
   'Monthly Test 3' ,
   'Monthly Test 4',
   'MidTerm',
   'FinalTerm'
  ];
  onSelect(data){
    console.log(data);
    const marks = this.service.GetResult(data);
    marks.subscribe((responsedata)=>{
      this.MarksData = responsedata.data;
      this.dataSource = new MatTableDataSource(this.MarksData);
    })
    
  }
  back(){
    this.route.navigateByUrl('/studentmain');
  }

}
