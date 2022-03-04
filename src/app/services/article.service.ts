import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/article';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/ResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
apiUrl="https://localhost:44347/api/articles/"
  constructor(private httpClient:HttpClient) { }

  getArticleDetail(id:number):Observable<SingleResponseModel<Article>>{
    let newApiUrl=this.apiUrl+"getbyid?id="+id;
 return this.httpClient.get<SingleResponseModel<Article>>(newApiUrl);
  }

  add(article:Article):Observable<ResponseModel>{
    let newApiUrl=this.apiUrl+"add";
    return this.httpClient.post<ResponseModel>(newApiUrl,article);
  }
  delete(article:Article){
    let newApiUrl=this.apiUrl+"delete";
    return this.httpClient.post<ResponseModel>(newApiUrl,article)
  }
  getArticleDetailByUserName(username:string):Observable<ListResponseModel<Article>>{
   let newApiUrl =this.apiUrl+"getbyusername?username="+username;
    return this.httpClient.get<ListResponseModel<Article>>(newApiUrl);
  }
}
