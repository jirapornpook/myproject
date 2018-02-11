import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase-service.service';
import {ProfileInfo} from '../../module/profile-info';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private firebaseService: FirebaseService,
    private router: Router) { }

  ngOnInit() {
  }

  loginFacebook(){
    this.firebaseService.loginWithFacebook().then(
      (data:ProfileInfo)=>{
        this.router.navigate(['/home']);
      }, (responseFail) => {
        this.router.navigate(['/']);
      });
  }
}
