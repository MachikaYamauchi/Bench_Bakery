import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username:string = "";
  password:string = "";
  loginStatus:boolean = true;

  constructor(private cs:CommonService, private router:Router) { }

  login() {
    this.cs.login(this.username, this.password).subscribe(loginData=> {
      console.log(loginData);
      this.loginStatus = loginData.login;
      if(loginData.login) {
        console.log(loginData.data[0].id);
        localStorage.setItem("userID", JSON.stringify(loginData.data[0].id))
        this.router.navigate(['/admin']);
      }
    })
  }

  ngOnInit(): void {
  }

}
