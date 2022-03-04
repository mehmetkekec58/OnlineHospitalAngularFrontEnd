import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder, Validators  } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private toastrService:ToastrService,private authService:AuthService) { }

  ngOnInit(): void {
    this.createRegisterFrom();
  }
  createRegisterFrom(){
    this.registerForm= this.formBuilder.group({
      firstname:["",Validators.required],
      lastname:["",Validators.required],
      username:["",Validators.required],
      email:["",Validators.required],
      password:["",Validators.required]
    })
  }
  register(){
    if(this.registerForm.valid){
      console.log(this.registerForm.value)
      let registerModel=Object.assign({}, this.registerForm.value)
      this.authService.register(registerModel).subscribe(response=>{
        this.toastrService.info(response.message)
       // localStorage.setItem("token",response.data.token)
        
      }, responseError=>{
        this.toastrService.error(responseError.error)
        
      })

  }
}}
