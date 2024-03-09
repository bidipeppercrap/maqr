import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  aboutDetail = {
    author: {
      name: "bidipeppercrap",
      phone: "+62 851 7171 9191",
      email: "bidipeppercrap@proton.me",
      website: "bidipeppercrap.com"
    },
    description: "Make QR Code generation easier"
  };
}
