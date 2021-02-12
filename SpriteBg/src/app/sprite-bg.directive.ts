import {Attribute, Directive, ElementRef, HostBinding} from '@angular/core';


@Directive({
  selector: '[sprite-bg]'
})
export class SpriteBgDirective {

  @HostBinding("style.backgroundImage")
  private hostBgImage:string = "url('http://fe.it-academy.by/Examples/smileys.png')";

  @HostBinding("style.backgroundRepeat")
  private hostBgRepeat:string = "no-repeat";

  @HostBinding("style.width")
  private hostBgWidth:string = "25px";

  @HostBinding("style.height")
  private hostBgHeight:string = "25px";

  @HostBinding("style.backgroundPositionX")
  private hostBgPositionX:string = "99%";

  @HostBinding("style.backgroundPositionY")
  private hostBgPositionY:string = "33%";

  constructor(private element: ElementRef,
              @Attribute("sprite-url") spriteUrl: string,
              @Attribute("sprite-width") spriteWidth: string,
              @Attribute("sprite-height") spriteHeight: string,
              @Attribute("sprite-offset-x") spriteOffsetX: string,
              @Attribute("sprite-offset-y") spriteOffsetY: string,
              ) {
    if (spriteUrl) this.hostBgImage = spriteUrl;
    if (spriteWidth) this.hostBgWidth = spriteWidth;
    if (spriteHeight) this.hostBgHeight = spriteHeight;
    if (spriteOffsetX) this.hostBgPositionX = spriteOffsetX;
    if (spriteOffsetY) this.hostBgPositionY = spriteOffsetY;
  }
  }
