import { MessageList } from "./messageListModel";

export interface MessageModel extends MessageList{
  id:number;
  gonderenUserName:string;
  alanUserName:string;
  date:Date;
  text:string;
  isRead:boolean;
}
