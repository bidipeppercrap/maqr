import { Component, signal } from '@angular/core';
import Papa from "papaparse";
import { StickerListComponent } from '../sticker-list/sticker-list.component';
import { Product } from '../../models/product';

@Component({
  selector: 'app-csv',
  standalone: true,
  imports: [StickerListComponent],
  templateUrl: './csv.component.html',
  styleUrl: './csv.component.css'
})
export class CsvComponent {
  logoUrl = signal("");
  borderRadius = signal(9);
  stickerPadding = signal(15);
  codeSize = signal(150);
  nameSize = signal(21);
  cutlineToggle = signal(true);
  contentToggle = signal(true);
  nameToggle = signal(true);
  products = signal<Product[]>([]);

  logoUrlChange(event: Event) {
    const { value } = event.target as HTMLInputElement;
    this.logoUrl.set(value);
  }
  onBorderRadiusChange(event: Event) {
    const { value } = event.target as HTMLInputElement;
    this.borderRadius.set(parseInt(value) || 9);
  }
  onStickerPaddingChange(event: Event) {
    const { value } = event.target as HTMLInputElement;
    this.stickerPadding.set(parseInt(value) || 15);
  }
  onCodeSizeChange(event: Event) {
    const { value } = event.target as HTMLInputElement;
    this.codeSize.set(parseInt(value) || 150);
  }
  onNameSizeChange(event: Event) {
    const { value } = event.target as HTMLInputElement;
    this.nameSize.set(parseInt(value) || 21);
  }

  onCutlineToggle() { this.cutlineToggle.set(!this.cutlineToggle()) }
  onContentToggle() { this.contentToggle.set(!this.contentToggle()) }
  onNameToggle() { this.nameToggle.set(!this.nameToggle()) }

  onFileSelected(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (!fileInput.files) return;

    const file: File = fileInput.files[0];
    const csvData: Product[] = [];

    Papa.parse(file, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: function (answer) {
        answer.data.map((row) => {
          const { name, code } = row as any;

          const product: Product = {
            name: row && row.hasOwnProperty("name") ? name : "",
            code: row && row.hasOwnProperty("code") ? code : ""
          };

          csvData.push(product);
        });
      }
    });

    this.products.set(csvData);
  }
}
