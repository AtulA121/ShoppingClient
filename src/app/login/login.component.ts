import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginObj : Object={};

  constructor(private _auth : AuthService,private _router : Router) { }

  ngOnInit() {
  }

  login()
  {
    console.log("login data : ",this.loginObj);
    this._auth.loginUser(this.loginObj).subscribe((res)=>{
      console.log("response : ",res);
      if(res.result)
      {
        localStorage.setItem("token",res.token);
        this._router.navigate(["/specialEvents"]);
      }
    },(error)=>{
      console.log("error : ",error);
    });
  }

}
