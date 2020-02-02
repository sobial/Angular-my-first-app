import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false ;
  serverCreationStatus: string = "No server created!";
  serverName: string = '';

  constructor() { 
    setTimeout( () => {
      this.allowNewServer = true;
    }, 3000)
  }

  ngOnInit() {
  }
  onCreateServer(){
    this.serverCreationStatus = "server created!"
  }
  onUpdateServerName(even: Event){
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
}

}
