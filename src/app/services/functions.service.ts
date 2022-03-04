import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {

  constructor(private activeRoute:ActivatedRoute) { }

  getUserName(){
   let username : string = localStorage.getItem("username")
 return username;
  }

  getToken(){
 let token :string = localStorage.getItem("token")
 return token;
  }

  removeUserName(){

    localStorage.removeItem("username")
  }
  removeToken(){
    localStorage.removeItem("token")
  }
  setUserName(userName:string){
    localStorage.setItem("username",userName)
  }
  setToken(token:string){
    localStorage.setItem("token",token)
  }
 /*getOtherPersonUserName(){
  this.activeRoute.params.subscribe(params=>{
    return params["userName"]
 })
  }*/
}
