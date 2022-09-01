import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  username:string = "";
  email:string = "";
  password:string = "";
  signupStatus = false;
  signupDisplay = "none";
  signupMessage:any = "";

  constructor(private cs:CommonService) { }

  signup() {
    this.cs.signup(this.username, this.email, this.password).subscribe(signupData=> {
      console.log(signupData);
      this.signupStatus = signupData.signup;
      this.signupDisplay = "block";
      this.signupMessage = signupData.message;
    })

  }

  ngOnInit(): void {
  }

}
