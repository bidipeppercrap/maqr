import { Component, Input } from '@angular/core';
import { Sticker } from '../../models/sticker';

@Component({
  selector: 'sticker',
  standalone: true,
  imports: [],
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
}
