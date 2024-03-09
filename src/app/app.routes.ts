import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CsvComponent } from './csv/csv.component';

export const routes: Routes = [
    { path: "about", component: AboutComponent },
    { path: "", component: CsvComponent }
];
