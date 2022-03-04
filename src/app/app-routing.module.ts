import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleAddComponent } from './components/article-add/article-add.component';
import { ArticleComponent } from './components/article/article.component';
import { ChatComponent } from './components/chat/chat.component';
import { FallowingAndFallowedListComponent } from './components/fallowing-and-fallowed-list/fallowing-and-fallowed-list.component';

import { LoginComponent } from './components/login/login.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductComponent } from './components/product/product.component';
import { ProfileUpdateComponent } from './components/profile-update/profile-update.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginGuard } from './guards/login.guard';
//import { NologinGuard } from './guards/nologin.guard';

const routes: Routes = [
  {path:"",pathMatch:"full", component:MainpageComponent},
  {path:"products", component:ProductComponent},
  {path:"products/category/:categoryId", component:ProductComponent},
  {path:"products/add", component:ProductAddComponent,canActivate:[LoginGuard]},
  {path:"login", component:LoginComponent },
  {path:"register", component:RegisterComponent},
  {path:"profiles/:userName", component:ProfileComponent},
  {path:"profiles/:userName/articles/:id", component:ArticleComponent,canActivate:[LoginGuard]},
  {path:"profiles/:userName/update", component:ProfileUpdateComponent,canActivate:[LoginGuard]},
  {path:"chat", component:ChatComponent, canActivate:[LoginGuard]},
  {path:"chat/:userName", component:ChatComponent, canActivate:[LoginGuard]},
  {path:"profiles/:userName/fallowerlist", component:FallowingAndFallowedListComponent},
  {path:"profiles/:userName/fallowinglist", component:FallowingAndFallowedListComponent},
  {path:"profiles/:userName/article/add", component:ArticleAddComponent,canActivate:[LoginGuard]},
  {path:"profiles/:userName/article/:id/update", component:ArticleAddComponent,canActivate:[LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
