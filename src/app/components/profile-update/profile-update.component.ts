import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/profile';
import { FunctionsService } from 'src/app/services/functions.service';
import { ProfileService } from 'src/app/services/profile.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.css']
})
export class ProfileUpdateComponent implements OnInit {

profileDetail:Profile[]=[]
  constructor(private profileService:ProfileService,private functionsService:FunctionsService) { }

  ngOnInit(): void {
    this.getProfileDetail()
  }
getProfileDetail(){
this.profileService.getProfileDetail(this.functionsService.getUserName()).subscribe(response=>{
 console.log(response.data)
   this.profileDetail= response.data

})
}
}
