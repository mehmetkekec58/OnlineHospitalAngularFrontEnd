import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { RegisterModel } from '../models/registerModel';
import { ResponseModel } from '../models/ResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';
import { FunctionsService } from './functions.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl="https://localhost:44347/api/auth/"
  constructor(private httpClient:HttpClient,private functionsService:FunctionsService) { }
 login(loginModel:LoginModel){
   return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"login",loginModel)
 }
 isAuthenticated(){
   if (this.functionsService.getToken()) {
     return true;
   }else{
     return false;
   }
 }
 register(registerModel:RegisterModel){
return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"register",registerModel)
 }
}
