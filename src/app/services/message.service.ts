import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { MessageList } from '../models/messageListModel';
import { MessageModel } from '../models/messagesModel';
import { ResponseModel } from '../models/ResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
ApiUrl="https://localhost:44347/api/messages/"
  constructor(private httpClient:HttpClient) { }

  getMessageList(alan:string,gonderen:string):Observable<SingleResponseModel<MessageModel>>{
let newApiUrl= this.ApiUrl+"list?alan="+alan+"&gonderen="+gonderen
return this.httpClient.get<SingleResponseModel<MessageModel>>(newApiUrl)
  }

  sendMessage(message:MessageModel){
    let newApiUrl= this.ApiUrl+"send"
return this.httpClient.post<ResponseModel>(newApiUrl,message)
  }
}
