import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers = [];
  private c = 0;
  // loadFeature = 'recipe';

  // onNagivate(feature:string){
  //   this.loadFeature=feature;
  // }

  onAddServer() {
    this.servers.push(`Another Server ${this.c++}`);
  }

  onRemoveServer(id: number) {
    const position = id ;
    this.servers.splice(position, 1);
  }
}
