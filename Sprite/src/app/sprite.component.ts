import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'sprite-component',
  templateUrl: 'sprite.component.html',
  styleUrls: ['app.component.css']
})
export class SpriteComponent {
  title = 'sprite component';

  @Input("picture-url")
  public pictureUrl: string | undefined;

  @Input("picture-offsetX")
  public pictureOffsetX: string | undefined;

  @Input("picture-offsetY")
  public pictureOffsetY: string | undefined;

  @Input("picture-width")
  public pictureWidth: string | undefined;

  @Input("picture-height")
  public pictureHeight: string | undefined;

  @Output("sprite-clicked")
  public spriteClicked:EventEmitter<void>=new EventEmitter<void>();

}
