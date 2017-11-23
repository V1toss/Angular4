import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'TestServer', content: 'Just a test'}];

  onServerAdded(serverData: {serverName: string, serverContent:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintrData: {serverName: string, serverContent:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintrData.serverName,
      content: blueprintrData.serverContent
    });
  }
}
