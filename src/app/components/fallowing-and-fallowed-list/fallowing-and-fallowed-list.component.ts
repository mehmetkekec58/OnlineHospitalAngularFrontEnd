import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Fallow2 } from 'src/app/models/fallow2';
import { FingAndFedList } from 'src/app/models/fingAndFedList';
import { Profile } from 'src/app/models/profile';
import { FallowService } from 'src/app/services/fallow.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-fallowing-and-fallowed-list',
  templateUrl: './fallowing-and-fallowed-list.component.html',
  styleUrls: ['./fallowing-and-fallowed-list.component.css']
})
export class FallowingAndFallowedListComponent implements OnInit {

  fallow2FedAndFingList:Fallow2[]=[]
falowedList=true;
NofallowedOrFallowing=false;
profile:Profile;
  constructor(private fallowService:FallowService, private activatedRoute: ActivatedRoute, private profileService:ProfileService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if (params["userName"]) {
        var path = window.location.pathname.split('/')[3]
        if(path == "fallowerlist"){
          this.falowedList=true;
    this.getFallowed(params["userName"])
        }else if(path =="fallowinglist"){
          this.falowedList=false;
          this.getFallowing(params["userName"])
        }else{

        }
      }
  })}
getFallowed(username:string){
this.fallowService.getFalowedAndFallowingList(username).subscribe(response=>{
  //console.log(response.data.fedList)
  //console.log(response.data.fedList)
  if (response.data.fedList==null) {
    this.NofallowedOrFallowing=true
  }else{
    this.fallow2FedAndFingList=response.data.fedList
  }



})
}

getFallowing(username:string){
  this.fallowService.getFalowedAndFallowingList(username).subscribe(response=>{
    console.log(response.data.fingList)
    if (response.data.fingList==null) {
      this.NofallowedOrFallowing=true
    }else{
  this.fallow2FedAndFingList=response.data.fingList
    }
  })
}
getFallowAndFallowingDetail(username:string){
  this.profileService.getProfileDetail2(username).subscribe(response=>{
    return response.data;
  })
}
}
