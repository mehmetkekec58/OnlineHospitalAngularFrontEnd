import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fallow } from '../models/fallow';
import { FallowedCount } from '../models/fallowedCount';
import { FingAndFedList } from '../models/fingAndFedList';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class FallowService {
apiUrl="https://localhost:44347/api/fallows/"
  constructor(private httpClient:HttpClient) { }

  getFallow(fallow:Fallow){
    let newApiUrl=this.apiUrl+"fallow"
return this.httpClient.post<SingleResponseModel<Fallow>>(newApiUrl,fallow);
  }

  getFallowedCount(userName:string){
    let newApiUrl=this.apiUrl+"fallowcount?username="+userName
    return this.httpClient.get<SingleResponseModel<FallowedCount>>(newApiUrl);
  }
  getFalowedAndFallowingList(userName:string){
    let newApiUrl=this.apiUrl+"fallowcount?username="+userName
    return this.httpClient.get<SingleResponseModel<FingAndFedList>>(newApiUrl);
  }
  unFallow(fallow:Fallow){
    let newApiUrl = this.apiUrl+"unfallow"
    return this.httpClient.post<SingleResponseModel<Fallow>>(newApiUrl,fallow);
  }
  isFallowing(fallow:Fallow){
    let newApiUrl = this.apiUrl+"isfallowing"
    return this.httpClient.post<SingleResponseModel<Fallow>>(newApiUrl,fallow)
  }

}
