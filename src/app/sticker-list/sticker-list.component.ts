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
  @Input() stickerPadding? = 15;
  @Input() codeSize? = 150;
  @Input() nameSize? = 21;
  @Input() cutlineToggle? = true;
  @Input() contentToggle? = true;
  @Input() nameToggle? = true;
  @Input() products: Product[] = [];
}
