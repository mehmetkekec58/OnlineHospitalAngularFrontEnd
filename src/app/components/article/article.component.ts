import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { FunctionsService } from 'src/app/services/functions.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
article:Article={id:0,title:"",text:"",userName:""};
isSelfIt=false;
  constructor(private articleService:ArticleService,private functionsService:FunctionsService,private activatedRoute:ActivatedRoute, private toastrService:ToastrService, private router:Router) { }

  ngOnInit(): void {
    this.isSelf();
    this.activatedRoute.params.subscribe(params=>{
      this.getArticleDetail(params["id"])
    })
  }
getArticleDetail(id:number){
this.articleService.getArticleDetail(id).subscribe(response=>{
this.article=response.data
})
}
articleDelete(article:Article){
this.articleService.delete(article).subscribe(response=>{
 this.toastrService.success(response.message) 
 this.router.navigate(["profiles/"+this.functionsService.getUserName()])
})
}
isSelf(){
this.activatedRoute.params.subscribe(params=>{
  if(params["userName"]==this.functionsService.getUserName()){
    this.isSelfIt=true;
  }else{
    this.isSelfIt=false;
  }
})
}
}
 