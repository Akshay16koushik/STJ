import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showFiller = false;
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  LoginPage(){
this.route.navigateByUrl('/login')
  }
  RegisterPage(){
    this.route.navigateByUrl('/nontechstaffreg')
  }
}
