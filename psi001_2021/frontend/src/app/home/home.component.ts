import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import {User} from "../user";
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  
  constructor() { 
   
  }

  ngOnInit() {

  }
}