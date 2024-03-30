import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {Photo} from '../photo';
import {User} from '../user';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-myphotos',
  templateUrl: './myphotos.component.html',
  styleUrls: ['./myphotos.component.css']
})
export class MyphotosComponent implements OnInit{

  currentUser: User;
  myPhotos: Photo[];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    let currentUserID = sessionStorage.getItem('id');
    this.userService.getUser(currentUserID)
    .subscribe(user => {
      this.currentUser = user;
      this.setPhotos();
    });
  }

  setPhotos() {
    this.myPhotos = this.currentUser.uploadedPhotos;
  }  
}
