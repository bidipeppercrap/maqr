import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';
import { StickerComponent } from '../sticker/sticker.component';

@Component({
  selector: 'sticker-list',
  standalone: true,
  imports: [StickerComponent],
  templateUrl: './sticker-list.component.html',
  styleUrl: './sticker-list.component.css'
})
export class StickerListComponent {
  @Input() logoUrl?: string;
  @Input() borderRadius? = 9;
  @Input() stickerHeight? = 300;
  @Input() stickerWidth? = 300;
  @Input() stickerPadding? = 15;
  @Input() logoHeight? = 0;
  @Input() logoWidth? = 150;
  @Input() codeSize? = 150;
  @Input() nameSize? = 21;
  @Input() cutlineToggle? = true;
  @Input() contentToggle? = true;
  @Input() nameToggle? = true;
  @Input() products: Product[] = [];
}
