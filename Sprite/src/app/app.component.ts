import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'sprite';

  private pictureUrl:string = "http://fe.it-academy.by/Examples/cards2.png";

  private pictureOffsetX:string = "-290px";

  private pictureOffsetY:string = "-389px";

  private pictureWidth:string = "138px";

  private pictureHeight:string = "188px";

  getPictureUrl():string {
    return this.pictureUrl;
  };

  getPictureOffsetX():string {
    return this.pictureOffsetX;
  };

  getPictureOffsetY():string {
    return this.pictureOffsetY;
  };

  getPictureWidth():string {
    return this.pictureWidth;
  };

  getPictureHeight():string {
    return this.pictureHeight;
  };

  setPictureHeight():void {
    if (this.pictureOffsetY === "-389px") this.pictureOffsetY = "-583px";
    else this.pictureOffsetY = "-389px";
  }

  changeSpriteView():void {
    this.setPictureHeight();
  }
}
