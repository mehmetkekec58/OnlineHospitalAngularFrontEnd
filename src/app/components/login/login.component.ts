import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder, Validators  } from "@angular/forms";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { FunctionsService } from 'src/app/services/functions.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private functionsService:FunctionsService,private authService:AuthService, private toastrService:ToastrService,private router:Router) { }

  ngOnInit(): void {
    this.createloginFrom();
    this.goProfile();
  }
createloginFrom(){
  
  this.loginForm= this.formBuilder.group({
    email:["",Validators.required],
    password:["",Validators.required]
  })
}
login(){
  if(this.loginForm.valid){
    console.log(this.loginForm.value)
    let loginModel=Object.assign({}, this.loginForm.value)

    this.authService.login(loginModel).subscribe(response=>{
      this.toastrService.info(response.message)
      this.functionsService.setToken(response.data.token)
      this.functionsService.setUserName(response.data.userName)
     
    
      window.location.reload()
  
      
    }, responseError=>{
      this.toastrService.error(responseError.error)
      
    })
  }
}
goProfile(){
  if(this.authService.isAuthenticated()){
    this.router.navigate(["profiles/"+this.functionsService.getUserName()])
  }
}
}
