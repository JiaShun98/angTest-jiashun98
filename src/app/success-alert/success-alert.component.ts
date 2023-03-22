import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server created !";
  serverName="Test";
  userName : String = "";
  serverCreated = false;
  serverArr = ['Server was created!! Server name : Test123','Server was created!! Server name : Test456'];
  constructor(){
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated= true;
    this.serverCreationStatus = "Server was created!! Server name :" + this.serverName;
    this.serverArr.push(this.serverCreationStatus);
  }

  onUpdateServerName(event : any){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onResetUserName(){
    this.userName = "";
  }

  getColor(){
    console.log(this.serverCreated);
    return this.serverCreated ? 'green' :'red';
  }

}
