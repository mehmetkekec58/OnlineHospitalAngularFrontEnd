import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { FunctionsService } from 'src/app/services/functions.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
login=false;
  constructor(private toastrService:ToastrService, private authService:AuthService,private functionsService:FunctionsService, private funtionsService:FunctionsService,private router:Router) { }

  ngOnInit(): void {

   this.IsLogin();
  }

  logOut(){
    if (this.authService.isAuthenticated) {
      this.funtionsService.removeToken();
      this.funtionsService.removeUserName();
    this.toastrService.info("Çıkış yapıldı");
    window.location.reload()
    this.IsLogin();
    }


  }
  IsLogin(){

    if (this.funtionsService.getToken()) {
      this.login=true;
    }else{
      this.login=false;
    }
  }
goProfile(){
  this.router.navigate(["profiles/"+this.functionsService.getUserName()])
}
goArticleAdd(){
  this.router.navigate(["profiles/"+this.functionsService.getUserName()+"/article/add"])
}
message(){
  this.router.navigate(["chat"])
}
}

