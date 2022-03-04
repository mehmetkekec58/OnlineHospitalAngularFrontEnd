import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";


import { Profile } from '../models/profile';
import { Observable } from 'rxjs';
import { SingleResponseModel } from '../models/singleResponseModel';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  apiUrl="https://localhost:44347/api/Profiles/"
  constructor(private httpClient:HttpClient) { }

getProfileDetail(userName:String):Observable<ListResponseModel<Profile>>{
  let newApiUrl = this.apiUrl+"getprofiledetailbyusername?userName="+userName;
  return this.httpClient.get<ListResponseModel<Profile>>(newApiUrl);

}
getProfileDetail2(userName:String):Observable<SingleResponseModel<Profile>>{
  let newApiUrl = this.apiUrl+"getprofiledetailbyusername?userName="+userName;
  return this.httpClient.get<SingleResponseModel<Profile>>(newApiUrl);

}
}
