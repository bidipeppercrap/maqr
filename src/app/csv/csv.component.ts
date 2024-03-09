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
  logoUrl = signal("test");

  products = signal<Product[]>([]);

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

  logoUrlChange(event: Event) {
    const { value } = event.target as HTMLInputElement;
    this.logoUrl.set(value);
  }
}
