import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Fallow } from 'src/app/models/fallow';
import { FallowedCount } from 'src/app/models/fallowedCount';
import { Profile } from 'src/app/models/profile';
import { AuthService } from 'src/app/services/auth.service';
import { FallowService } from 'src/app/services/fallow.service';
import { FunctionsService } from 'src/app/services/functions.service';

import { ProfileService } from 'src/app/services/profile.service';


@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profiles:Profile[]=[]
article=true
 fallow:Fallow={fallowedUserName:"", fallowingUserName:""};
 fallowedCount:FallowedCount={fedCount:0,fingCount:0};
 samePerson=false;
isThereProfile=true
fallow2:Fallow={fallowedUserName:"", fallowingUserName:""};
fallow3:Fallow={fallowedUserName:"", fallowingUserName:""};
isFallowing1=false;
  constructor(private authservice:AuthService,private functionsService:FunctionsService,private toaster:ToastrModule ,private fallowService:FallowService ,private profileService:ProfileService,private activatedRoute:ActivatedRoute, private toastrService:ToastrService,private router:Router) { }

  ngOnInit(): void {
    this.isFallowing();
   this.SamePersonControl();
   this.getFallowedCount()
    this.activatedRoute.params.subscribe(params=>{
      if (params["userName"]) {
        this.getProfilesDetail(params["userName"])
      }else{
this.router.navigate(["/"])
      }
    })
  }
  getProfilesDetail(userName:string){
this.profileService.getProfileDetail(userName).subscribe(response=>{
  if(response.data.length!=0){
  this.profiles=response.data

  response.data.forEach(e => {

    if (e.articleDetail==null) {
      this.article=false
    }

  });}
  else{
this.isThereProfile=false
  }
})}

getFallowed(){
  if (this.authservice.isAuthenticated()==true) {
    this.activatedRoute.params.subscribe(params=>{


      this.fallow.fallowedUserName=params["userName"];
       this.fallow.fallowingUserName=this.functionsService.getUserName();

       //console.log("merhaba"+this.fallow.fallowedUserName+ " "+this.fallow.fallowingUserName)

         this.fallowService.getFallow(this.fallow).subscribe(response=>{
           this.toastrService.success("Takip edildi")
           window.location.reload()
      //   console.log(response)
       },responseError=>{
         this.toastrService.error(responseError.error.message)

       })
     // })

    })
  }else{
    this.toastrService.info("Lütfen giriş yapınız.");
  }

}
SamePersonControl(){
  this.activatedRoute.params.subscribe(params=>{
  if (this.functionsService.getUserName()==params["userName"]) {
    this.samePerson=true



}
})
}
getFallowedCount(){
  this.activatedRoute.params.subscribe(params=>{
   this.fallowService.getFallowedCount(params["userName"]).subscribe(response=>{
    this.fallowedCount.fedCount=response.data.fedCount;
    this.fallowedCount.fingCount=response.data.fingCount;

   // console.log(response.data.fedCount+"   "+params["userName"])
   })

})
}
goProfileUpdate(username:string){
  this.router.navigate(["profiles/"+username+"/update"])
}
isFallowing(){
  this.activatedRoute.params.subscribe(params=>{
  if (this.functionsService.getUserName() !== params["userName"] ) {

  }
  this.fallow2.fallowingUserName = this.functionsService.getUserName();
  this.fallow2.fallowedUserName = params["userName"]
  this.fallowService.isFallowing(this.fallow2).subscribe(response=>{
//console.log(response.message)
   if(response.message=="1"){
this.isFallowing1=true
   }else{
     this.isFallowing1=false
   }
  })
})
}
unFallow(){
  this.activatedRoute.params.subscribe(params=>{

    this.fallow3.fallowedUserName=params["userName"]
    this.fallow3.fallowingUserName=this.functionsService.getUserName()

    this.fallowService.unFallow(this.fallow3).subscribe(response=>{

     window.location.reload()
   //  console.log(response.message)
    })
  })
}
chat(username:string){
  this.router.navigate(["chat/"+username])
}
}
