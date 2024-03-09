import { Component, Input } from '@angular/core';
import { Sticker } from '../../models/sticker';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'sticker',
  standalone: true,
  imports: [NgClass, NgStyle],
  templateUrl: './sticker.component.html',
  styleUrl: './sticker.component.css'
})
export class StickerComponent {
  @Input({ required: true }) sticker: Sticker = {
    product: {
      name: "",
      code: ""
    }
  };

  @Input() borderRadius? = 9;
  @Input() stickerHeight? = 300;
  @Input() stickerWidth? = 300;
  @Input() stickerPadding? = 15;
  @Input() codeSize? = 150;
  @Input() nameSize? = 21;
  @Input() cutlineToggle? = true;
  @Input() contentToggle? = true;
  @Input() nameToggle? = true;
}
