import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprite-component',
  templateUrl: 'sprite.component.html',
  styleUrls: ['app.component.css']
})
export class SpriteComponent {
  title = 'sprite component';

  @Input("picture-url")
  public pictureUrl: string | undefined;

  getPictureUrl():string {
    return <string>this.pictureUrl;
  }

  getName():string {
    return <string>this.pictureUrl;
  }

}
