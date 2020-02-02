import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false ;
  serverCreationStatus: string = "No server created!";
  serverCreated = false;
  serverName: string = '';
  servers = ['test1' , 'test2'];

  constructor() { 
    setTimeout( () => {
      this.allowNewServer = true;
    }, 3000)
  }

  ngOnInit() {
  }
  onCreateServer(){
    this.servers.push(this.serverName);
    this.serverCreated = true;
    this.serverCreationStatus = "server " +this.serverName + " created!"
  }
  onUpdateServerName(even: Event){
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
}

}
