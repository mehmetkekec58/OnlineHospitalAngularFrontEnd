import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { FunctionsService } from './functions.service';
import { ProfileService } from './profile.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
user:User={id:0,userName:"",firstName:"",lastName:""}
  constructor(private profileService:ProfileService,private functionsService:FunctionsService) { }

  userInformation(){
let username =this.functionsService.getUserName();
this.profileService.getProfileDetail(username).subscribe(response=>{
  response.data.forEach(e => {
    this.user.id=e.id,
    this.user.firstName=e.firstName,
    this.user.lastName=e.lastName,
    this.user.userName=e.userName
    
  });
})
return this.user;
  }
}
