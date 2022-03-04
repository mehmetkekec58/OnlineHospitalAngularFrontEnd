import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { Fallow2 } from 'src/app/models/fallow2';
import { ArticleService } from 'src/app/services/article.service';
import { FallowService } from 'src/app/services/fallow.service';
import { FunctionsService } from 'src/app/services/functions.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  constructor(private functionsService:FunctionsService,private fallowService:FallowService, private articleService:ArticleService) { }
articles:Article[]=[]
  ngOnInit(): void {
   // this.getFallowedArticle(this.functionsService.getUserName())
  }
/*getFallowedArticle(username:string){
  this.fallowService.getFalowedAndFallowingList(username).subscribe(response=>{
   
   response.data.fedList.forEach(e=>{
   this.articleService.getArticleDetailByUserName(e.fallowedUserName).subscribe(response=>{
    response.data.forEach(e=>{
     console.log(e.text) 
    })
   

   })
   })
})
}*/
}