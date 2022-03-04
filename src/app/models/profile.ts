import { ArticleProfile } from "./articleProfile";
import { ProfilePhotoUrl } from "./profilePhotoUrl";

export interface Profile{
    id:number;
    userName:string;
    firstName:string;
    lastName:string;
    aboutMe:string;
    profilePhotoUrl:ProfilePhotoUrl[];
    articleDetail:ArticleProfile[];
}