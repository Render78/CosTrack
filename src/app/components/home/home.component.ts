import { Component } from '@angular/core';
import { StatCardComponent } from '../stat-card/stat-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [StatCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
