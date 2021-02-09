import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'sprite';

  private pictureUrl:string = "http://fe.it-academy.by/Examples/cards2.png";

  getPictureUrl():string {
    return this.pictureUrl;
  };
}
