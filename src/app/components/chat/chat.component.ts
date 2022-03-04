import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Profile } from 'src/app/models/profile';
import { FunctionsService } from 'src/app/services/functions.service';
import { MessageService } from 'src/app/services/message.service';
import { ProfileService } from 'src/app/services/profile.service';
import { FormGroup,FormBuilder, Validators } from "@angular/forms";

import { ToastrService } from 'ngx-toastr';
import { DatePipe, getLocaleDateTimeFormat } from '@angular/common';
import { MessageModel } from 'src/app/models/messagesModel';
import { MessageList } from 'src/app/models/messageListModel';
import { ProfilePhotoUrl } from 'src/app/models/profilePhotoUrl';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
isThereUserName1=false;
profiles:Profile[]=[];
isThereProfile=false;
messageAddForm:FormGroup
onunGonderdigi:MessageModel[]=[]
bizimGonderdigimiz:MessageModel[]=[]
birlesim:MessageModel[]=[]
messageProfile:ProfilePhotoUrl[]=[]
photoUrl:string;
//date = new Date();
  constructor(private activatedRoute:ActivatedRoute,private toastrService:ToastrService, private formBuilder:FormBuilder, private messageService:MessageService ,private profilService:ProfileService,private functionsService:FunctionsService,private router:Router) {

   }

  ngOnInit(): void {
    this.isThereUserName()
    this.getProfileDetail()
    this.createArticleAddForm()
    this.getListMessages();

  }
isThereUserName(){
  this.activatedRoute.params.subscribe(params=>{
    if(params["userName"] ){
this.isThereUserName1=true;
if ( params["userName"]==this.functionsService.getUserName()) {
  this.router.navigate(["/chat"])
}}else{
  this.router.navigate(["/chat"])
}



  })
}
getProfileDetail(){
  this.activatedRoute.params.subscribe(params=>{
    this.profilService.getProfileDetail(params["userName"]).subscribe(response=>{
      if(response.data.length!=0){
  this.profiles=response.data
      }else{
        this.router.navigate(["/chat"])
      }
    })
  })

}
goProfile(userName:string){
  this.router.navigate(["profiles/"+userName])
}

sendMessage(){
  if(this.messageAddForm.valid){
  let messageModel = Object.assign({},this.messageAddForm.value)
this.messageService.sendMessage(messageModel).subscribe(response=>{
 // console.log(response.message)
 window.location.reload()


})
}else{
  this.toastrService.warning("Lütfen bir şeyler yazıp gönderin")
}
}
createArticleAddForm(){


  this.activatedRoute.params.subscribe(params=>{
  this.messageAddForm= this.formBuilder.group({

    text:["",Validators.required],
    gonderenUserName:[this.functionsService.getUserName(),Validators.required],
    alanUserName:[params["userName"],Validators.required],
    date:[new Date(),Validators.required],
    isRead:[false,Validators.required]

  })
    })}

getListMessages(){
  this.activatedRoute.params.subscribe(params=>{
  this.messageService.getMessageList(params["userName"],this.functionsService.getUserName()).subscribe( response=>{
    console.log(response.data.bizimGonderdigimiz)
    this.bizimGonderdigimiz=response.data.bizimGonderdigimiz
console.log(response.data.onunGonderdigi)

this.onunGonderdigi=response.data.onunGonderdigi
this.birlesim=this.bizimGonderdigimiz.concat(this.onunGonderdigi)
this.birlesim.sort(function(a, b) {
  return new Date(a.date).getTime() - new Date(b.date).getTime()
});
console.log(this.birlesim)
    /* response.data.forEach(e=>{
      this.onunGonderdigi= e.onunGonderdigi
     })*/
  })})
}
class(gonderenUserName:string){

if (gonderenUserName==this.functionsService.getUserName()) {
  return "chat-message-right pb-4"
}else{
  return "chat-message-left pb-4"
}

}
getprofilePhoto(){
this.profiles.find(p=>p.profilePhotoUrl.forEach(e=>{
 this.photoUrl= e.imagePath
}))

return this.photoUrl;
  /*this.profilService.getProfileDetail(this.functionsService.getUserName()).subscribe(response=>{
    response.data.forEach(e=>{
    this.messageProfile=e.profilePhotoUrl
    })
  })
 this.messageProfile.forEach(a=>{
  this.photoUrl[0]=a.imagePath
})
this.activatedRoute.params.subscribe(params=>{
this.profilService.getProfileDetail(params["userName"]).subscribe(response=>{
  response.data.forEach(e=>{
  this.messageProfile=e.profilePhotoUrl
  })
})
this.messageProfile.forEach(a=>{
this.photoUrl[1]=a.imagePath
})})

console.log(this.photoUrl[0]+"   ?   "+ this.photoUrl[1])
return this.photoUrl;


}*/

  }
  class2(gonderenUserName:string){

    if (gonderenUserName==this.functionsService.getUserName()) {
      return "flex-shrink-1 bg-success rounded py-2 px-3 mr-3"
    }else{
      return "flex-shrink-1 bg-danger rounded py-2 px-3 mr-3"
    }

    }
}
