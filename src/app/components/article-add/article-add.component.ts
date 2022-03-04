import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ArticleService } from 'src/app/services/article.service';
import { FunctionsService } from 'src/app/services/functions.service';

@Component({
  selector: 'app-article-add',
  templateUrl: './article-add.component.html',
  styleUrls: ['./article-add.component.css']
})
export class ArticleAddComponent implements OnInit {

articleAddForm:FormGroup

  constructor(private formBuilder:FormBuilder,private functionsService:FunctionsService,private articleService:ArticleService,private router:Router, private toastrService:ToastrService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.createArticleAddForm()
  }

  createArticleAddForm(){
    this.activatedRoute.params.subscribe(params=>{
    this.articleAddForm= this.formBuilder.group({
      title:["",Validators.required],
      text:["",Validators.required],
      userName:[params["userName"],Validators.required]
    })})
      }
      add(){
        if(this.articleAddForm.valid){
          let articleModel = Object.assign({},this.articleAddForm.value)
          this.articleService.add(articleModel).subscribe(response=>{
            this.toastrService.success(response.message)
            this.router.navigate(["profiles/"+this.functionsService.getUserName()])
          },responseError=>{
                this.toastrService.error(responseError.error.Message)
          })

        }else{
          this.toastrService.error("Formunuz eksik","Dikkat")
        }


      }

}
